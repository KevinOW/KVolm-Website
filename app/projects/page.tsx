import React from "react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import { Button } from "@nextui-org/button"

export default function ProjectsPage() {
	return (
		<section>
			<h1 className={title()}>Projects</h1>
 <div className="max-w-[1200px] gap-10 grid grid-cols-2 grid-rows-2 px-8 py-10">

 <Card isFooterBlurred className="w-full">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist </h4>
      </CardHeader>
      <Image

	  	isZoomed
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://i.imgur.com/nwxHWhW.jpeg"
      />
    </Card>

    <Card isFooterBlurred className="w-full">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist </h4>
      </CardHeader>
      <Image
	  	isZoomed
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://i.imgur.com/nwxHWhW.jpeg"
      />
    </Card>

    <Card isFooterBlurred className="w-full">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist </h4>
      </CardHeader>
      <Image
	  	isZoomed
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://i.imgur.com/nwxHWhW.jpeg"
      />
    </Card>

    <Card isFooterBlurred className="w-full">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist </h4>
      </CardHeader>
      <Image
	  	isZoomed
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://i.imgur.com/nwxHWhW.jpeg"
      />
    </Card>

    <Card isFooterBlurred className="w-full">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist </h4>
      </CardHeader>
      <Image
	  	isZoomed
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://i.imgur.com/nwxHWhW.jpeg"
      />
    </Card>

    <Card isFooterBlurred className="w-full">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist </h4>
      </CardHeader>
      <Image
	  	isZoomed
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://i.imgur.com/nwxHWhW.jpeg"
      />
    </Card>
  </div>
		</section>

	);
}


