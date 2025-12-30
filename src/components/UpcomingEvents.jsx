import React, { useState } from 'react'
import Title from './Title'
import { motion, AnimatePresence } from 'motion/react'
import assets from '../assets/assets'

const UpcomingEvents = () => {
  const [activeEvent, setActiveEvent] = useState(null)

  const events = [
    {
      title: 'AI Innovation Workshop',
      date: 'March 20, 2025',
      location: 'Sunderland, UK',
      type: 'Workshop',
      duration: '10:00 AM - 4:00 PM',
      shortDesc: 'Hands-on workshop exploring AI-powered digital solutions.',
      fullDesc:
        'Join our AI Innovation Workshop where we demonstrate how AI-powered assistants and automation tools can transform the digital employee experience. This event includes live demos, interactive sessions, and Q&A with our engineers.',
      keyTakeaways: [
        'Learn practical AI applications for the workplace',
        'Interact with AI-powered tools',
        'Network with industry experts'
      ],
      speakers: [
        { name: 'Dr. Jane Smith', role: 'AI Engineer', image: assets.speaker1 },
        { name: 'John Doe', role: 'Product Manager', image: assets.speaker2 }
      ],
      image: assets.Upcomingevent1,
      registrationLink: 'https://forms.gle/oYS24R1jv776anUb9',
      mapLink: 'https://www.google.com/maps/place/1600+Amphitheatre+Parkway,+Mountain+View,+CA'
    },
    {
      title: 'Future of Digital Work Webinar',
      date: 'April 5, 2025',
      location: 'Online',
      type: 'Webinar',
      duration: '2:00 PM - 3:30 PM',
      shortDesc: 'A live webinar on the future of AI in the workplace.',
      fullDesc:
        'This webinar explores emerging trends in AI-driven employee experience, including predictive support, intelligent automation, and AI-assisted prototyping. Perfect for business leaders and IT professionals.',
      keyTakeaways: [
        'Understand AI trends in digital work',
        'Discover intelligent automation solutions',
        'Q&A with industry experts'
      ],
      speakers: [
        { name: 'Alice Johnson', role: 'Digital Workplace Expert', image: assets.speaker3 }
      ],
      image: assets.Upcomingevent2,
      registrationLink: 'https://forms.gle/oYS24R1jv776anUb9'
    },
    {
      title: 'Product Launch Event',
      date: 'May 12, 2025',
      location: 'London, UK',
      type: 'Launch Event',
      duration: '6:00 PM - 9:00 PM',
      shortDesc: 'Launching our latest AI-powered workplace solution.',
      fullDesc:
        'Be the first to experience our newest AI-powered platform designed to proactively solve digital workplace issues. Network with industry experts and see real-world use cases.',
      keyTakeaways: [
        'Exclusive product demo',
        'Meet the product team',
        'Networking with professionals'
      ],
      speakers: [
        { name: 'Michael Lee', role: 'CEO', image: assets.speaker4 }
      ],
      image: assets.Upcomingevent3,
      registrationLink: 'https://forms.gle/oYS24R1jv776anUb9',
      mapLink: 'https://www.google.com/maps/place/1600+Amphitheatre+Parkway,+Mountain+View,+CA'
    }
  ]

  return (
    <div
      id="events"
      className="flex flex-col items-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      <Title
        title="Upcoming Events"
        desc="Join our upcoming workshops, webinars, and product launches."
      />

      {/* EVENTS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {events.map((event, index) => (
          <motion.div
            key={index}
            layoutId={`event-${index}`} // layoutId for smooth expand
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setActiveEvent(event)}
            className="cursor-pointer rounded-xl overflow-hidden border
            border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900
            shadow-lg hover:scale-103 transition-all"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-44 object-cover"
            />

            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-bold text-lg">{event.title}</h3>
              <p className="text-sm opacity-70">{event.date} • {event.location}</p>
              <p className="text-sm">{event.shortDesc}</p>

              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-3 w-max bg-primary text-white px-5 py-2
                rounded-full text-sm hover:scale-105 transition-all"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveEvent(null)} // close on outside click
          >
            <motion.div
                layoutId={`event-${events.indexOf(activeEvent)}`}
                onClick={(e) => e.stopPropagation()}
                className="
                  relative
                  w-full
                  max-w-lg  
                  max-h-[85vh]    
                  rounded-xl
                  bg-white dark:bg-gray-900
                  shadow-xl
                  overflow-hidden
                "
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setActiveEvent(null)}
                className="absolute top-2 right-2 text-white text-xl hover:scale-125 transition z-10"
              >
                ✕
              </button>

              {/* IMAGE (LANDSCAPE) */}
              <img
                src={activeEvent.image}
                alt=""
                className="w-full h-32 object-cover"
              />

              {/* CONTENT */}
                <div className="
                  p-4
                  flex flex-col gap-2
                  text-gray-800 dark:text-white
                  overflow-y-auto
                  max-h-[calc(85vh-8rem)] ">
                <h2 className="font-bold text-lg">{activeEvent.title}</h2>
                <p className="text-sm opacity-70">{activeEvent.date} • {activeEvent.location}</p>
                <p className="text-sm font-semibold">{activeEvent.type} • {activeEvent.duration}</p>

                <p className="text-sm leading-snug">{activeEvent.fullDesc}</p>

                {activeEvent.keyTakeaways && (
                  <ul className="list-disc list-inside text-sm">
                    {activeEvent.keyTakeaways.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}

                {activeEvent.speakers && (
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Speakers</h3>
                    <div className="flex gap-2 flex-wrap">
                      {activeEvent.speakers.map((speaker, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center w-16">
                          <img src={speaker.image} alt={speaker.name} className="w-10 h-10 rounded-full object-cover mb-1"/>
                          <p className="text-xs font-medium">{speaker.name}</p>
                          <p className="text-[10px] opacity-70">{speaker.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* LINKS */}
                <div className="mt-2 flex flex-col gap-1">
                  {activeEvent.mapLink && (
                    <a
                      href={activeEvent.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 underline"
                    >
                      View Location on Map
                    </a>
                  )}

                  <a
                    href={activeEvent.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-white px-3 py-1.5
                              rounded-full text-sm hover:scale-105 transition w-max"
                  >
                    Register Now →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default UpcomingEvents
