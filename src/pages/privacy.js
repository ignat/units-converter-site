import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

function PrivacyPage() {
  return (
    <Layout>
      <Seo
        keywords={[`units`, `unit`, `convertor`, `convert`, `offline`, `free`, `mobile`, `ios`, `privacy`, `policy`]}
        title="Privacy Policy"
      />

      <section>
        <h1 className="text-4xl font-bold my-4">Privacy Policy</h1>
        <p className="my-4">We do not collect, use, save, share, or have access to any of your personal data recorded in the Units Converter app.</p>
        <p className="my-4">Individual settings and data entries are stored only on your device.</p>
        <p className="my-4">If you have any questions about this Privacy Policy, feel free to contact us at <a href="mailto:info@unitsapp.xyz" className="text-blue-600">info@unitsapp.xyz</a>.</p>
      </section>
    </Layout>
  );
}

export default PrivacyPage;
