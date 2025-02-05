import Head from "next/head";
import { Button } from "@chakra-ui/react";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Button>ㅁㄴㅇㄹ</Button>
      </DefaultLayout>
    </>
  );
}
