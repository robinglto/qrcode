import Head from "next/head";
import { Inter } from "@next/font/google";

import Generator from "@/components/Generator";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Generator />
      <Footer />
    </>
  );
}