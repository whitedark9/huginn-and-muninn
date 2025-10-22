import Image from "next/image";
import { Navbar as NextraNavbar } from "nextra-theme-docs";
import APP from "~/constants/configs/app";

export default function Navbar() {
  return (
    <NextraNavbar
      logo={
        <>
          <Image
            src={"/favicon.ico"}
            width={APP.logoSize}
            height={APP.logoSize}
            alt={"Logo"}
            className="flex dark:hidden"
          />
          <Image
            src={"/favicon-dark.ico"}
            width={APP.logoSize}
            height={APP.logoSize}
            alt={"Logo"}
            className="hidden dark:flex"
          />
          <span className="hidden lg:inline-flex ms-2 text-2xl font-bold">
            Huginn & Muninn
          </span>
        </>
      }
      projectLink={undefined}
      chatLink={undefined}
    ></NextraNavbar>
  );
}
