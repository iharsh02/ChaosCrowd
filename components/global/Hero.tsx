import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6">
          Where Ideas Take Shape
          <br className="hidden sm:inline" />
          <span className="text-gray-700 dark:text-gray-300">and Chaos Sparks Innovation</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Join our community of creators and backers.Connect with creators and supporters to fund and launch innovative projects on Solana. Make an impact
        </p>
        <Button
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-black dark:text-black dark:bg-white rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          Get Started
        </Button>
      </div>
    </section>
  )
}
