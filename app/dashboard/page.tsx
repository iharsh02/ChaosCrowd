import Form from "@/components/dashboard/Form";

export default function Dashboard() {
  return (<main>
    <div className="absolute inset-0 -z-10 h-[120vh] w-full bg-white dark:bg-neutral-900 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:6rem_4rem]">
    </div>
    <div className="mt-[8rem]">
      <Form />
    </div>
  </main>)
}
