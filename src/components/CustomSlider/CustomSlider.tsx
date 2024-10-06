import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import DayTag from '../DayTag';

import 'swiper/css';
import './CustomSlider.css';

const CustomSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='w-[100%] h-[100%]'>
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index} className='flex items-center justify-center'>
            {({ isActive }) => <DayTag activeFlag={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CustomSlider;
