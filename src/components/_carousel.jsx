import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MobileScreenshot = ({ src, alt }) => (
  <div className="relative mx-auto group">
    {/* Minimalist Phone Frame */}
    <div className="relative border-gray-800 bg-gray-800 border-8 rounded-4xl h-125 w-62.5 shadow-xl overflow-hidden transition-transform duration-300">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-800 rounded-b-xl z-20"></div>
      {/* Screen */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  </div>
);

export default function Carousel({ screenshots }) {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container mx-auto px-6 py-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore the Interface</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A seamless experience across every screen. See how TaskMaster simplifies your workflow.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1} // Default for mobile
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            // Responsive breakpoints
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1800: { slidesPerView: 4 },
          }}
          className="pb-14 px-10!" // Padding for navigation arrows
        >
          {screenshots.map((url, index) => (
            <SwiperSlide key={index}>
              <MobileScreenshot src={url} alt={`Screenshot ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom styles to match your blue brand color */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: #2563eb !important; 
          transform: scale(0.7);
        }
        .swiper-pagination-bullet-active {
          background: #2563eb !important;
        }
      `}</style>
    </section>
  );
}