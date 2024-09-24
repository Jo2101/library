import Head from "next/head";

export const metadata = {
  title: "Your name",
  description: "Short description",
};
export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="few keywords related" />
      </Head>
      <main className=" bg-blue-200 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></main>
    </>
  );
}
