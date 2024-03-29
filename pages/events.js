import React from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation/Navigation";
import Socials from "@/components/Socials/Socials";
import About from "@/components/About/About";
import Events from "@/components/Events/Events";
import Companies from "@/components/Companies/Companies";
import Script from "next/script";
import { createClient } from "next-sanity";

// Create a client instance to use on the page:
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-08-01",
  useCdn: false,
});

export async function getServerSideProps() {
  const eventSanityData = await client.fetch(`*[_type == "events"]`);
  const eventSanityImage = await client.fetch(
    `*[_type == "sanity.imageAsset"]`
  );
  return {
    props: {
      eventSanityData,
      eventSanityImage,
    },
  };
}

export default function events({ eventSanityData, eventSanityImage }) {
  return (
    <>
      <Head>
        <title>Louby Lou - Children's Entertainer - Events</title>
        <meta
          name="description"
          content="Looking for exclusive, high-end events by Manchester, Lancashire, Cheshire and Merseyside's premium children's entertainer and clown for hire? Look no further."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8ELL72CD8T"
      ></Script>
      <Script>{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8ELL72CD8T');`}</Script>
      <main>
        <Navigation />
        <About
          title={"What is a Louby Lou Event?"}
          body={[
            "Step into a world of wonder and laughter with Louby Lou, the incredible female clown from Manchester. Her extraordinary events are the epitome of excitement, bringing the giggle of a lifetime to both children and adults. From dancing to infectious beats and meeting the lovable Roger the Rabbit, to the soulful melodies of Louby Lou's saxophone, every moment is crafted for unforgettable memories.",
            "These ticketed gatherings at set locations offer a sensory feast where guests receive special gifts and embark on a musical journey to Ibiza. Don't miss out on Louby Lou's magical events that transcend the ordinary, delivering pure joy and cherished memories in a captivating atmosphere. Secure your ticket today and be prepared for a laughter-filled celebration like no other!",
            "Scroll down and book a magical event with Louby Lou for an unforgettable experience filled with laughter and joy!",
          ]}
          spacer
        />
        {/* {eventsData.events.map((item, idx) => (
          <Events key={idx} position={Number.isInteger(idx / 2)} data={item} />
        ))} */}
        {eventSanityData.map((item, idx) => (
          <Events
            key={idx}
            index={idx}
            imageData={eventSanityImage}
            position={Number.isInteger(idx / 2)}
            data={item}
          />
        ))}

        <Socials />
        <Companies />
      </main>
    </>
  );
}
