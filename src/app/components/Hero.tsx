import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
	return (
		<>
			<div className="flex flex-col items-start border-b border-stroke lg:flex-row">
				<div className="w-full border-r border-b border-stroke lg:w-1/2 lg:border-b-0">
					<div className="p-4 lg:p-16">
						<p className="text-sm text-gray font-kum mb-4">
							Your journey to Tomorrow Begins Here
						</p>
						<div>
							<h1 className="text-4xl font-kum text-white">
								Explore the Frontiers of Artificial Intelligence
							</h1>
							<p className="text-sm text-gray mt-4">
								Welcome to the epicenter of AI innovation. FutureTech AI News is
								your passport to a world where machines think, learn, and
								reshape the future. Join us on this visionary expedition into
								the heart of AI.
							</p>
						</div>
					</div>
					<div className="w-full flex items-center justify-between border-t border-stroke font-inter">
						<div className="py-4 px-8 w-1/3">
							<span className="flex items-center">
								<h4 className="font-bold text-3xl text-white flex items-center">
									300
								</h4>
								<p className="text-xl font-bold text-primary">+</p>
							</span>
							<p className="text-sm text-gray">Resources available</p>
						</div>
						<div className="py-4 px-8 border-r border-l border-stroke w-1/3">
							<span className="flex items-center">
								<h4 className="font-bold text-3xl text-white flex items-center">
									12k
								</h4>
								<p className="text-xl font-bold text-primary">+</p>
							</span>
							<p className="text-sm text-gray">Total Downloads</p>
						</div>
						<div className="w-1/3 py-4 px-8">
							<span className="flex items-center">
								<h4 className="font-bold text-3xl text-white flex items-center">
									10K
								</h4>
								<p className="text-xl font-bold text-primary">+</p>
							</span>
							<p className="text-sm text-gray">Active Users</p>
						</div>
					</div>
				</div>
				<div className="w-full pb-4 lg:w-1/2">
					<div className="w-full">
						<Image
							src="/images/Abstract-Design.png"
							width={300}
							height={200}
							alt="Abstrct image"
							className="opacity-30"
						/>
						<div className="-mt-32 px-16">
							<div className="flex items-center justify-center rounded-3xl border p-1 w-32 border-stroke">
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
							<div className="w-full mt-4">
								<h5 className="text-lg text-white font-inter font-medium">
									Explore 1000+ resources
								</h5>
								<p className="text-sm text-gray">
									Over 1,000 articles on emerging tech trends and breakthroughs.
								</p>
								<button className="w-full flex items-center justify-center border border-stroke py-2 px-4 mt-4 rounded-md text-white font-inter duration-500 hover:bg-secondary lg:w-[35%]">
									Explore Resources
									<MdArrowOutward className="ml-2 text-primary" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
