import React, { useEffect, useState } from 'react'
import { Trash2, LogOut } from 'lucide-react'

const API_URL = "https://ai-solutions-backend-58ry.onrender.com"


const AdminDashboard = ({ onLogout }) => {
  const [submissions, setSubmissions] = useState([])

useEffect(() => {
  fetchSubmissions()
}, [])

const fetchSubmissions = async () => {
  try {
    const token = localStorage.getItem("token")

    const res = await fetch(`${API_URL}/api/contact`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!res.ok) {
      console.error("Unauthorized or failed fetch")
      return
    }

    const data = await res.json()
    setSubmissions(data)
  } catch (error) {
    console.error(error)
  }
}



const clearAll = async () => {
  if (!window.confirm("Clear all submissions?")) return

  try {
    await fetch(`${API_URL}/api/contact`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    setSubmissions([])
  } catch (error) {
    console.error(error)
  }
}


const deleteRow = async (id) => {
  if (!window.confirm("Delete this entry?")) return

  try {
    await fetch(`${API_URL}/api/contact/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    setSubmissions(prev => prev.filter(item => item._id !== id))
  } catch (error) {
    console.error(error)
  }
}


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Admin Dashboard
        </h2>

        <div className="flex gap-3">
          <button
            onClick={clearAll}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Trash2 size={16} /> Clear All
          </button>

          <button
            onClick={onLogout}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {/* Submissions */}
      {submissions.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400 text-center mt-20">
          No submissions available.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {submissions.map((item) => (
            <div
              key={item._id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 flex flex-col justify-between gap-4"
            >
              <div className="space-y-2">
                <p><span className="font-semibold">Name:</span> {item.name}</p>
                <p><span className="font-semibold">Email:</span> {item.email}</p>
                <p><span className="font-semibold">Phone:</span> {item.phone}</p>
                <p><span className="font-semibold">Company:</span> {item.company}</p>
                <p><span className="font-semibold">Country:</span> {item.country}</p>
                <p><span className="font-semibold">Job Title:</span> {item.jobTitle}</p>
                <p><span className="font-semibold">Details:</span> {item.jobDetails}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Submitted: {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => deleteRow(item._id)}
                className="mt-3 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition flex items-center justify-center gap-2"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
