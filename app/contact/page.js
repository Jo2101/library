import Contact from "../../components/contact/Contact";
import Head from "next/head";

export const metadata = {
  title: "Title for tab",
  description: "Feel free to reach out to us.",
};
const customContact = [
  {
    type: "text",
    name: "name",
    placeholder: "Full Name",
    required: true,
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email Address",
    required: true,
  },
  {
    type: "textarea",
    name: "message",
    placeholder: "Message",
    required: true,
  },
  {
    type: "text",
    name: "subject",
    placeholder: "Subject",
    required: true,
  },
];
export default function ContactPage() {
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
      <main>
        <div>
          <Contact />
        </div>
      </main>
    </>
  );
}
