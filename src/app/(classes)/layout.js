import InsightRoll from "/src/components/About/InsightRoll";

const insights = [
  "Providing Clean Water to Over 50,000 Households 🚰",
  "A Legacy of 20+ Years in Water Supply & Management 📆",
  "99% Customer Satisfaction with Reliable Water Services 🌟",
  "Affordable Billing with Flexible Payment Plans 💳",
  "Innovative Smart Metering & Online Billing System 💻",
  "Certified & Safe Drinking Water Meeting Global Standards 📝",
  "Awarded for Excellence in Sustainable Water Management 🏆",
];
export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
