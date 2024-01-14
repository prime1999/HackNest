import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<div className="w-full bg-secondary mt-4 border border-stroke">
				<div className="container mx-auto p-4 flex items-center justify-between">
					<Link href="/" className="flex items-center">
						<Image src="/images/Group.png" width={20} height={20} alt="logo" />
						<h4 className="font-kum text-white ml-2">HackNest</h4>
					</Link>
					<div>
						<ul className="flex items-center">
							<li>
								<Link href="/" className="bg-black">
									Home
								</Link>
							</li>
							<li>
								<Link href="/blog">Blog</Link>
							</li>
							<li>
								<Link href="/podcast">Podcasts</Link>
							</li>
							<li>
								<Link href="/resource">Resources</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
