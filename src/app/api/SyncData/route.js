import { databaseAdmin } from "@/config/appwrite-server.js";
import sdk from "node-appwrite";
import data from "@/data.json";

export const POST = async (req) => {
	try {
		const post = await databaseAdmin.listDocuments(
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
			process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_POST_ID
		);

		if (post.total !== 0) {
			console.log(post);
			return Response.json({ response: post });
		} else {
			for (const post of data) {
				console.log(post);
				const document = await databaseAdmin.createDocument(
					process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
					process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_POST_ID,
					sdk.ID.unique(),
					{
						title: post.title,
						author: post.author,
						content: post.content,
						tags: post.tags,
						image: post.image,
						comments: post.comment,
					}
				);

				console.log(`post created with ID ${document.$id}`);
			}
		}

		return Response.json({ response: post });
	} catch (error) {
		console.error("Error fetching posts:", error);

		return Response.json({ error: "Internal Server Error" });
	}
};
