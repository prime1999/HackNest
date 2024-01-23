import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const LastSection = () => {
	return (
		<div className="bg-secondary border-y border-stroke p-4 lg:px-12 lg:py-16">
			<div>
				<div className="hidden items-center lg:flex">
					<Image src="/images/Group.png" width={80} height={80} alt="logo" />
					<div className="ml-8">
						<p className="bg-gray text-white w-48 text-center rounded-sm text-sm px-1">
							Learn, Connect, and Innovate
						</p>
						<h4 className="text-3xl text-white font-semibold my-4">
							Be Part of the HackNest Revolution
						</h4>
						<p className="text-gray">
							Immerse yourself in the world of future technology. Explore our
							comprehensive resources, connect with fellow tech enthusiasts, and
							drive innovation in the industry. Join a dynamic community of
							forward-thinkers.
						</p>
					</div>
				</div>
				{/* for mobile view */}
				<div className="flex flex-col lg:hidden">
					<div className="flex items-center">
						<Image src="/images/Group.png" width={80} height={80} alt="logo" />
						<p className="bg-gray text-white w-48 text-center rounded-sm text-sm py-1 px-1 ml-4">
							Learn, Connect, and Innovate
						</p>
					</div>
					<div className="">
						<h4 className="text-3xl text-white font-semibold my-2">
							Be Part of the HackNest Revolution
						</h4>
						<p className="text-gray">
							Immerse yourself in the world of future technology. Explore our
							comprehensive resources.
						</p>
					</div>
				</div>
				<div className="flex flex-col mx-auto bg-black rounded-md p-2 mt-8 md:flex-row">
					<div className="bg-secondary rounded-md w-full py-4 px-4 md:w-1/3">
						<div className="flex items-center justify-between">
							<div>
								<h6 className="text-white">Resource Access</h6>
							</div>
							<MdArrowOutward className="flex items-center justify-center text-center text-secondary p-2 rounded-full bg-primary w-8 h-8" />
						</div>
						<p className="text-gray text-sm mt-4">
							Visitors can access a wide range of resources, including ebooks,
							whitepapers, reports.
						</p>
					</div>
					<div className="bg-secondary rounded-md w-full py-4 px-4 my-2 md:mx-2 md:my-0 md:w-1/3">
						<div className="flex items-center justify-between">
							<div>
								<h6 className="text-white">Community Forum</h6>
							</div>
							<MdArrowOutward className="flex items-center justify-center text-center text-secondary p-2 rounded-full bg-primary w-8 h-8" />
						</div>
						<p className="text-gray text-sm mt-4">
							Join our active community forum to discuss industry trends and
							collaborate with peers.
						</p>
					</div>
					<div className="bg-secondary rounded-md w-full py-4 px-4 md:w-1/3">
						<div className="flex items-center justify-between">
							<div>
								<h6 className="text-white">Tech Events</h6>
							</div>
							<MdArrowOutward className="flex items-center justify-center text-center text-secondary p-2 rounded-full bg-primary w-8 h-8" />
						</div>
						<p className="text-gray text-sm mt-4">
							Stay updated on upcoming tech events, webinars and conferences to
							enhance your knowledge
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LastSection;
