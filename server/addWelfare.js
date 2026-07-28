const mongoose = require("mongoose");
require("dotenv").config();

const WelfareScheme = require("./models/WelfareScheme");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    try {
      // Delete old data
      await WelfareScheme.deleteMany({});

      // Insert new data
      await WelfareScheme.insertMany([
        {
          schemeName: "YSR Pension Kanuka",
          category: "Pension Scheme",
          eligibility: "Senior citizens aged 60 years and above",
          benefits:
            "Monthly financial assistance provided by the Government of Andhra Pradesh.",
          applyLink: "https://sspensions.ap.gov.in",
        },
        {
          schemeName: "Ayushman Bharat PM-JAY",
          category: "Healthcare Scheme",
          eligibility: "Eligible economically weaker families",
          benefits:
            "Cashless treatment up to ₹5 lakh per family per year in empanelled hospitals.",
          applyLink: "https://pmjay.gov.in",
        },
        {
          schemeName: "Senior Citizen Savings Scheme (SCSS)",
          category: "Savings Scheme",
          eligibility: "Indian citizens aged 60 years and above",
          benefits:
            "Government-backed savings scheme with attractive interest rates and regular income.",
          applyLink: "https://www.indiapost.gov.in",
        },
        {
          schemeName: "National Social Assistance Programme",
          category: "Social Welfare",
          eligibility: "Below Poverty Line senior citizens",
          benefits:
            "Financial assistance for elderly citizens under the Indira Gandhi National Old Age Pension Scheme.",
          applyLink: "https://nsap.nic.in",
        },
      ]);

      console.log("✅ Welfare schemes added successfully");
    } catch (err) {
      console.log(err);
    }

    process.exit();
  })
  .catch((err) => {
    console.log(err);
  });