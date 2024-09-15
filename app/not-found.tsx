import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-black dark:text-white">404</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-8 text-gray-700 dark:text-gray-300">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" passHref>
          <Button variant="outline" className="text-black dark:text-white border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900">
            Go back home
          </Button>
        </Link>
      </div>
    </div>
  )
}
