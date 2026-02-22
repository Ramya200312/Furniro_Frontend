import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/images/heroImg.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="
        w-full
        bg-cover bg-center bg-no-repeat
        flex justify-center
      "
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* 1440px Figma Frame */}
      <div
        className="
          w-full
          max-w-[1440px]
          min-h-[600px]
          md:min-h-[716px]
          flex items-center
          px-6
        "
      >
        {/* Push card to right */}
        <div className="ml-auto">

          {/* Floating Card */}
          <div className="bg-[#FFF3E3] p-8 md:p-10 rounded-lg shadow-xl max-w-md">
            <p className="uppercase tracking-widest text-sm text-[#333333]">
              New Arrival
            </p>

            <h1 className="text-3xl md:text-4xl text-[#B88E2F] font-bold leading-tight mt-4">
              Discover Our <br /> New Collection
            </h1>

            <p className="text-[#333333] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis.
            </p>

            <button
              onClick={() => navigate("/shop")}
              className="mt-6 bg-[#B88E2F] text-white px-6 py-3 hover:bg-[#9a7424] transition rounded"
            >
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
