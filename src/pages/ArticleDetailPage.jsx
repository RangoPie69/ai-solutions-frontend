import { useParams, useNavigate } from 'react-router-dom'
import articlesData from '../data/articlesData'

const ArticleDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = articlesData.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className="pt-32 text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Article not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Return to Previous Page
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-24 text-gray-700 dark:text-white">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back
        </button>
      </div>

      {/* Cover Image */}
      <img
        src={article.cover}
        alt={article.title}
        className="w-full h-[380px] object-cover rounded-xl mb-8"
      />

      {/* Meta */}
      <span className="text-sm opacity-60">
        {article.author} • {article.date} • {article.category}
      </span>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
        {article.title}
      </h1>

      {/* Content */}
      <article className="leading-relaxed whitespace-pre-line text-lg opacity-90">
        {article.content}
      </article>
    </div>
  )
}

export default ArticleDetail
