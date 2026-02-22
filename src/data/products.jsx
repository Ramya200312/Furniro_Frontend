import set1Img1 from "../assets/images/products/set1Img1.png";
import set1Img2 from "../assets/images/products/set1Img2.png";
import set1Img3 from "../assets/images/products/set1Img3.png";
import set1Img4 from "../assets/images/products/set1Img4.png";
import set2Img5 from "../assets/images/products/set2Img5.png";
import set2Img6 from "../assets/images/products/set2Img6.png";
import set2Img7 from "../assets/images/products/set2Img7.png";
import set2Img8 from "../assets/images/products/set2Img8.png";

import descImg1 from "../assets/images/products/descImg1.png";
import descImg2 from "../assets/images/products/descImg2.png";

export const products = [

  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    longDescription: `
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall.
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class.`,
    descriptionImages: [descImg1, descImg2],
    price: 2500000,
    oldPrice: 3500000,
    image: set1Img1,
    badge: "-30%",
    badgeColor: "bg-red-400",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    longDescription: `
    Designed with elegance and comfort in mind, Leviosa blends modern aesthetics with timeless craftsmanship.
    The curved backrest provides ergonomic support while the sturdy wooden legs ensure durability.
    Perfect for cafes, dining rooms, or contemporary living spaces, this chair elevates your interiors
    with its minimalist yet luxurious appeal.`,
    price: 2500000,
    image: set1Img2,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    longDescription: `
    Lolito is a statement piece crafted for those who appreciate bold luxury.
    Upholstered in premium fabric with high-density foam cushioning,
    this spacious sofa provides exceptional comfort and support.
    Its grand design and rich texture make it perfect for large living rooms,
    creating a warm and sophisticated atmosphere.`,
    price: 7000000,
    oldPrice: 14000000,
    image: set1Img3,
    badge: "-50%",
    badgeColor: "bg-red-400",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    longDescription: `
    Crafted for outdoor elegance, Respira combines functionality with modern design.
    Made using weather-resistant materials, this bar table and stool set
    is perfect for patios, balconies, and garden spaces.
    Its sleek finish and sturdy frame ensure long-lasting durability
    while adding a refreshing vibe to your outdoor gatherings.`,
    price: 500000,
    image: set1Img4,
    badge: "New",
    badgeColor: "bg-teal-400",
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    longDescription: `
    Grifo is a beautifully designed night lamp that brings warmth and calmness to your space.
    Its soft ambient lighting creates a relaxing atmosphere, ideal for bedrooms or study corners.
    The compact design makes it easy to place on bedside tables or shelves,
    offering both decorative charm and practical lighting.`,
    price: 1500000,
    image: set2Img5,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    longDescription: `
    Muggo is a charming and compact mug designed for your daily coffee or tea moments.
    Crafted from high-quality ceramic, it ensures durability and heat retention.
    Its minimalist design and comfortable grip make it a perfect addition
    to your kitchen or office desk.`,
    price: 150000,
    image: set2Img6,
    badge: "New",
    badgeColor: "bg-teal-400",
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    longDescription: `
    Pingky is a cozy and stylish bed set designed to transform your bedroom into a dreamy retreat.
    Made from soft, breathable fabric, it ensures a comfortable and restful sleep.
    The elegant patterns and soothing colors add a touch of warmth and charm,
    making your bedroom feel inviting and luxurious.`,
    price: 7000000,
    oldPrice: 14000000,
    image: set2Img7,
    badge: "-50%",
    badgeColor: "bg-red-400",
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    longDescription: `
    Potty is a sleek and minimalist flower pot designed for modern interiors.
    Its clean lines and neutral finish make it suitable for living rooms,
    offices, balconies, or window sills.
    Crafted from durable materials, it supports both indoor and outdoor plants
    while enhancing the overall aesthetic of your space.`,
    price: 500000,
    image: set2Img8,
    badge: "New",
    badgeColor: "bg-teal-400",
  },

];