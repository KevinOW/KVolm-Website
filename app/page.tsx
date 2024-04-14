import React from "react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DiscordIcon, GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <section className="flex flex-col-3 flex-wrap items-left justify-center place-items-center gap-x-20 py-5 md:py-3">
      <div className="max-w-lg text-left justify-center">
        <h1 className={title({ color: "violet" })}>Welcome to&nbsp;</h1>
        <br />
        <h1 className={title()}>my personal webiste! Hope you enjoy it.</h1>
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
          radius="full"
          isBlurred
          width={300}
          alt="Image of me"
          src="https://i.imgur.com/nwxHWhW.jpeg"
        />
      </div>

      <div className="flex flex-row flex-wrap">

      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 py-10 basis-3/4">
        <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[350px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Photography
            </p>
            <h4 className="text-white font-medium text-large">ÖDET</h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Picture of me during nollning 2023"
            className="z-0 w-full h-full object-cover"
            src="https://i.imgur.com/a8Aidr8.jpeg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Photos for</p>
                <p className="text-tiny text-white/60">Halmstad University</p>
                <p className="text-tiny text-white/60">Nollningen 2023</p>
              </div>
            </div>
          </CardFooter>
        </Card>
        <Link className="col-span-12 sm:col-span-4 h-[350px]" href="/projects/renewafil">
        <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[350px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Project
            </p>
            <h4 className="text-white font-medium text-large">Renewafil</h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://i.imgur.com/SZMw1x3.png"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Lorem ipsum dolor</p>
                <p className="text-tiny text-white/60">sit amet, consectetur</p>
                <p className="text-tiny text-white/60">adipiscing elit</p>
              </div>
            </div>
          </CardFooter>
        </Card>
        </Link>
        <Link className="col-span-12 sm:col-span-4 h-[350px]" href="/projects/abro">
        <Card isFooterBlurred className="col-span-12 sm:col-span-4 h-[350px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              3D-Printing
            </p>
            <h4 className="text-white font-medium text-large">
              Mini Åbro Bottle
            </h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://i.imgur.com/jvk4KEy.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">
                  I made a mini bottle of Åbro at
                </p>
                <p className="text-tiny text-white/60"></p>
                <p className="text-tiny text-white/60">
                  FABLAB, Halmstad Högskola
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>
        </Link>
        <Link className="w-full h-[300px] col-span-12 sm:col-span-5" href="/projects/coins">
        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              3D-Printing
            </p>
            <h4 className="text-white font-medium text-2xl">Pirate Coins</h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full object-cover"
            src="https://i.imgur.com/Lunr6Tm.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 dark:border-default-100 justify-between">
            <div>
              <p className="text-tiny text-white/60">
                Pirate Coins made in a resin printer.
              </p>
              <p className="text-tiny text-white/60">
                The coins was given out during the Nollning 2023
              </p>
            </div>
          </CardFooter>
        </Card>
        </Link>

        <Card
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
           <Link className="w-full h-[300px] col-span-12 sm:col-span-7" href="/projects/nollning">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              Photography
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              Nollningen 2023
            </h4>

          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Relaxing app background"
            className="x-2 z-0 w-full h-full object-cover"
            src="https://i.imgur.com/Pkg3ymu.jpg"
          />
          </Link>
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Photos for</p>
                <p className="text-tiny text-white/60">Nollningen 2023 at Halmstad University</p>
              </div>
            </div>
            <Link href="https://drive.google.com/drive/u/2/folders/1PX0Ptyzf1wcjaDGlH0yJii8ZCG8EDrbV">
            <Button color="primary" radius="full" size="sm">
              View Images
            </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="basis-1/4 py-10">
        <h1 className={title({ color: "violet" })}>Projects &&nbsp;</h1>
        <br />
        <h2 className={title()}>my interests</h2>
      </div>
      </div>
    </section>
  );
}
