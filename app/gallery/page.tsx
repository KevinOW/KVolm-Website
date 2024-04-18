"use client"
import React from "react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/input";

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


export default function GalleryPage() {
	return (

		<section>

				<h1 className={title({ color: "violet" })}>Gallery</h1>

				<h2 className="py-3">This is my gallery of photos. This page will showcase my best pictures and my favorite ones.</h2>


				<div className="animated-thumbnails">
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="https://i.imgur.com/pjSGf1V.jpg">
                    <img alt="img1" src="https://i.imgur.com/pjSGf1V.jpg" />
                </a>
                <a href="https://i.imgur.com/pjSGf1V.jpg">
                    <img alt="img2" src="https://i.imgur.com/pjSGf1V.jpg" />
                </a>
            </LightGallery>
        </div>


		</section>

	);
}


