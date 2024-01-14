"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

//componenets
import MobileNavbar from "@/components/ResponsiveLayouts/MobileNavbar";

const Navbar = () => {
	const [scrollNav, setScrollNav] = useState<boolean>(false);
	const path = usePathname();

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	return (
		<>
			<nav className="w-full bg-secondary mt-4 border border-stroke py-4 px-16 flex items-center justify-between">
				<Link href="/" className="flex items-center">
					<Image src="/images/Group.png" width={20} height={20} alt="logo" />
					<h4 className="font-kum text-white ml-2">HackNest</h4>
				</Link>
				<div className="hidden md:flex">
					<ul className="flex items-center font-inter font-medium">
						<li>
							<Link
								href="/"
								className={`text-sm mr-4 ${
									path === "/"
										? "bg-black text-white py-2 px-4 rounded-md border border-stroke"
										: "text-gray"
								} duration-300 hover:text-white`}
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/blog"
								className={`text-sm mr-4 ${
									path === "/blog"
										? "bg-black text-white py-2 px-4 rounded-md border border-stroke"
										: "text-gray"
								} duration-300 hover:text-white`}
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								href="/podcast"
								className={`text-sm mr-4 ${
									path === "/podcast"
										? "bg-black text-white py-2 px-4 rounded-md border border-stroke"
										: "text-gray"
								} duration-300 hover:text-white`}
							>
								Podcasts
							</Link>
						</li>
						<li>
							<Link
								href="/resource"
								className={`text-sm mr-4 ${
									path === "/resource"
										? "bg-black text-white py-2 px-4 rounded-md border border-stroke"
										: "text-gray"
								} duration-300 hover:text-white`}
							>
								Resources
							</Link>
						</li>
					</ul>
				</div>
				<div className="hidden md:flex">
					<Link
						href="/contact"
						className="px-4 py-2 bg-primary text-black text-sm font-inter font-medium rounded-md"
					>
						Contact Us
					</Link>
				</div>
				<MobileNavbar />
			</nav>
		</>
	);
};

export default Navbar;
