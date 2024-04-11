import React from "react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DiscordIcon, GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import {Divider} from "@nextui-org/divider";

export default function Home() {
	return (
		<section className="flex flex-col-2 items-left justify-between gap-5 py-5 md:py-3">
			<div className="max-w-lg text-left justify-left">
				<h1 className={title({ color: "violet" })}>Welcome to&nbsp;</h1>
				<br />
				<h1 className={title()}>
					my personal webiste! Hope you enjoy it.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Projects, personal intrests and much more.
				</h2>

				<div className="flex py-2 gap-3">
					<Link
						isExternal
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
					<Link
						isExternal
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.twitter}
					>
						<GithubIcon size={20} />
						Twitter
					</Link>
				</div>
			</div>
			<div>
				<Image
					isBlurred
					width={300}
					alt="NextUI hero Image"
					src="https://i.imgur.com/nwxHWhW.jpeg"
				/>
			</div>


		</section>
	);


}

