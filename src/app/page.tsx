import Hero from "./components/Hero";
import BlogInfoSection from "./components/sections/BlogInfoSection";
import BlogsSection from "./components/sections/BlogsSection";
import ExploreBlogsSection from "./components/sections/ExploreBlogsSection";
import KnowledgeHeadSection from "./components/sections/KnowledgeHeadSection";
import LastSection from "./components/sections/LastSection";
import ReaderHeadSection from "./components/sections/ReaderHeadSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import TopSection from "./components/sections/TopSection";
import TopicsSection from "./components/sections/TopicsSection";

const Home = async () => {
	return (
		<div>
			<div className="pb-4">
				<Hero />
				<TopSection />
				<BlogInfoSection />
				<ExploreBlogsSection />
				<BlogsSection />
				<KnowledgeHeadSection />
				<TopicsSection />
				<ReaderHeadSection />
				<TestimonialSection />
				<LastSection />
			</div>
		</div>
	);
};

export default Home;
