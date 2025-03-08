import InsightRoll from "/src/components/About/InsightRoll";

export const metadata = {
  title: "Our Resources",
  description: "Here are some useful resources that we offer.",
};
const insights = [
  "Reliable and Safe Drinking Water Supply 💧",
  "24/7 Emergency Water Services 🚰",
  "Water Conservation Tips for Sustainable Use 🌿",
  "Flexible Payment Plans for Water Bills 💳",
  "Advanced Water Treatment & Purification Processes 🏭",
  "Expert Guidance on Rainwater Harvesting ☔",
  "Efficient Leak Detection and Repair Services 🔍",
  "Community Education on Water Management 📚",
  "Regular Water Quality Testing & Assurance ✅",
  "Innovative Smart Metering for Accurate Billing 📊",
  "Dedicated Customer Support for Water-Related Queries 📞",
  "Collaboration with Local and International Water Experts 🌍",
];
export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
