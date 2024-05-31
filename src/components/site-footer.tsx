import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { Icons } from './icons'
export default function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto w-full p-4 py-6 lg:py-8">
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © {2024}{' '}
            <Link href={siteConfig.links.twitter} className="hover:underline">
              Tesser Labs™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex items-center space-x-5 sm:mt-0 sm:justify-center">
            {/*<a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord community</span>
            </a>*/}
            <Link
              href={siteConfig.links.github}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Icons.gitHub className="h-6 w-6 fill-current" />
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Icons.twitter className="h-5 w-5 fill-current" />
              <span className="sr-only">Twitter page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
