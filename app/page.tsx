import FeaturedPosts from '@/components/featurePost/FeaturedPosts';
import Profile from '@/components/profile/profile';

export default function Home() {
  return (
    <div className="">
      <div className="bg-neutral-700">
        <Profile />
      </div>
      <div className="bg-neutral-400 ">
        <FeaturedPosts />
      </div>
    </div>
  );
}
