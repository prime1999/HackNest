import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
// utils
import { Blogs, Home, News, Podcasts, Resources } from "@/lib/FooterLinks";

const MobileFooter = () => {
	return (
		<>
			<div className="flex py-4  md:hidden">
				<div>
					<h4 className="text-white font-semibold mb-4">Home</h4>
					<ul>
						{Home().map((text: string) => (
							<li className="text-gray capitalize text-sm mb-2 duration-500 hover:text-white">
								<Link href={`/${text}`}>{text}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="ml-16">
					<h4 className="text-white font-semibold mb-4">News</h4>
					<ul>
						{News().map((text: string) => (
							<li className="text-gray capitalize text-sm mb-2 duration-500 hover:text-white">
								<Link href={`/${text}`}>{text}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="flex py-4  md:hidden">
				<div>
					<h4 className="text-white font-semibold mb-4">Blogs</h4>
					<ul>
						{Blogs().map((text: string) => (
							<li className="text-gray capitalize text-sm mb-2 duration-500 hover:text-white">
								<Link href={`/${text}`}>{text}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="ml-8">
					<h4 className="text-white font-semibold mb-4">Podcasts</h4>
					<ul>
						{Podcasts().map((text: string) => (
							<li className="text-gray capitalize text-sm mb-2 duration-500 hover:text-white">
								<Link href={`/${text}`}>{text}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div>
				<h4 className="text-white font-semibold mb-4">Resources</h4>
				<ul className="flex flex-wrap">
					{Resources().map((text: string) => (
						<li className="flex justify-center mb-4 mx-2 bg-black items-center border border-stroke p-2 rounded-md text-white font-inter duration-500 hover:bg-secondary hover:cursor-pointer">
							<Link href={`/${text}`}>{text}</Link>
							<MdArrowOutward className="ml-2 text-primary" />
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-col justify-center items-center border-t border-stroke mt-4 py-8 md:hidden">
				<div className="flex justify-between text-white">
					<Link href="/">
						<FaXTwitter />
					</Link>
					<Link href="/" className="ml-4">
						<FaLinkedin />
					</Link>
				</div>
				<Link
					href="/terms"
					className="text-sm text-gray my-4 duration-500 hover:text-white"
				>
					Terms & Conditions | Privacy Policy
				</Link>
				<p className="text-sm text-gray">
					&copy; 2024 HackNest, All rights reserved.
				</p>
			</div>
		</>
	);
};

export default MobileFooter;
