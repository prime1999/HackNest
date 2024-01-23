import { MdArrowOutward } from "react-icons/md";

const KnowledgeHeadSection = () => {
	return (
		<div className="flex flex-col items-center justify-between bg-secondary py-16 px-4 font-inter lg:px-16 lg:flex-row">
			<div>
				<p className="w-72 bg-gray text-white px-2 py-1 rounded-md">
					Your Gateway to In-Depth Information
				</p>
				<h3 className="text-2xl mt-2 font-kum font-medium text-white lg:text-4xl">
					Unlock Valuable Knowledge with HackNest's Resources
				</h3>
			</div>
			<button className="w-full mt-4 bg-black flex items-center justify-center border border-stroke py-2 px-4 rounded-md text-white font-inter duration-500 hover:bg-secondary lg:w-[16%]">
				View All Resources
				<MdArrowOutward className="ml-2 text-primary" />
			</button>
		</div>
	);
};

export default KnowledgeHeadSection;
