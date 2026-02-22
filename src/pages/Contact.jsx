import { useState } from "react";
import axios from "axios";
import { MapPin, Phone, Clock } from "lucide-react";
import banner from "../assets/images/bannerImg.png"; // change path if needed

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const url = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${url}/contact`,
        formData
      );

      alert(res.data.message || "Message sent successfully");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      alert("Failed to send message");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* HERO BANNER */}
      <div
        className="h-[260px] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
        <p className="text-gray-500 mt-2 text-sm">Home &gt; Contact</p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Get In Touch With Us
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT INFO */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="mt-1" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-gray-500 text-sm">
                  236 5th SE Avenue, New <br />
                  York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-500 text-sm">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1" />
              <div>
                <h4 className="font-semibold">Working Time</h4>
                <p className="text-gray-500 text-sm">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium">Your name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Abc"
                className="w-full mt-2 border rounded-md px-4 py-3 outline-none focus:border-[#B88E2F]"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@email.com"
                className="w-full mt-2 border rounded-md px-4 py-3 outline-none focus:border-[#B88E2F]"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Optional"
                className="w-full mt-2 border rounded-md px-4 py-3 outline-none focus:border-[#B88E2F]"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message *</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi! I'd like to ask about..."
                className="w-full mt-2 border rounded-md px-4 py-3 outline-none focus:border-[#B88E2F]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#B88E2F] text-white px-8 py-3 rounded-md hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
