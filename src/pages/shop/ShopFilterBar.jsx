import { SlidersHorizontal, LayoutGrid } from "lucide-react";

export default function ShopFilterBar() {
  return (
    <div className="bg-[#F9F1E7] py-5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center flex-wrap gap-4">
        
        {/* Left */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 cursor-pointer">
            <SlidersHorizontal size={18} />
            <span>Filter</span>
          </div>

          <LayoutGrid size={18} />

          <span>Showing 1–16 of 32 results</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span>Show</span>
            <input
              type="number"
              value="16"
              className="w-16 h-10 text-center border bg-white"
              readOnly
            />
          </div>

          <div className="flex items-center gap-2">
            <span>Sort by</span>
            <select className="h-10 px-4 border bg-white">
              <option>Default</option>
              <option>Price</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}
