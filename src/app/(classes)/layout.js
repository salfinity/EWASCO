import InsightRoll from "/src/components/About/InsightRoll";

const insights = [
  "Over 2000 Certified Graduates 🚗",
  "A Legacy of 20+ Years in Driving Education 📆",
  "Exemplary 99% Client Satisfaction Rate 🌟",
  "Flexible Payments with Installment Options 💳",
  "Cutting-Edge Online Learning Platform 💻",
  "Prestigious Certificate of Completion 📝",
  "Recipient of the Hackernoon Noonies Award 🏆",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
