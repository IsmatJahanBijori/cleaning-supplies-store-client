// import { Swiper, SwiperSlide } from 'swiper/react'
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';


// const Slider = () => {
//     return (
//         <>
//             <Swiper
//                 slidesPerView={3}
//                 spaceBetween={30}
//                 pagination={{
//                     clickable: true,
//                 }}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>g
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 <SwiperSlide>Slide 5</SwiperSlide>
//                 <SwiperSlide>Slide 6</SwiperSlide>
//                 <SwiperSlide>Slide 7</SwiperSlide>
//                 <SwiperSlide>Slide 8</SwiperSlide>
//                 <SwiperSlide>Slide 9</SwiperSlide>
//             </Swiper>
//         </>
//     )
// }

// export default Slider

// 2

// import React from "react";
// import Slider from "react-slick";

// const SSlider = () => {
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };
//     return (
//         <Slider {...settings}>
//             <div>
//                 <h3>1</h3>
//             </div>
//             <div>
//                 <h3>2</h3>
//             </div>
//             <div>
//                 <h3>3</h3>
//             </div>
//             <div>
//                 <h3>4</h3>
//             </div>
//             <div>
//                 <h3>5</h3>
//             </div>
//             <div>
//                 <h3>6</h3>
//             </div>
//         </Slider>
//     );
// }

// export default SSlider



import Container from '@/components/Container'
import { getFlashSaleData } from '@/utils/flashsale'
import Image from 'next/image'
import React from 'react'

const Slider = () => {
    const flashSaleData = getFlashSaleData()
    const flashSale = flashSaleData.sort((a, b) => {
        return (Number(new Date(b.createdAt))) - (Number(new Date(a.createdAt)));
    })
    return (

        <div className="carousel carousel-center p-4 space-x-4  rounded-box">
            {
                flashSale?.map((data: any) =>
                    <div className="carousel-item">
                        <Container>
                            <Image width={300} height={400} src={data.imageUrl} className="rounded-box object-contain" alt="" />
                        </Container>

                    </div>)
            }
        </div>
    )
}

export default Slider