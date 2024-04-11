export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Kevin Volmhagen",
	description: "My personal website",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "About Me",
      href: "/docs",
    },
    {
      label: "Projects",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About Me",
			href: "/docs",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Blog",
			href: "/blog",
		},
	],
	links: {
		github: "https://github.com/KevinOW",
		twitter: "https://twitter.com/qevindesigns",
		discord: "https://discord.gg/9b6yyZKmH4"
	},
};
