import { databaseAdmin } from "@/config/appwrite-server.js";

// APi function to get blog post for the home page
export const GET = async (request) => {
	const { searchParams } = new URL(request.url);
	const tag = searchParams.get("tag");
	console.log(tag);
	try {
		let post = await databaseAdmin.listDocuments(
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
			process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_POST_ID
		);
		if (post && tag === "all") {
			post = post.documents.filter((post, index) => index <= 2 && post);
		}
		if (tag !== "all") {
			post = post.documents.filter((post) => post.tags.includes(tag));
		}

		if (post) {
			console.log(post);
			return Response.json({ response: post });
		}
	} catch (error) {
		console.log({ error });

		return Response.json({ error: "Internal Server Error" });
	}
};
