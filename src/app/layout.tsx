import { Layout } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import { getPageMap } from "nextra/page-map";
import React from "react";
import Footer from "~/ui/footer";
import Head from "~/ui/head";
import Navbar from "~/ui/navbar";
import NPorgessBar from "~/ui/nprogress-bar";
import SearchWithCallback from "~/ui/search-with-callback";
import "~/constants/styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <NPorgessBar>
          <Layout
            pageMap={await getPageMap()} // require
            navbar={<Navbar />}
            sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1 }}
            navigation={{ prev: true, next: true }}
            search={<SearchWithCallback />}
            docsRepositoryBase={undefined}
            editLink={null}
            feedback={{ content: null }}
          >
            {children}
            <Footer />
          </Layout>
        </NPorgessBar>
      </body>
    </html>
  );
}
