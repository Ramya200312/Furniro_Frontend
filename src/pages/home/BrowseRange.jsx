import { useNavigate } from "react-router-dom";

import { diningImg, livingImg, bedroomImg } from "../../assets/images";


export default function BrowseRange() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Dining",
      image: diningImg,
      path: "/category/dining",
    },
    {
      id: 2,
      title: "Living",
      image: livingImg,
      path: "/category/living",
    },
    {
      id: 3,
      title: "Bedroom",
      image: bedroomImg,
      path: "/category/bedroom",
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold">Browse The Range</h2>

        <p className="text-gray-600 mt-3 mb-10">
          Discover furniture categories crafted for every space.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleNavigate(category.path)}
              className="group cursor-pointer"
            >
            <div className="w-[381px] h-[480px] mx-auto overflow-hidden rounded-lg">
                <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
            </div>


              <h3 className="mt-4 text-xl font-semibold">
                {category.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
