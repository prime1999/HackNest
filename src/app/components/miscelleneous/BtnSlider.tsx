"use Client";
import React, { SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {
	setKeyword: React.Dispatch<SetStateAction<string>>;
};

const BtnSlider = ({ setKeyword }: Props) => {
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
			slidesPerView: 5,
		},
		// when window width is >= 992px
		992: {
			spaceBetween: -10,
			slidesPerView: 6,
		},
		// when window width is >= 1200px
		1200: {
			spaceBetween: -10,
			slidesPerView: 8,
		},
	};

	return (
		<Swiper
			slidesPerView={"auto"}
			spaceBetween={-10}
			breakpoints={breakpoints}
			navigation
			className="mx-auto py-8 px-8 justify-between font-inter font-medium text-sm overflow-auto lg:flex"
		>
			<SwiperSlide>
				<button
					onClick={() => setKeyword("all")}
					className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black"
				>
					All
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button
					onClick={() => setKeyword("Artificial Intelligence")}
					className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black"
				>
					AI
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button
					onClick={() => setKeyword("DevOps")}
					className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black"
				>
					DevOps
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button
					onClick={() => setKeyword("AR")}
					className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black"
				>
					AR
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black">
					Blockchain
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button
					onClick={() => setKeyword("Cybersecurity")}
					className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black"
				>
					Cyber-security
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button
					onClick={() => setKeyword("UI/UX Design")}
					className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black"
				>
					UI/UX
				</button>
			</SwiperSlide>
			<SwiperSlide>
				<button className="bg-secondary w-36 p-2 border border-stroke rounded-md text-white duration-500 hover:bg-black">
					More
				</button>
			</SwiperSlide>
		</Swiper>
	);
};

export default BtnSlider;
