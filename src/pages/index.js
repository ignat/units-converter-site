import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";


function HomePage() {
  return (
    <Layout>
      <Seo
        keywords={[`units`, `unit`, `convertor`, `convert`, `offline`, `free`, `mobile`, `ios`, `home`]}
        title="Home"
      />
<section className="flex flex-wrap mt-8 mb-32">
  <div className="w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-5xl font-bold tracking-tight leading-tight">Offline Units Converter</h1>
    <div className="my-4 text-gray-800 text-lg">
        Convert values of different systems of measurement on the go without Internet connection.
    </div>
    <div className="my-8">
      <a href="https://apps.apple.com/us/app/offline-units-converter/id1581993464?itsct=apps_box_badge&amp;itscg=30200" className="app-store-badge">
        <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1629331200&h=9584e9f61aa236f31c828fec5b944d4f" alt="Download on the App Store" />
      </a>
    </div>
  </div>
  <div className="w-full md:w-1/2 text-center">
    <StaticImage alt="App Icon" imgClassName="rounded-3xl" className="m-auto rounded-3xl shadow-lg" src="../images/app-icon.png" layout="fixed" width={300} height={300} />
  </div>
</section>

    </Layout>
  );
}

export default HomePage;
