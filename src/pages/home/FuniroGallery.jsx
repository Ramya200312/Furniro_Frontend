import {
  furnirogal1, furnirogal2, furnirogal3, furnirogal4, furnirogal5,
  furnirogal6, furnirogal7,
} from "../../assets/images";


export default function FuniroGallery() {

  const gallery = [
    {
      image: furnirogal1,
    },
    {
      image: furnirogal2,
    },
    {
      image: furnirogal3,
    },
    {
      image: furnirogal4,
    },
    {
      image: furnirogal5,
    },
    {
      image: furnirogal6,
    },
    {
      image: furnirogal7,
    },

  ]

  return (
    <section className="py-28 bg-white">
      <div className="text-center">
        <p className="text-gray-500 text-sm">Share your setup with</p>
        <h2 className="text-4xl font-bold mt-2">#FuniroFurniture</h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-5 gap-4">

        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <img
            src={furnirogal1}
            className="h-[420px] w-full object-cover"
          />
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4">
          <img
            src={furnirogal2}
            className="h-[200px] w-full object-cover"
          />
          <img
            src={furnirogal3}
            className="h-[200px] w-full object-cover"
          />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          <img
            src={furnirogal4}
            className="h-[460px] w-full object-cover"
          />
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-4">
          <img
            src={furnirogal5}
            className="h-[200px] w-full object-cover"
          />
          <img
            src={furnirogal6}
            className="h-[200px] w-full object-cover"
          />
        </div>

        {/* Column 5 */}
        <div className="flex flex-col gap-4">
          <img
            src={furnirogal7}
            className="h-[420px] w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
