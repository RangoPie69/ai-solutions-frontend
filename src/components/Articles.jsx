import React, { useRef } from 'react'
import Title from './Title'
import { motion } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import articlesData from '../data/articlesData'
import 'swiper/css'
import 'swiper/css/pagination'

const Articles = () => {
  const swiperRef = useRef(null)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="articles"
      className="flex flex-col items-center gap-7
      px-4 sm:px-12 lg:px-24 xl:px-40 pt-30
      text-gray-700 dark:text-white"
    >
      <Title
        title="Articles & Insights"
        desc="Expert insights and thought leadership content that highlights our experience and helps businesses grow."
      />

      <div className="relative w-full max-w-6xl">
        {/* Custom arrows */}
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute -left-6 top-1/2 z-10 -translate-y-1/2
          bg-white dark:bg-gray-800 shadow-lg rounded-full p-3
          hover:scale-110 transition"
        >
          ◀
        </button>

        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute -right-6 top-1/2 z-10 -translate-y-1/2
          bg-white dark:bg-gray-800 shadow-lg rounded-full p-3
          hover:scale-110 transition"
        >
          ▶
        </button>

        <Swiper
          modules={[Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          centeredSlides
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {articlesData.map((article, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`group h-full rounded-xl overflow-hidden
                  border border-gray-100 dark:border-gray-700
                  bg-white dark:bg-gray-900
                  shadow-xl shadow-gray-100 dark:shadow-white/5
                  transition-all duration-500
                  ${isActive ? 'scale-105' : 'scale-95 opacity-70'}`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={article.cover}
                      alt={article.title}
                      className="h-48 w-full object-cover
                      group-hover:scale-110 transition duration-700"
                    />

                    {/* Overlay */}
                    <Link
                      to={`/articles/${article.slug}`}
                      className="absolute inset-0 bg-black/60
                      opacity-0 group-hover:opacity-100
                      transition flex items-center justify-center"
                    >
                      <span className="text-white text-sm font-medium">
                        Read Article
                      </span>
                    </Link>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3">
                    <span className="text-xs opacity-60">
                      {article.author} • {article.category}
                    </span>

                    <h3 className="font-semibold text-lg leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-sm opacity-70">
                      {article.excerpt}
                    </p>

                    <Link
                    to={`/articles/${article.slug}`}
                    className="text-primary text-sm font-medium w-fit hover:underline"
                  >
                    Read more →
                  </Link>

                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  )
}

export default Articles
