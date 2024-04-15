import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
import clsx from "clsx";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  SearchIcon,
  InstagramIcon,
  MailIcon,
  BugIcon,
  BalloonHeartIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex flex-row justify-center py-3">
              <div className=" gap-1 text-current basis-4/12">
                <span className="underline decoration-solid text-default-600 font-bold">Contact Me</span>
                <br />
                <div className="flex flex-row items-center gap-2">
                  <MailIcon className="text-2xl text-default-500" />
                  <p className="text-default-600">
                    kevin.volmhagen@outlook.com
                  </p>
                </div>
              </div>

              <div className="items-center gap-1 text-current basis-4/12">
                <h2 className="underline decoration-solid text-default-600 font-bold">Socials</h2>
                <div className="flex flex-row gap-2">
                  <Link
                    isExternal
                    href={siteConfig.links.instagram}
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="text-default-500" />
                  </Link>
                  <Link
                    isExternal
                    href={siteConfig.links.twitter}
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="text-default-500" />
                  </Link>
                  <Link
                    isExternal
                    href={siteConfig.links.discord}
                    aria-label="Discord"
                  >
                    <DiscordIcon className="text-default-500" />
                  </Link>
                  <Link
                    isExternal
                    href={siteConfig.links.github}
                    aria-label="Github"
                  >
                    <GithubIcon className="text-default-500" />
                  </Link>
                </div>
              </div>

              <div className="items-center gap-1 text-current ">
                <span className="underline decoration-solid text-default-600 font-bold">Links</span>
                <br />
                <div className="flex flex-row items-center gap-2 py-1">
                  <BugIcon className="text-2xl text-default-500" />
                  <p className="text-default-600">
                    Report a bug!
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2 py-1">
                  <BalloonHeartIcon className="text-2xl text-default-500" />
                  <p className="text-default-600">
                    Improve the site!
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
