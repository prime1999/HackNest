import Image from "next/image";

const BlogInfoSection = () => {
	return (
		<div className="border-y border-stroke font-inter">
			<div className="flex flex-col items-center border-b border-stroke lg:flex-row">
				<div className="w-full flex items-center justify-center p-8 lg:w-[40%]">
					<div className="">
						<Image
							src="/icons/hack.png"
							width={30}
							height={30}
							alt="hack icon"
						/>
						<h4 className="text-2xl text-white mt-4">HackNest Blog</h4>
						<p className="text-gray text-sm mt-2">
							Stay informed with our blog section dedicated to future
							technology.
						</p>
					</div>
				</div>
				<div className="p-8 lg:border-l lg:border-stroke">
					<div className="grid grid-cols-1 gap-4 border-t border-stroke pt-4 lg:border-t-0 lg:grid-cols-2 lg:p-8">
						<div className="bg-secondary border border-stroke rounded-md p-4 mt-4 lg:mt-0">
							<h6 className="text-xl text-white">Quality</h6>
							<p className="mt-4 text-gray text-sm w-[80%]">
								Over 1,000 articles on emerging tech trends and breakthroughs.
							</p>
						</div>
						<div className="bg-secondary border border-stroke rounded-md p-4">
							<h6 className="text-xl text-white">Variety</h6>
							<p className="mt-4 text-gray text-sm w-[80%]">
								Articles cover fields like AI, robotics, biotechnology, and
								more.
							</p>
						</div>
						<div className="bg-secondary border border-stroke rounded-md p-4">
							<h6 className="text-xl text-white">Frequency</h6>
							<p className="mt-4 text-gray text-sm w-[80%]">
								Fresh content added daily to keep you up to date.
							</p>
						</div>
						<div className="bg-secondary border border-stroke rounded-md p-4">
							<h6 className="text-xl text-white">Authoritative</h6>
							<p className="mt-4 text-gray text-sm w-[80%]">
								Written by our team of tech experts and industry professionals.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center lg:flex-row">
				<div className="w-full flex items-center justify-center p-8 lg:w-[36.5%]">
					<div className="">
						<Image
							src="/icons/research.png"
							width={30}
							height={30}
							alt="hack icon"
						/>
						<h4 className="text-2xl text-white mt-4">
							Research Insights Blogs
						</h4>
						<p className="text-gray text-sm mt-2">
							Dive deep into future technology concepts with our research
							section.
						</p>
					</div>
				</div>
				<div className="p-8 lg:border-l lg:border-stroke">
					<div className="grid grid-cols-1 gap-4 border-t border-stroke pt-4 lg:border-t-0 lg:grid-cols-2 lg:p-8">
						<div className="bg-secondary border border-stroke rounded-md p-4 mt-4 lg:mt-0">
							<h6 className="text-xl text-white">Depth</h6>
							<p className="mt-4 text-gray text-sm w-[80%]">
								500+ research articles for in-depth understanding.
							</p>
						</div>
						<div className="bg-secondary border border-stroke rounded-md p-4">
							<h6 className="text-xl text-white">Graphics</h6>
							<p className="mt-4 text-gray text-sm w-[80%]">
								Visual aids and infographics to enhance comprehension.
							</p>
						</div>
						<div className="bg-secondary border border-stroke rounded-md p-4">
							<h6 className="text-xl text-white">Trends</h6>
							<p className="mt-4 text-gray text-sm w-[80%]">
								Explore emerging trends in future technology research.
							</p>
						</div>
						<div className="bg-secondary border border-stroke rounded-md p-4">
							<h6 className="text-xl text-white">Contributors</h6>
							<p className="mt-4 text-gray text-sm w-[80%]">
								Contributions from tech researchers and academics.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogInfoSection;
