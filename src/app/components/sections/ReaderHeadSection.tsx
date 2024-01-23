import { MdArrowOutward } from "react-icons/md";

const ReaderHeadSection = () => {
	return (
		<div className="flex flex-col items-center justify-between bg-secondary py-16 px-4 font-inter border-y border-stroke lg:px-16 lg:flex-row">
			<div>
				<p className="w-44 bg-gray text-white px-2 py-1 rounded-md">
					What Our Readers Say
				</p>
				<h3 className="text-2xl mt-2 font-kum font-medium text-white lg:text-4xl">
					Real Words from Real Readers
				</h3>
			</div>
			<button className="w-full mt-4 bg-black flex items-center justify-center border border-stroke py-2 px-4 rounded-md text-white font-inter duration-500 hover:bg-secondary lg:w-[20%]">
				View All Testimonials
				<MdArrowOutward className="ml-2 text-primary" />
			</button>
		</div>
	);
};

export default ReaderHeadSection;
