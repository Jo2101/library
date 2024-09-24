import Head from "next/head";
import AboutUs from "../../components/about/About";

export const metadata = {
  title: "Title for tab",
  description: "About company",
};

const AboutPage = () => {
  const mainHeadline = "About us";

  const sections = [
    {
      headline: "Who We Are",
      text: "Short description about..",
    },
    {
      headline: "Our Mission",
      text: "Introduction ",
    },
    {
      headline: "Our Values",
      text: "Introduction of core values",
    },
  ];

  return (
    <>
      <Head>
        <meta name="description" content="Short description" />
        <meta name="keywords" content="keywords for site" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AboutUs mainHeadline={mainHeadline} sections={sections} />
    </>
  );
};

export default AboutPage;
