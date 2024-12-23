import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "../Components/index.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      to_email: "mr.zala2003@gmail.com", // Your email address
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_USER_ID
      )
      .then(
        (response) => {
          toast.success(
            "Email sent successfully! We will get back to you soon."
          );
          setFormData({ name: "", email: "", mobile: "", message: "" }); // Clear form fields after success
        },
        (error) => {
          toast.error("Failed to send the email. Please try again.");
        }
      );
  };

  return (
    <div className="xl:px-[10%] grid grid-rows-[1fr_5fr] mb-10 gap-2 px-2">
      <h1 className="text-5xl text-center pt-3 font-montserrat">
        Get Free Quotation!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="justify-self-center self-center">
          <img src="/contact-img.jpg" alt="Mail image" className="h-[300px]" />
        </div>
        <form className="grid grid-row-5 gap-3" onSubmit={sendEmail}>
          <input
            className="block h-[50px] rounded-2xl px-4 py-2 outline-none"
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            className="block h-[50px] rounded-2xl px-4 py-2 outline-none"
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            className="block h-[50px] rounded-2xl px-4 py-2 outline-none"
            placeholder="Mobile Number"
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
          <textarea
            className="block rounded-2xl px-4 py-2 outline-none"
            name="message"
            placeholder="Message"
            rows={5}
            cols={10}
            value={formData.message}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            className="px-4 py-2 border-2 rounded-xl border-green-btn"
          >
            Get Now 📞
          </Button>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default Contact;
