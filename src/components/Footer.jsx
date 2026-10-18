import { useTheme } from "../store/useThemeStore";
import Logo from "../assets/logo.png";
import LogoThemeDark from "../assets/logo_oscuro.png";
import Image from "./Image";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const themeClasses = {
    container: isDark ? "bg-transparent text-white" : "bg-white text-gray-900",
    textMuted: isDark ? "text-[#a0aab2]" : "text-gray-500",
    socialIcon: isDark
      ? "bg-white text-[#16181d] hover:bg-gray-200"
      : "bg-gray-900 text-white hover:bg-gray-700",
    waveBack: isDark ? "text-zinc-900" : "text-blue-50",
    waveFront: isDark ? "text-zinc-800/50" : "text-blue-100",
  };

  const quickLinks = ["Home", "About Us", "Services", "Product"];
  const blogs = [
    { title: "Anything You Want To Know Is Here", date: "April 14, 2024" },
    { title: "Anything You Want To Know Is Here", date: "April 14, 2024" },
  ];

  return (
    <footer
      className={`relative w-full overflow-hidden font-sans transition-colors duration-300 ${themeClasses.container}`}
    >
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-16 pt-24 md:grid-cols-2 md:pt-32 lg:grid-cols-4 lg:gap-8">
        <div className="flex flex-col">
          <div className="mb-4">
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center">
                <Image src={theme === "light" ? Logo : LogoThemeDark} alt="Logo" className="h-10 w-11" />

              </div>
              <p
                className={`font-extrabold text-3xl ${theme === "dark" ? "text-gray-300" : "text-gray-900"}`}
              >
                Filadelfia Blog
              </p>

            </div>
          </div>
          <p
            className={`mb-6 text-sm leading-relaxed ${themeClasses.textMuted}`}
          >
            The proper Footer on proper time can preserve you protection. We
            assist you make sureverybody forward.
          </p>
          <div className="flex space-x-3">
            {/* social buttons */}
            <a
              href="#"
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:-translate-y-1 ${themeClasses.socialIcon}`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
              </svg>
            </a>
            <a
              href="#"
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:-translate-y-1 ${themeClasses.socialIcon}`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.06c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
            <a
              href="#"
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:-translate-y-1 ${themeClasses.socialIcon}`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.555.556.9 1.112 1.153 1.772.247.637.415 1.363.465 2.428C21.99 8.944 22 9.283 22 12c0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.556.555-1.112.9-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.89 4.89 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </a>
            <a
              href="#"
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:-translate-y-1 ${themeClasses.socialIcon}`}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="relative mb-6 inline-block text-base font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[linear-gradient(to_right,#3b82f6_50%,transparent_50%)] after:bg-size[8px_2px]">
            Quick Link
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`group flex items-center text-sm transition-colors hover:text-blue-500 ${themeClasses.textMuted}`}
                >
                  <svg
                    className="mr-2 h-3.5 w-3.5 text-blue-500 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="relative mb-6 inline-block text-base font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5] after:w-full after:bg-[linear-gradient(to_right,#3b82f6_50%,transparent_50%)] after:bg-size[8px_2px]">
            Blog
          </h4>
          <div className="space-y-4">
            {blogs.map((blog, index) => (
              <div key={index} className="flex flex-col">
                <a
                  href="#"
                  className={`group flex items-start text-sm leading-snug transition-colors hover:text-blue-500 ${themeClasses.textMuted}`}
                >
                  <svg
                    className="mr-2 mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-500 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                  {blog.title}
                </a>
                <span className={`ml-5 mt-1 text-xs ${themeClasses.textMuted}`}>
                  {blog.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="relative mb-6 inline-block text-base font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[linear-gradient(to_right,#3b82f6_50%,transparent_50%)] after:bg-size[8px_2px]">
            Contact
          </h4>
          <ul className="space-y-4">
            <li
              className={`flex items-start text-sm leading-snug ${themeClasses.textMuted}`}
            >
              <svg
                className="mr-3 mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Palam Vihar, Gurgaon, India
            </li>
            <li
              className={`flex items-start text-sm leading-snug ${themeClasses.textMuted}`}
            >
              <svg
                className="mr-3 mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Singhshristi449@Gmail.Com
            </li>
            <li
              className={`flex items-start text-sm leading-snug ${themeClasses.textMuted}`}
            >
              <svg
                className="mr-3 mt-0.5 h-4 w-4 shrink-0 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              91+765-564-985
            </li>
          </ul>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-15 w-full overflow-hidden md:h-22.5">
        <div className="animate-wave-slow absolute left-0 top-0 flex h-full w-[200%]">
          <div className="h-full w-1/2">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                className={themeClasses.waveBack}
                fill="currentColor"
                d="M0,40 C240,90 480,10 720,50 C960,90 1200,10 1440,40 L1440,120 L0,120 Z"
              />
            </svg>
          </div>

          <div className="h-full w-1/2">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                className={themeClasses.waveBack}
                fill="currentColor"
                d="M0,40 C240,90 480,10 720,50 C960,90 1200,10 1440,40 L1440,120 L0,120 Z"
              />
            </svg>
          </div>
        </div>

        <div className="animate-wave-fast absolute left-0 top-0 flex h-full w-[200%]">
          <div className="h-full w-1/2">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                className={themeClasses.waveFront}
                fill="currentColor"
                d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
              />
            </svg>
          </div>

          <div className="h-full w-1/2">
            <svg
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              <path
                className={themeClasses.waveFront}
                fill="currentColor"
                d="M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex w-full justify-center py-6">
        <p className={`text-xs ${themeClasses.textMuted}`}>
          © 2026 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
