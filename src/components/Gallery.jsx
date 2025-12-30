import React, { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import assets from '../assets/assets'
import { motion } from 'motion/react'
import Title from './Title'

const Gallery = () => {
  const swiperRef = useRef(null)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const events = [
    {
      title: 'Product Launch 2025',
      date: 'Jan 10, 2025 — 9:00 AM - 5:00 PM',
      location: 'Kuala Lumpur, Malaysia',
      image: assets.event1,
      images: [
        assets.subevent1, assets.subevent2, assets.subevent3,
        assets.subevent4, assets.subevent5, assets.subevent6,
      ],
      details: {
        overview: `The Product Launch 2025 showcased our newest digital platform
        designed to optimize corporate workflow operations.`,
        objective: `Our goal was to highlight system improvements, demonstrate
        real-world performance, and build early onboarding interest.`,
        results: `Over 200 industry guests attended. 90% expressed interest in
        future integration. Post-launch engagement increased by 230%.`,
      }
    },
    {
      title: 'Marketing Workshop',
      date: 'Feb 15, 2025 — 10:00 AM - 4:00 PM',
      location: 'Johor Bahru, Malaysia',
      image: assets.event2,
      images: [
        assets.event2, assets.event3, assets.event1,
        assets.event4, assets.event5, assets.event6,
      ],
      details: {
        overview: `This workshop helped align partners on modern digital marketing
        strategies and collaborative brand scaling.`,
        objective: `Provide structured guidance, hands-on exercises, and campaign
        frameworks for increased market efficiency.`,
        results: `Participants reported clearer branding direction and higher
        content production confidence.`,
      }
    },
    {
      title: 'Annual Company Meetup',
      date: 'Mar 5, 2025 — Full Day Event',
      location: 'Penang, Malaysia',
      image: assets.event3,
      images: [
        assets.event1, assets.event2, assets.event3,
        assets.event4, assets.event5, assets.event6,
      ],
      details: {
        overview: `The meetup celebrated company milestones and future objectives
        while strengthening team connections.`,
        objective: `Encourage team bonding, establish clear operational goals, and
        recognize annual achievements.`,
        results: `Team alignment improved significantly. New goals were set and
        productivity index rose sharply.`,
      }
    }
  ]

  const handleOpen = (event) => setSelectedEvent(event)
  const handleClose = () => setSelectedEvent(null)

  // Disable page scrolling when modal is active
  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "auto"
  }, [selectedEvent])

  return (

    <div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="events"
      className="flex flex-col items-center gap-7
      px-4 sm:px-12 lg:px-24 xl:px-40 pt-30
      text-gray-700 dark:text-white"
    >

      <Title
        title="Promotional Events"
        desc="Highlights from our latest events, workshops, and company milestones."
      />

      <div className="w-full relative mt-10">

        {/* Custom Navigation */}
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute top-1/2 left-4 z-20 -translate-y-1/2
          bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all"
        >
          ◀
        </button>
        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute top-1/2 right-4 z-20 -translate-y-1/2
          bg-black/30 hover:bg-black/50 text-white rounded-full p-3 transition-all"
        >
          ▶
        </button>

        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={1000}
          className="w-full h-96 sm:h-[500px] lg:h-[600px]"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div 
              onClick={() => handleOpen(event)}
              className="relative w-full h-full group">

                {/* Image */}
                <motion.img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-90"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                />

                {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-black/30 flex flex-col justify-center items-start p-8 sm:p-16 text-white pointer-events-none group-hover:bg-black/40 transition"
                  >
                  <motion.h2
                    className="text-2xl sm:text-4xl font-bold"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    {event.title}
                  </motion.h2>

                  <motion.p
                    className="mt-2 sm:mt-4 text-sm sm:text-lg opacity-80"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    {event.date}
                  </motion.p>

                  <motion.p
                    className="mt-2 sm:mt-4 text-sm sm:text-lg opacity-90"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    Click to view more →
                  </motion.p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* ----------------------------------------------------- */}
      {/* EVENT DETAILS MODAL */}
      {/* ----------------------------------------------------- */}

      {selectedEvent && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex justify-center items-center p-6">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="relative bg-white dark:bg-gray-900 rounded-xl 
                       shadow-2xl w-full max-w-6xl p-6 
                       overflow-y-auto max-h-[90vh]"
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-xl text-white 
                       bg-black/50 px-3 py-1 rounded-lg shadow-md 
                       hover:scale-110 transition"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              {selectedEvent.title}
            </h2>

            {/* IMAGES GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
              {selectedEvent.images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  className="w-full rounded-lg shadow-md object-cover h-40"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                />
              ))}
            </div>

            {/* META */}
            <div className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <p><span className="font-semibold">Date:</span> {selectedEvent.date}</p>
              <p><span className="font-semibold">Location:</span> {selectedEvent.location}</p>
            </div>

            {/* DETAILS */}
            <div className="space-y-6 text-gray-800 dark:text-gray-200">

              <div>
                <h3 className="font-bold text-xl mb-2">Overview</h3>
                <p>{selectedEvent.details.overview}</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2">Objective</h3>
                <p>{selectedEvent.details.objective}</p>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2">Results & Highlights</h3>
                <p>{selectedEvent.details.results}</p>
              </div>

            </div>

          </motion.div>
        </div>
      )}

    </div>
  )
}

export default Gallery
