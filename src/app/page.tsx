import Hero from "./components/Hero";
import BlogInfoSection from "./components/sections/BlogInfoSection";
import ExploreBlogsSection from "./components/sections/ExploreBlogsSection";
import TopSection from "./components/sections/TopSection";

const Home = async () => {
	return (
		<div>
			<div className="pb-4">
				<Hero />
				<TopSection />
				<BlogInfoSection />
				<ExploreBlogsSection />
			</div>
		</div>
	);
};

export default Home;
