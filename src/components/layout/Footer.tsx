import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Ilham<span className="text-blue-600 dark:text-blue-400">.</span>dev
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
              Fullstack Developer & Web System Integrator
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:mas.ilhamramdani@gmail.com"
              className="p-2 rounded-md text-gray-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Email"
            >
              <FiMail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/m-ilham-ramdani-396025218/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-gray-500 hover:text-blue-600 dark:text-gray-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="https://github.com/ilhamramdanii"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-600">
            © {year} Ilham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
