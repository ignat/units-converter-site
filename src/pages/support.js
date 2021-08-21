import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

function SupportPage() {
  return (
    <Layout>
      <Seo
        keywords={[`units`, `unit`, `convertor`, `convert`, `offline`, `free`, `mobile`, `ios`, `support`, `bugs`]}
        title="Support"
      />

      <section>
        <h1 className="text-4xl font-bold my-4">Support</h1>
        <p className="my-4">Feel free to send your questions, suggestions, feature requests, and bug reports to our email address at <a href="mailto:info@unitsapp.xyz" className="text-blue-600">info@unitsapp.xyz</a>.</p>
      </section>
    </Layout>
  );
}

export default SupportPage;
