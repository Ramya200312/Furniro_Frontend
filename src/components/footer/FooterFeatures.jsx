import {
  Trophy,
  ShieldCheck,
  Truck,
  Headphones,
} from "lucide-react";

export default function FooterFeatures() {
  const features = [
    {
      icon: Trophy,
      title: "High Quality",
      desc: "crafted from top materials",
    },
    {
      icon: ShieldCheck,
      title: "Warranty Protection",
      desc: "Over 2 years",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      desc: "Order over 150 $",
    },
    {
      icon: Headphones,
      title: "24 / 7 Support",
      desc: "Dedicated support",
    },
  ];

  return (
    <section className="bg-[#F9F1E7] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-4">
              <Icon size={36} className="text-gray-700" />
              <div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
