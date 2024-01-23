import Image from "next/image";
import { MdArrowOutward, MdRemoveRedEye } from "react-icons/md";

const TopicsSection = () => {
	return (
		<div>
			<div className="flex flex-col lg:flex-row">
				<div className="px-8 py-8 flex w-full lg:border-r lg:border-stroke lg:w-[40%] lg:py-32">
					<div>
						<Image
							src="/icons/ebook.png"
							width={40}
							height={40}
							alt="ebook image"
						/>
						<h4 className="text-xl text-white font-semibold mt-8">Ebooks</h4>
						<p className="text-gray">
							Explore our collection of ebooks covering a wide spectrum of
							future technology topics.
						</p>
						<button className="w-full mt-4 bg-secondary text-gray flex items-center justify-center border border-stroke py-2 px-4 rounded-md font-inter duration-500 hover:bg-black">
							Download Ebooks Now
							<MdArrowOutward className="ml-2 text-primary" />
						</button>
						<div className="flex justify-between bg-secondary border border-stroke p-4 mt-8 rounded-lg w-[80%]">
							<div>
								<p className="text-gray text-sm">Downloaded By</p>
								<h4 className="text-white text-lg font-semibold">10K+ Users</h4>
							</div>
							<div className="flex items-center justify-center rounded-xl bg-black p-2 w-32">
								<Image
									src="/images/image1.png"
									width={40}
									height={40}
									alt="writer"
								/>
								<Image
									src="/images/image2.png"
									width={40}
									height={40}
									alt="writer"
									className="-ml-4"
								/>
								<Image
									src="/images/image3.png"
									width={40}
									height={40}
									alt="writer"
									className="-ml-4"
								/>
								<Image
									src="/images/image4.png"
									width={40}
									height={40}
									alt="writer"
									className="-ml-4"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="">
					<div className="w-11/12 mx-auto py-8 border-t border-stroke lg:border-t-0">
						<div className="flex flex-col items-center mb-4 lg:flex-row">
							<h4 className="w-full font-semibold text-white lg:w-1/4">
								Variety of Topics
							</h4>
							<p className="w-full text-gray mt-4 lg:mt-0 lg:w-3/4">
								Topics include AI in education (25%), renewable energy (20%),
								healthcare (15%), space exploration (25%), and biotechnology
								(15%).
							</p>
						</div>
						<Image
							src="/images/vr.png"
							width={900}
							height={500}
							alt="vr image"
						/>
						<div className="flex flex-col items-center w-full mt-8 lg:flex-row">
							<div className="bg-secondary border border-stroke rounded-md p-4 w-full text-white font-inter lg-w-1/4">
								<p className="text-sm text-gray">Total Ebooks</p>
								<h4 className="font-semibold">Over 100 ebooks</h4>
							</div>
							<div className="flex justify-between items-center bg-secondary border border-stroke rounded-md p-4 w-full mt-4 text-white font-inter lg:mt-0 lg:ml-4 lg:w-3/4">
								<div>
									<p className="text-sm text-gray">Download Formats</p>
									<h4 className="font-semibold">PDF format for access.</h4>
								</div>
								<button className="bg-black flex items-center justify-center border border-stroke py-2 px-4 rounded-md text-white font-inter duration-500 hover:bg-secondary">
									Preview
									<MdRemoveRedEye className="ml-2 text-primary" />
								</button>
							</div>
						</div>
						<div className="bg-secondary border border-stroke rounded-md p-4 w-full mt-4 text-white font-inter">
							<p className="text-sm text-gray">Average Author Expertise</p>
							<h4 className="font-semibold">
								Ebooks are authored by renowned experts with an average of 15
								years of experience
							</h4>
						</div>
					</div>
				</div>
			</div>
			{/* second section */}
			<div className="flex flex-col border-t border-stroke lg:flex-row">
				<div className="px-8 py-8 flex w-full lg:border-r lg:border-stroke lg:w-[46%] lg:py-32">
					<div>
						<Image
							src="/icons/whitepapers.png"
							width={30}
							height={30}
							alt="ebook image"
						/>
						<h4 className="text-xl text-white font-semibold mt-8">
							Whitepapers
						</h4>
						<p className="text-gray">
							Dive into comprehensive reports and analyses with our collection
							of whitepapers.
						</p>
						<button className="w-full mt-4 bg-secondary text-gray flex items-center justify-center border border-stroke py-2 px-4 rounded-md font-inter duration-500 hover:bg-black">
							Download Whitepapers Now
							<MdArrowOutward className="ml-2 text-primary" />
						</button>
						<div className="flex justify-between bg-secondary border border-stroke p-4 mt-8 rounded-lg w-[80%]">
							<div>
								<p className="text-gray text-sm">Downloaded By</p>
								<h4 className="text-white text-lg font-semibold">10K+ Users</h4>
							</div>
							<div className="flex items-center justify-center rounded-xl bg-black p-2 w-32">
								<Image
									src="/images/image1.png"
									width={40}
									height={40}
									alt="writer"
								/>
								<Image
									src="/images/image2.png"
									width={40}
									height={40}
									alt="writer"
									className="-ml-4"
								/>
								<Image
									src="/images/image3.png"
									width={40}
									height={40}
									alt="writer"
									className="-ml-4"
								/>
								<Image
									src="/images/image4.png"
									width={40}
									height={40}
									alt="writer"
									className="-ml-4"
								/>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="w-11/12 mx-auto py-8 border-t border-stroke lg:border-t-0">
						<div className="flex flex-col items-center mb-4 lg:flex-row">
							<h4 className="w-full font-semibold text-white lg:w-1/4">
								Topics Coverage
							</h4>
							<p className="w-full text-gray mt-4 lg:mt-0 lg:w-3/4">
								Whitepapers cover quantum computing (20%), AI ethics (15%),
								space mining prospects (20%), AI in healthcare (15%), and
								renewable energy strategies (30%).
							</p>
						</div>
						<Image
							src="/images/hand.png"
							width={900}
							height={500}
							alt="vr image"
						/>
						<div className="flex flex-col items-center w-full mt-8 lg:flex-row">
							<div className="bg-secondary border border-stroke rounded-md p-4 w-full text-white font-inter lg-w-1/4">
								<p className="text-sm text-gray">Total Whitepapers</p>
								<h4 className="font-semibold">Over 50 whitepapers</h4>
							</div>
							<div className="flex justify-between items-center bg-secondary border border-stroke rounded-md p-4 w-full mt-4 text-white font-inter lg:mt-0 lg:ml-4 lg:w-3/4">
								<div>
									<p className="text-sm text-gray">Download Formats</p>
									<h4 className="font-semibold">PDF format for access.</h4>
								</div>
								<button className="bg-black flex items-center justify-center border border-stroke py-2 px-4 rounded-md text-white font-inter duration-500 hover:bg-secondary">
									Preview
									<MdRemoveRedEye className="ml-2 text-primary" />
								</button>
							</div>
						</div>
						<div className="bg-secondary border border-stroke rounded-md p-4 w-full mt-4 text-white font-inter">
							<p className="text-sm text-gray">Average Author Expertise</p>
							<h4 className="font-semibold">
								Whitepapers are authored by subject matter experts with an
								average of 20 years of experience.
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default TopicsSection;
