"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BiMenuAltRight } from "react-icons/bi";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavbar = () => {
	const path = usePathname();
	return (
		<>
			<Sheet>
				<SheetTrigger className="flex md:hidden">
					<BiMenuAltRight className="text-white text-3xl hover:cursor-pointer" />
				</SheetTrigger>
				<SheetContent className="backdrop-blur border-stroke text-white">
					<SheetHeader>
						<SheetTitle className="flex justify-center">
							{" "}
							<Link href="/" className="flex items-center">
								<Image
									src="/images/Group.png"
									width={20}
									height={20}
									alt="logo"
								/>
								<h4 className="font-kum text-white ml-2">HackNest</h4>
							</Link>
						</SheetTitle>
						<SheetDescription>
							<div className="flex flex-col items-center justify-center mt-16">
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
								<Link
									href="/contact"
									className="px-4 py-2 mt-8 bg-primary text-black text-sm font-inter font-medium rounded-md"
								>
									Contact Us
								</Link>
							</div>
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</>
	);
};

export default MobileNavbar;
