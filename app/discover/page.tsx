import { Bar } from "@/components/Discover/Bar";
import UserFetch from "@/components/Discover/CardShow";
import { Profile } from "@/components/Discover/Profile";

export default function DiscoverPage() {
  return (
    <div>
      <section className=" lg:w-1/2 m-auto">
        <Profile />
        <div>
          <Bar />
        </div>
      </section>

      <section className="lg:w-1/2 m-auto mb-5">
        <UserFetch />
      </section>
    </div>
  );
}
