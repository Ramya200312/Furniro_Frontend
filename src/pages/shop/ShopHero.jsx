import banner from "../../assets/images/bannerImg.png";

export default function ShopHero() {
  return (
    <div
      className="h-[300px] bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h1 className="text-4xl font-semibold">Shop</h1>
      <p className="text-sm mt-2 text-gray-600">
        Home &gt; <span className="font-medium text-black">Shop</span>
      </p>
    </div>
  );
}
