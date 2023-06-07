import Head from "next/head";
import React from "react";

type SeoProps = {
  title?: string;
  keywords?: string;
  metaDescription?: string;
};

const defaultMeta = {
  title: "Resellpur",
  keywords: "sell buy security",
  metaDescription:
    "Selling and buying second hand things with digital security",
};

const Seo = (props: SeoProps) => {
  const meta = {
    ...defaultMeta,
    ...props,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow,index" />
      <meta content={meta.metaDescription} name="description" />
      <meta content={meta.keywords} name="keywords" />
      <meta property="og:url" content="" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <script type="text/javascript" src="/gtag.js" defer />
    </Head>
  );
};
export default Seo;
