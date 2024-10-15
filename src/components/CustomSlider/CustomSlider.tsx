import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import DayTag from '../DayTag';

import 'swiper/css';
import './CustomSlider.css';
import { useEffect, useState } from 'react';

import dayJsonList from '@/utils/data/daylist.json';
import CustomIconsLucid from '../CustomIconsLucid';

interface Day {
  icon: string;
  date: string;
}

interface DataList {
  days: Day[];
}

interface CustomSliderProps {
  day?: string;
  icon?: string;
}

const CustomSlider: React.FC<CustomSliderProps> = ({}) => {
  const [dayData, setDays] = useState<DataList>();
  // const [dayDataCount, setDayDataCount] = useState<number>();

  const handleSetDays = () => {
    setDays(dayJsonList);
  };

  useEffect(() => {
    handleSetDays();
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='w-[100%] h-[100%]'>
        {dayData &&
          dayData.days.map((dayItem, index) => (
            <SwiperSlide
              key={index}
              className='flex items-center justify-center'>
              {({ isActive }) => (
                <DayTag
                  day={dayItem.date}
                  icon={<CustomIconsLucid iconName={dayItem.icon} />}
                  activeFlag={isActive}
                />
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default CustomSlider;
