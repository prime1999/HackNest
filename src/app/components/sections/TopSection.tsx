import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const TopSection = () => {
	return (
		<>
			<div className="border-b border-stroke">
				<div className="w-11/12 flex flex-col mx-auto font-inter lg:flex-row">
					<div className="px-8 py-8 w-full lg:w-1/4">
						<Image
							src="/icons/current-icon.png"
							width={30}
							height={30}
							alt="current-icon"
						/>
						<div className="flex items-center justify-between mt-4">
							<div>
								<h6 className="text-white">Latest News Updates</h6>
								<p className="text-gray">Stay current</p>
							</div>
							<MdArrowOutward className="flex items-center justify-center text-center text-secondary p-2 rounded-full bg-primary w-8 h-8" />
						</div>
						<p className="text-gray text-sm mt-4">
							Over 1000 articles published monthly
						</p>
					</div>
					<div className="px-8 py-8 border-y border-stroke w-full lg:w-1/2 lg:border-x lg:border-y-0">
						<Image
							src="/icons/contributors-icon.png"
							width={30}
							height={30}
							alt="current-icon"
						/>
						<div className="flex items-center justify-between mt-4">
							<div>
								<h6 className="text-white">Expert Contributors</h6>
								<p className="text-gray">Trusted Insights</p>
							</div>
							<MdArrowOutward className="flex items-center justify-center text-center text-secondary p-2 rounded-full bg-primary w-8 h-8" />
						</div>
						<p className="text-gray text-sm mt-4">
							50+ renowned AI experts on our team
						</p>
					</div>
					<div className="px-8 py-8 w-full lg:w-1/4">
						<Image
							src="/icons/readers-Icon.png"
							width={30}
							height={30}
							alt="current-icon"
						/>
						<div className="flex items-center justify-between mt-4">
							<div>
								<h6 className="text-white">Global Readership</h6>
								<p className="text-gray">Worldwide Impact</p>
							</div>
							<MdArrowOutward className="flex items-center justify-center text-center text-secondary p-2 rounded-full bg-primary w-8 h-8" />
						</div>
						<p className="text-gray text-sm mt-4">2 million monthly readers</p>
					</div>
				</div>
			</div>
			<div className="bg-secondary py-16 px-4 font-inter lg:px-16">
				<div>
					<p className="w-40 bg-gray text-white px-2 py-1 rounded-md">
						Unlock the power of
					</p>
					<h3 className="text-4xl mt-2 font-medium text-white">
						HackNest Features
					</h3>
				</div>
			</div>
		</>
	);
};

export default TopSection;
