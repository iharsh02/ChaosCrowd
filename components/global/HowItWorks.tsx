import { Lightbulb, Users, Heart } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: Lightbulb, title: "Start a Project", description: "Share your creative idea or cause with the world." },
    { icon: Users, title: "Get Funded", description: "Receive support from backers who believe in your vision." },
    { icon: Heart, title: "Make It Happen", description: "Bring your project to life and reward your backers." },
  ]

  return (
    <section className="bg-gray-50 dark:bg-neutral-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-neutral-600 dark:text-white font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Bring your ideas to life
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Follow these simple steps to start your crowdfunding journey.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                <div className="flex items-center absolute h-12 w-12 -z-0 justify-center rounded-md bg-black dark:bg-white text-white dark:text-black">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{step.title}</p>
                  <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-300">{step.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
