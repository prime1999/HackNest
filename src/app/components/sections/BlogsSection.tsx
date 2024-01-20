"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { FaRegComment } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
// components
import BtnSlider from "../miscelleneous/BtnSlider";
import Loader from "../miscelleneous/Loader";

interface Author {
	$id: string;
	name: string;
	username: string;
	pic: string;
	posts: [];
	comments: [];
}

interface Response {
	$id: string;
	title: string;
	content: string;
	tags: string[];
	image: string;
	author: Author;
	comments: any;
	$createdAt: string;
}

interface Post {
	response: Response[];
}

const BlogsSection: React.FC = () => {
	const [posts, setPosts] = useState<Post>();
	const [keyword, setKeyword] = useState<string>("all");

	useEffect(() => {
		console.log(keyword);
		fetchPosts(keyword);
	}, [keyword]);

	// function to fecth post
	const fetchPosts = async (keyword: string) => {
		const res = await fetch(`http://localhost:3000/api/posts?tag=${keyword}`, {
			method: "GET",
		});

		const data = await res.json();
		setPosts(data);
	};

	return (
		<div>
			<div className="border-b border-stroke py-8 px-4">
				<BtnSlider setKeyword={setKeyword} />
			</div>
			{!posts && <Loader />}

			<div className="font-inter">
				{posts &&
					posts.response.map((post) => (
						<div
							key={post.$id}
							className="flex flex-col items-start justify-between mb-4 p-4 border-b border-stroke lg:flex-rows lg:py-8 lg:px-16"
						>
							<div className="w-full flex items-center">
								<Image
									src={post.author.pic}
									width={70}
									height={70}
									alt={post.author.username}
									className="rounded-full border-2 border-stroke"
								/>
								<div className="flex justify-between ml-4 w-3/4">
									<div>
										<h4 className="font-semibold text-white">
											{post.author.name}
										</h4>
										<p className="text-gray">{post.tags[0]}</p>
									</div>
									<button className="flex items-center text-gray text-sm px-4 py-2 border border-stroke rounded-lg duration-500 hover:bg-secondary lg:hidden">
										View Blog <MdArrowOutward className="text-primary ml-2" />
									</button>
								</div>
							</div>
							<div className="flex flex-col items-center justify-between w-full lg:w-3/4 lg:flex-row">
								<div className="flex flex-col justify-start w-full mt-8 lg:mt-0 lg:w-3/4">
									<h6 className="text-gray font-bold">
										{format(post.$createdAt, "MMMM dd, yyy")}
									</h6>
									<div>
										<div className="my-4">
											<h1 className="text-lg text-white font-semibold">
												{post.title}
											</h1>
											<p className="w-full mt-2 text-nowrap overflow-hidden text-ellipsis text-gray text-sm">
												{post.content}
											</p>
										</div>
										<Badge className="border border-stroke py-1 bg-transparent hover:bg-transparent">
											<FaRegComment className="text-gray" />
											<p className="ml-2 text-gray">{post.comments.length}</p>
										</Badge>
									</div>
								</div>
								<button className="hidden items-center text-gray text-sm px-4 py-2 border border-stroke rounded-lg duration-500 hover:bg-secondary lg:flex">
									View Blog <MdArrowOutward className="text-primary ml-2" />
								</button>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default BlogsSection;
