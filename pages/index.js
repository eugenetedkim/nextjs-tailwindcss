// pages/index.js
import Head from 'next/head'
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';

export default function Home() {
  return (
    <>
      <Head>
        <title>Eugene Ted Kim</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Eugene Kim" message="Software Engineer"/>
      {/* <Slider slides={SliderData} /> */}
    </>
  )
}
