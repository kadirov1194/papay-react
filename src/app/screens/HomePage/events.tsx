import React from 'react';
import { Box, Container, Stack } from '@mui/material';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Navigation, Pagination]);



export function Events() {
    const events_list = [
        {
            title: "Boyin foodga marhamat",
            desc: "Yangi Uslubda Yangivcha Tam va Yangicha his",
            author: "Abdurahmon Mufid",
            date: "2023/11/18",
            location: "Toshkent, Nurafshon Ko'cha",
            img: "/restaurant/boyinfood.jpg",
        },
        {
            title: "Katta chegirma endi Belissimoda",
            desc: "Faqat 25 ~ 31- dekabr kunlari antiqa Pizza yegani tashrif buyuring!",
            author: "BelissimoUz",
            date: "2023/2/1",
            location: "Toshkent, Chilonzor",
            img: "/restaurant/boyinfood.jpg",
        },
        {
            title: "Hali his qilmagan hisni his qilmoqchimisiz?",
            desc: "Merhaba promo kodi orqali 50% skidkani qo'lga kiriting",
            author: "Chicken House",
            date: "2023/5/13",
            location: "Toshkent, Qo'yliq",
            img: "/restaurant/boyinfood.jpg",
        },
        {
            title: "Yangicha yondoshuv endi O'zbekistonda!!",
            desc: "O'zbekistondagi eng yirik ulgurji bozor.\n",
            author: "Foot City",
            date: "2023/12/18",
            location: "Toshkent, Yangi Qo'liq Bozori",
            img: "/restaurant/boyinfood.jpg",
        }
    ]
    return (
        <div className='events_frame'>
            <Container sx={{overflow: "hidden"}}>
                <Stack className={"events_main"}>
                    <Box className={"events_text"}>
                        <span className={"category_title"}>Hodisalar</span>
                    </Box>
                    <Box className={"prev_next_frame"}>
                        <img
                            src={"/icons/arrow_right.svg"}
                            className={"swiper-button-prev"}
                            style={{ transform: "rotate(-180deg"}}
                        />
                        <div className={"dot_frame_pagination swiper-pagination"}></div>
                         <img
                            src={"/icons/arrow_right.svg"}
                            className={"swiper-button-next"}
                            alt='rasm'
                        /> 
                        
                    </Box>
                    <Swiper
                        className={"events_info swiper-wrapper"}
                        slidesPerView={"auto"}
                        centeredSlides={true}
                        spaceBetween={30}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        pagination={{
                            el: ".swiper-pagination",
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                    >
                        {events_list.map((value, number) => {
                            return (
                                <SwiperSlide className={"events_info_frame"}>
                                    <div className={"events_img"}>
                                        <img src={value.img} className={"events_img"} alt={value.title} />
                                    </div>
                                    <Box className={"events_desc"}>
                                        <Box className={"events_bott"}>
                                            <Box className={"events_left"}>
                                                <div className={"event_title_speaker"}>
                                                    <strong>{value.title}</strong>
                                                    <div className={"event_organizator"}>
                                                        <img
                                                            alt='rasm'
                                                            src="/icons/speaker.svg"
                                                            style={{ width: "20px", marginRight: "10px" }}
                                                        />
                                                        <p className={"spec_text_author"}>{ value.author}</p>
                                                    </div>
                                                </div>

                                                <p
                                                    className={"text_desc"}
                                                    style={{ marginTop: "10px" }}
                                                >
                                                    {" "}
                                                    {value.desc}{" "}
                                                </p>

                                                <div
                                                    className={"bott_info"}
                                                    style={{ marginTop: "10px" }}
                                                >
                                                    <div className={"bott_info_main"}>
                                                        <img
                                                            src={"/icons/calendar.svg"}
                                                            alt=''
                                                            style={{ marginRight: "10px" }}
                                                        />
                                                        {value.date}
                                                    </div>
                                                    <div className={"bott_info_main"}>
                                                        <img
                                                            src={"/icons/location.svg"}
                                                            alt=''
                                                            style={{ marginRight: "10px" }}
                                                        />
                                                        {value.location}
                                                    </div>
                                                </div>
                                            </Box>
                                        </Box>
                                    </Box>
                                    
                            </SwiperSlide>
                        )
                    })} 

                    </Swiper>
                    
                </Stack>
            </Container>
        </div>
    )
}