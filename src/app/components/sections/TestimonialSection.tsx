import Image from "next/image";
import { FaStar } from "react-icons/fa";

const TestimonialSection = () => {
	return (
		<>
			<div className="border-b border-stroke">
				<div className="w-11/12 mx-auto flex flex-col lg:flex-row">
					<div className="w-full px-8 py-8 lg:w-1/3">
						<div className="flex flex-col items-center">
							<div className="flex items-center">
								<Image
									src="/images/sarah.png"
									width={50}
									height={50}
									alt="Sarah"
								/>
								<div className="ml-4">
									<h4 className="text-white font-semibold">Sarah Thompson</h4>
									<p className="text-gray">San Francisco, USA</p>
								</div>
							</div>
							<div className="flex flex-col items-center mt-8 bg-secondary relative border border-stroke rounded-md p-4">
								<div className="flex bg-black border border-stroke rounded-2xl px-2 py-1 relative -top-7">
									<FaStar className="text-primary" />
									<FaStar className="text-primary mx-1" />
									<FaStar className="text-primary" />
									<FaStar className="text-primary mx-1" />
									<FaStar className="text-primary" />
								</div>
								<p className="text-center text-white text-sm">
									The ebooks on AI in education have been a game-changer for my
									research. They provide in-depth insights and case studies that
									are invaluable for staying updated.
								</p>
							</div>
						</div>
					</div>
					<div className="w-full px-8 py-8 border-y border-stroke lg:border-y-0 lg:border-x lg:w-1/3">
						<div className="flex flex-col items-center">
							<div className="flex items-center">
								<Image
									src="/images/raj.png"
									width={50}
									height={50}
									alt="Sarah"
								/>
								<div className="ml-4">
									<h4 className="text-white font-semibold">Raj Patel</h4>
									<p className="text-gray">Mumbai, India</p>
								</div>
							</div>
							<div className="flex flex-col items-center mt-8 bg-secondary relative border border-stroke rounded-md p-4">
								<div className="flex bg-black border border-stroke rounded-2xl px-2 py-1 relative -top-7">
									<FaStar className="text-primary" />
									<FaStar className="text-primary mx-1" />
									<FaStar className="text-primary" />
									<FaStar className="text-primary mx-1" />
									<FaStar className="text-primary" />
								</div>
								<p className="text-center text-white text-sm">
									The whitepapers on renewable energy strategies have greatly
									influenced my work. They offer detailed data and analysis.
								</p>
							</div>
						</div>
					</div>
					<div className="w-full px-8 py-8 lg:w-1/3">
						<div className="flex flex-col items-center">
							<div className="flex items-center">
								<Image
									src="/images/emily.png"
									width={50}
									height={50}
									alt="Sarah"
								/>
								<div className="ml-4">
									<h4 className="text-white font-semibold">Emily Adams</h4>
									<p className="text-gray">London, UK</p>
								</div>
							</div>
							<div className="flex flex-col items-center mt-8 bg-secondary relative border border-stroke rounded-md p-4">
								<div className="flex bg-black border border-stroke rounded-2xl px-2 py-1 relative -top-7">
									<FaStar className="text-primary" />
									<FaStar className="text-primary mx-1" />
									<FaStar className="text-primary" />
									<FaStar className="text-primary mx-1" />
									<FaStar className="text-primary" />
								</div>
								<p className="text-center text-white text-sm">
									The AI in healthcare reports have been an essential resource
									for our hospital. They highlight the latest innovations and
									best practices, improving patient care.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden w-11/12 mx-auto lg:flex">
				<div className="w-1/3 px-8 py-8">
					<div className="flex flex-col items-center">
						<div className="flex items-center">
							<Image
								src="/images/alan.png"
								width={50}
								height={50}
								alt="Sarah"
							/>
							<div className="ml-4">
								<h4 className="text-white font-semibold">Alan Jackson</h4>
								<p className="text-gray">Houston, USA</p>
							</div>
						</div>
						<div className="flex flex-col items-center mt-8 bg-secondary relative border border-stroke rounded-md p-4">
							<div className="flex bg-black border border-stroke rounded-2xl px-2 py-1 relative -top-7">
								<FaStar className="text-primary" />
								<FaStar className="text-primary mx-1" />
								<FaStar className="text-primary" />
								<FaStar className="text-primary mx-1" />
								<FaStar className="text-primary" />
							</div>
							<p className="text-center text-white text-sm">
								The reports on space mining prospects have fueled my passion for
								space exploration. They provide a comprehensive view.
							</p>
						</div>
					</div>
				</div>
				<div className="w-1/3 px-8 py-8 border-x border-stroke">
					<div className="flex flex-col items-center">
						<div className="flex items-center">
							<Image
								src="/images/jessica.png"
								width={50}
								height={50}
								alt="Sarah"
							/>
							<div className="ml-4">
								<h4 className="text-white font-semibold">Jessica Miller</h4>
								<p className="text-gray">Boston, USA</p>
							</div>
						</div>
						<div className="flex flex-col items-center mt-8 bg-secondary relative border border-stroke rounded-md p-4">
							<div className="flex bg-black border border-stroke rounded-2xl px-2 py-1 relative -top-7">
								<FaStar className="text-primary" />
								<FaStar className="text-primary mx-1" />
								<FaStar className="text-primary" />
								<FaStar className="text-primary mx-1" />
								<FaStar className="text-primary" />
							</div>
							<p className="text-center text-white text-sm">
								The research papers on genomic breakthroughs have been a
								goldmine of information. They've shaped the direction of my
								research in genomics.
							</p>
						</div>
					</div>
				</div>
				<div className="w-1/3 px-8 py-8">
					<div className="flex flex-col items-center">
						<div className="flex items-center">
							<Image
								src="/images/diego.png"
								width={50}
								height={50}
								alt="Sarah"
							/>
							<div className="ml-4">
								<h4 className="text-white font-semibold">Diego Lopez</h4>
								<p className="text-gray">Barcelona, Spain</p>
							</div>
						</div>
						<div className="flex flex-col items-center mt-8 bg-secondary relative border border-stroke rounded-md p-4">
							<div className="flex bg-black border border-stroke rounded-2xl px-2 py-1 relative -top-7">
								<FaStar className="text-primary" />
								<FaStar className="text-primary mx-1" />
								<FaStar className="text-primary" />
								<FaStar className="text-primary mx-1" />
								<FaStar className="text-primary" />
							</div>
							<p className="text-center text-white text-sm">
								The ebooks on renewable energy strategies have given me the
								insights I needed to pivot our startup toward sustainability.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialSection;
