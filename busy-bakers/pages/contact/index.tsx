import { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-10">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6 text-amber-700">
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="you@email.com"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="font-medium text-gray-700">
            Telephone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Phone Number"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-medium text-gray-700">
            Your Request
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
            placeholder="How can we help you?"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded transition-colors mt-2"
        >
          Send Message
        </button>
        {submitted && (
          <div className="text-green-600 text-center font-medium mt-2">
            Thank you for contacting us! We will get back to you soon.
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
