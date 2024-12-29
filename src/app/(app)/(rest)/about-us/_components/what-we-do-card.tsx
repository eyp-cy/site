import Image, { StaticImageData } from "next/image";
import type { ReactNode } from "react";

interface props {
  title: string;
  info: string;
  imageURL: StaticImageData;
  children: ReactNode;
}

export function WhatWeDoCard({ title, info, imageURL, children: icon }: props) {
  return (
    <div className="group max-w-3xl self-start flex w-full sm:flex sm:flex-row sm:items-center xl:w-64 xl:flex-col xl:h-full">
      <Image
        className="hidden h-60 rounded-xl object-cover transition-all duration-200 group-hover:scale-[0.97] sm:block"
        height={250}
        width={250}
        src={imageURL}
        alt=""
      />
      <div className="backdrop-blur-xl bg-white/50 relative mx-2 rounded-xl px-4 xs:px-8 py-6 transition-all duration-200 group-hover:scale-[1.02] h-60 xl:h-96 ml-0 sm:-ml-4 xl:-mx-1 xl:-mt-14 flex flex-col items-center justify-center">
        <div className="absolute -left-3 -top-3 flex h-max items-center rounded-full bg-accent-900 p-4 sm:hidden">
          {icon}
        </div>
        <h3 className="self-center px-7 pb-4 text-center text-xl font-semibold sm:px-0">
          {title}
        </h3>
        <p className="text-center tracking-wide">{info}</p>
      </div>
    </div>
  );
}
