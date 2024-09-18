import { Bar } from "@/components/Discover/Bar";
import UserFetch from "@/components/Discover/CardShow";
import { Profile } from "@/components/Discover/Profile";

export default function DiscoverPage() {
  return (
    <div className="">
      <div className="fixed inset-0 -z-10 w-full min-h-screen bg-repeat bg-white dark:bg-neutral-900 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <section className="lg:w-1/2 m-auto mt-[8rem]"></section>
      <section className=" lg:w-1/2 m-auto mt-[8rem]">
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
