import './Projetos.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import slide_image_1 from '../../assets/slide/flor1.jpg'
import slide_image_2 from '../../assets/slide/flor2.jpg'
import slide_image_3 from '../../assets/slide/flor3.jpg'

function Projetos() {
    return (
        <>
            <section id='projetos' className='container-projetos'>
                <h2 className='titulos'>Projetos</h2>

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide_image_1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_3} />
                    </SwiperSlide>
                </Swiper>

            </section>
        </>
    )
}

export default Projetos