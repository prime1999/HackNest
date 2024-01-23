import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
// utils
import { Blogs, Home, News, Podcasts, Resources } from "@/lib/FooterLinks";
import MobileFooter from "../ResponsiveLayouts/MobileFooter";

const Footer = () => {
	return (
		<footer className="px-8">
			<div className="hidden justify-between flex-wrap px-12 py-16 border-b border-stroke md:flex">
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
				<div>
					<h4 className="text-white font-semibold mb-4">News</h4>
					<ul>
						{News().map((text: string) => (
							<li className="text-gray capitalize text-sm mb-2 duration-500 hover:text-white">
								<Link href={`/${text}`}>{text}</Link>
							</li>
						))}
					</ul>
				</div>
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
				<div>
					<h4 className="text-white font-semibold mb-4">Podcasts</h4>
					<ul>
						{Podcasts().map((text: string) => (
							<li className="text-gray capitalize text-sm mb-2 duration-500 hover:text-white">
								<Link href={`/${text}`}>{text}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="text-white font-semibold mb-4">Resources</h4>
					<ul>
						{Resources().map((text: string) => (
							<li className="flex justify-center mt-4 bg-black items-center border border-stroke p-2 rounded-md text-white font-inter duration-500 hover:bg-secondary hover:cursor-pointer">
								<Link href={`/${text}`}>{text}</Link>
								<MdArrowOutward className="ml-2 text-primary" />
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="hidden justify-between py-4 md:flex">
				<Link
					href="/terms"
					className="text-sm text-gray duration-500 hover:text-white"
				>
					Terms & Conditions | Privacy Policy
				</Link>
				<div className="flex justify-between text-white">
					<Link href="/">
						<FaXTwitter />
					</Link>
					<Link href="/" className="ml-4">
						<FaLinkedin />
					</Link>
				</div>
				<p className="text-sm text-gray">
					&copy; 2024 HackNest, All rights reserved.
				</p>
			</div>

			<MobileFooter />
		</footer>
	);
};

export default Footer;
