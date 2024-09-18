import { Hero } from "@/components/global/Hero";
import HowItWorks from "@/components/global/HowItWorks";
import Testimonials from "@/components/global/Testimonial";
export default function Home() {
  return (
    <main>
      <div className="fixed inset-0 -z-10 w-full min-h-screen bg-repeat bg-white dark:bg-neutral-900 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="mt-[8rem]">{""}</div>
      <Hero />
      <HowItWorks />
      <Testimonials />
    </main>
  );
}
