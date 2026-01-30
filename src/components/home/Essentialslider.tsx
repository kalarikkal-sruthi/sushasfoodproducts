'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

const Essentialslider: React.FC = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img 
            src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" 
            alt="Page 1" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" 
            alt="Page 2" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" 
            alt="Page 3" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" 
            alt="Page 4" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" 
            alt="Page 5" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" 
            alt="Page 6" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" 
            alt="Page 7" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" 
            alt="Page 8" 
          />
        </SwiperSlide>
        <SwiperSlide>
          <img 
            src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" 
            alt="Page 9" 
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Essentialslider;