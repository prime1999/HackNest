import { MdArrowOutward } from "react-icons/md";

const ExploreBlogsSection = () => {
	return (
		<div className="flex flex-col items-center justify-between bg-secondary py-16 px-4 font-inter lg:px-16 lg:flex-row">
			<div>
				<p className="w-56 bg-gray text-white px-2 py-1 rounded-md">
					A Knowledge Treasure Trove
				</p>
				<h3 className="text-3xl mt-2 font-medium text-white lg:text-4xl">
					Explore FutureTech's In-Depth Blog Posts
				</h3>
			</div>
			<button className="w-full mt-12 bg-black flex items-center justify-center border border-stroke py-2 px-4 mt-4 rounded-md text-white font-inter duration-500 hover:bg-secondary lg:w-[15%]">
				View All Blogs
				<MdArrowOutward className="ml-2 text-primary" />
			</button>
		</div>
	);
};

export default ExploreBlogsSection;
