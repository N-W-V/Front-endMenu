import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SliderItem from './SliderItem';
import Foto1 from '../../../../assets/images/slider_foto_1.avif';
import Foto2 from '../../../../assets/images/slider_foto_2.avif';
import Foto3 from '../../../../assets/images/slider_foto_3.jpg';
import Foto4 from '../../../../assets/images/slider_foto_4.jpg';

export default function Slider() {
  return (
    <section>
      <div className="container">
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><SliderItem Foto={Foto1} /></SwiperSlide>
          <SwiperSlide><SliderItem Foto={Foto2} /></SwiperSlide>
          <SwiperSlide><SliderItem Foto={Foto3} /></SwiperSlide>
          <SwiperSlide><SliderItem Foto={Foto4} /></SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}