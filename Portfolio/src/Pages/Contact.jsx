
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "../Components/index.jsx";


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

    const serviceID = "your_service_id"; // Replace with your EmailJS Service ID
    const templateID = "your_template_id"; // Replace with your EmailJS Template ID
    const userID = "your_user_id"; // Replace with your EmailJS User ID

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      to_email: "j.zala2553@gmail.com", // Your email address
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      (response) => {
        alert("Email sent successfully!");
      },
      (error) => {
        console.error("Error sending email: ", error);
        alert("Failed to send email. Please try again.");
      }
    );
  };

  return (
    <div className="px-[10%]  h-[80vh] grid grid-rows-[1fr_5fr] mb-10 gap-2">
      <h1 className="text-5xl text-center pt-3 font-montserrat">
        Get Free Quotation!
      </h1>
      <div className="grid grid-cols-2">
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
    </div>
  );
}

export default Contact;
