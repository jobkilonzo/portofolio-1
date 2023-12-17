import React from 'react'
import { portofolios } from '../constant'
import PortofolioCard from './PortofolioCard'
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, autoplay } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Autoplay, Navigation} from 'swiper/modules'

const portofolio = () => {
  return (
    <section id='portofolio' className='py-8  xsm:min-h-fit md:min-h-screen max-container'>
      <div className='md:text-5xl  md:text-[#00df9a] text-center'>
        Portofolio
      </div>
     <Swiper
     spaceBetween={20}
     slidesPerView={2}
     navigation 
     loop
     autoplay = {{delay: 2500}}
     pagination={{
                  clickable: true,
                }}
                modules={[Navigation, Autoplay]}
                className="mySwiper md:my-20 ">
     <div>
        {portofolios.map((item) => (
          <SwiperSlide>
            <PortofolioCard className="" key={item.name} {...item}/>
          </SwiperSlide>
        ))}
      </div>
     </Swiper>
    </section>
  )
}

export default portofolio