"use Client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BtnSlider = () => {
	const breakpoints = {
		// when window width is >= 320px
		320: {
			spaceBetween: -10,
			slidesPerView: 2,
		},
		// when window width is >= 480px
		480: {
			spaceBetween: -10,
			slidesPerView: 3,
		},
		// when window width is >= 768px
		768: {
			spaceBetween: -10,
			slidesPerView: -10,
		},
		// when window width is >= 992px
		992: {
			spaceBetween: -10,
			slidesPerView: 6,
		},
		// when window width is >= 1200px
		1200: {
			spaceBetween: -10,
			slidesPerView: 7,
		},
	};
	return (
		<Swiper
			slidesPerView={"auto"}
			spaceBetween={-10}
			breakpoints={breakpoints}
			navigation
			className="w-11/12 mx-auto py-8 px-4 justify-between font-inter font-medium text-sm overflow-auto lg:flex"
		>
			<SwiperSlide>
				<button className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black">
					All
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black">
					AI
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black">
					DevOps
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black">
					AR
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black">
					Blockchain
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black">
					Cyber-security
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black">
					UI/UX
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black">
					Others
				</button>
			</SwiperSlide>
		</Swiper>
	);
};

export default BtnSlider;
