export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Funiro.</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              400 University Drive Suite 200 Coral <br />
              Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gray-400 text-sm mb-4">Links</h4>
            <ul className="space-y-3 font-medium">
              <li className="hover:text-yellow-600 cursor-pointer">Home</li>
              <li className="hover:text-yellow-600 cursor-pointer">Shop</li>
              <li className="hover:text-yellow-600 cursor-pointer">About</li>
              <li className="hover:text-yellow-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-gray-400 text-sm mb-4">Help</h4>
            <ul className="space-y-3 font-medium">
              <li className="hover:text-yellow-600 cursor-pointer">
                Payment Options
              </li>
              <li className="hover:text-yellow-600 cursor-pointer">Returns</li>
              <li className="hover:text-yellow-600 cursor-pointer">
                Privacy Policies
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-400 text-sm mb-4">Newsletter</h4>
            <div className="flex items-center border-b border-gray-400 pb-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 outline-none text-sm placeholder-gray-400"
              />
              <button className="text-sm font-semibold hover:text-yellow-600">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-sm text-gray-500">
          2023 furino. All rights reverved
        </div>
      </div>
    </footer>
  );
}
