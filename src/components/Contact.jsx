import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      await response.json();

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        setSuccess("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setSuccess("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="px-6 py-24 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* Left Side */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Let’s build something amazing 🚀
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            I'm currently open to freelance work, internships, and
            full-time opportunities. Feel free to reach out if you
            have a project in mind or just want to connect.
          </p>

          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p>📧 rwts38549@gmail.com</p>
            <p>📍 India</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6"
        >
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-center text-sm text-green-500">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
