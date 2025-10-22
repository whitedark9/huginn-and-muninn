import { Footer as NextraFooter } from "nextra-theme-docs";

export default function Footer() {
  return (
    <NextraFooter>
      MIT {new Date().getFullYear()} ©{" "}
      <a href="https://nextra.site" target="_blank">
        Nextra
      </a>
      .
    </NextraFooter>
  );
}
