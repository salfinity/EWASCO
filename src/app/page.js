import { allBlogs } from "/.contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import VideoBackPage from "../components/VideoBackPage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <VideoBackPage />
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
