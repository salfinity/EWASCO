import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function WaterServicesDropdown() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      title: "Water Supply",
      subItems: [
        "Residential Water Connections",
        "Commercial & Industrial Supply",
        "Bulk Water Supply",
      ],
    },
    {
      title: "Water Conservation",
      subItems: ["Saving Tips", "Leak Detection", "Rainwater Harvesting"],
    },
    {
      title: "Quality Assurance",
      subItems: ["Treatment Processes", "Testing Standards", "Quality Reports"],
    },
    {
      title: "Billing & Payments",
      subItems: ["Tariffs & Rates", "Online Payments", "Bill Disputes"],
    },
    {
      title: "Customer Support",
      subItems: ["Report an Issue", "Service Requests", "FAQs"],
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center px-4 text-dark"
      >
        More
        <ChevronDown
          className={`ml-2 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open && (
        <div className="absolute mt-2 w-64 bg-white shadow-lg rounded-lg border">
          <div className="max-h-60 overflow-y-auto">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b last:border-none">
                <p className="px-4 py-2 font-semibold bg-gray-100">
                  {item.title}
                </p>
                {item.subItems.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
