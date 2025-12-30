import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const API_URL = "https://ai-solutions-backend-58ry.onrender.com"

const ContactUs = () => {


const onSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formObject = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      toast.error("Failed to send message");
    }
  } catch (error) {
    toast.error("Server error. Try again.");
  }
};



  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{ staggerChildren: 0.2}}
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12
    lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Reach out to us' desc='Let us know how we can help. Our team is ready to support your business with AI solutions.'/>

      <motion.form 
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.4}}
      viewport={{once: true}}
      onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

        <div>
          <p className='mb-2 text-sm font-medium'>Your Name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300
          dark:border-gray-600'>
            <img src={assets.person_icon} alt="" />
            <input name='name' type="text" placeholder='Enter your name' className='w-full
              p-3 text-sm outline-none' required />
          </div>
        </div>

        <div>
          <p className='mb-2 text-sm font-medium'>Email id</p>
          <div className='flex pl-3 rounded-lg border border-gray-300
          dark:border-gray-600'>
            <img src={assets.email_icon} alt="" />
            <input name='email' type="text" placeholder='Enter your email' className='w-full
              p-3 text-sm outline-none'required />
          </div>
        </div>

        <div>
          <p className='mb-2 text-sm font-medium'>Phone Number</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.phone_icon} alt="" />
            <input name='phone' type="text" placeholder='Enter your phone number' className='w-full p-3 text-sm outline-none' required />
          </div>
        </div>

        <div>
          <p className='mb-2 text-sm font-medium'>Company Name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.company_icon} alt="" />
            <input name='company' type="text" placeholder='Enter company name' className='w-full p-3 text-sm outline-none' required />
          </div>
        </div>

        <div>
          <p className='mb-2 text-sm font-medium'>Country</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.location_icon} alt="" />
            <input name='country' type="text" placeholder='Enter your country' className='w-full p-3 text-sm outline-none' required />
          </div>
        </div>

        <div>
          <p className='mb-2 text-sm font-medium'>Job Title</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.briefcase_icon} alt="" />
            <input name='jobTitle' type="text" placeholder='Enter job title' className='w-full p-3 text-sm outline-none' required />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Job Details / Requirements</p>
          <textarea name='jobDetails' rows={6} placeholder='Describe your project requirements...' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required />
        </div>


        <button type='submit' className='w-max flex gap-2 bg-primary text-white
        text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103
        transition-all'>
          Submit <img src={assets.arrow_icon} alt='' className='w-4' />
        </button>

      </motion.form>
    </motion.div>
  )
}

export default ContactUs
