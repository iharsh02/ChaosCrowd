import { Bar } from "@/components/Discover/Bar";
import { Card } from "@/components/Discover/card";
import UserFetch from "@/components/Discover/CardShow";
import { Profile } from "@/components/Discover/Profile";

export default function DiscoverPage() {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-[120vh] w-full bg-white dark:bg-neutral-900 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <section className=" lg:w-1/2 m-auto">
        <Profile />
        <div>
          <Bar />
        </div>
      </section>
      <section className="lg:w-1/2 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
        <Card />
        <Card /> <Card />
        <UserFetch/>
      </section>
    </div>
  );
}
