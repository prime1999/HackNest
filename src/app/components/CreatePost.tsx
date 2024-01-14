"use client";
import { useEffect } from "react";

const CreatePost = () => {
	useEffect(() => {
		const cretaePosts = async () => {
			const res: any = await fetch("http://localhost:3000/api/SyncData", {
				method: "POST",
			});
			const data = await res.json();
			console.log(data);
		};
		cretaePosts();
	});

	return <div>CreatePost</div>;
};

export default CreatePost;
