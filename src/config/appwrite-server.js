import sdk from "node-appwrite";

// Create a client with API key for admin
const createClientAdmin = () => {
	return new sdk.Client()
		.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL)
		.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
		.setKey(process.env.APPWRITE_API_KEY); // Use your admin API key here
};

// Create a client with session-based authentication
const createClient = () => {
	return new sdk.Client()
		.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL)
		.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);
};

const createDatabase = (client) => {
	return new sdk.Databases(client);
};

// Create the admin client and database
const clientAdmin = createClientAdmin();
const databaseAdmin = createDatabase(clientAdmin);

// Create the regular client and database
const client = createClient();
const database = createDatabase(client);

export { client, database, clientAdmin, databaseAdmin };
