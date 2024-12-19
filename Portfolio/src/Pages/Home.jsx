import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  //#region review animation

  const testimonials = [
    { text: "Excellent service .... 😀😀", author: "Vaishakhi Arbastani" },
    { text: "Amazing experience! Would recommend. 🌟", author: "John Doe" },
    { text: "Top-notch quality and support! 💯", author: "Emily Carter" },
    { text: "Loved the attention to detail. 🧡", author: "Michael Brown" },
    { text: "Affordable and reliable. 👍", author: "Sophia Wilson" },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // Trigger fade-out animation
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length); // Move to next testimonial
        setAnimate(false); // Trigger fade-in animation
      }, 500); // Match the duration of the fade-out animation
    }, 1500);

    return () => clearInterval(interval); // Clean up on unmount
  }, [testimonials.length]);
  //#endregion

  //#region Intro animation
  const roles = [
    ["MERN Stack", "Developer"],
    ["Fullstack", "Developer"],
    ["Creative", "Designer"],
    ["Web", "Scrapper"],
    ["C++ / Python", "Developer"],
    [".Net", "Developer"],
  ];

  const [displayedText, setDisplayedText] = useState(["", ""]); // Current text being typed
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0); // Index of the current role
  const [isDeleting, setIsDeleting] = useState(false); // Whether we are deleting text
  const typingSpeed = 100; // Typing speed (ms per character)
  const deleteSpeed = 50; // Deleting speed (ms per character)
  const pauseTime = 2000; // Pause before deleting (ms)

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      const [currentSoftware, currentDeveloper] = currentRole;

      if (!isDeleting) {
        // Typing the text
        if (
          displayedText[0].length < currentSoftware.length ||
          displayedText[1].length < currentDeveloper.length
        ) {
          setDisplayedText([
            currentSoftware.substring(0, displayedText[0].length + 1),
            currentDeveloper.substring(0, displayedText[1].length + 1),
          ]);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting the text
        if (displayedText[0].length > 0 || displayedText[1].length > 0) {
          setDisplayedText([
            currentSoftware.substring(0, displayedText[0].length - 1),
            currentDeveloper.substring(0, displayedText[1].length - 1),
          ]);
        } else {
          // Move to the next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roles, currentRoleIndex]);

  //#endregion

  return (
    <section className="grid grid-cols-[1.5fr_1fr_2fr] grid-rows-[1.5fr_1.5fr_2fr] px-[10%] gap-1 h-[80vh] pt-[5%]">
      {/* Name  */}

      <div className="w-full h-[100%] row-start-1 col-start-1  grid grid-rows-2 items-end pt-3">
        <div className="font-bubblegum text-3xl font-medium tracking-wider ">
          Hy!I Am
        </div>
        <div className=" text-4xl font-semibold  text-green-btn ">
          Jayrajsnh Zala.
        </div>
        <div></div>
      </div>

      {/* tag line */}

      <div className="w-full h-[100%] row-start-1 col-start-3 ">
        <div className="text-right">
          I craft elegent and Building the future
        </div>
        <div className="text-right">by one line at a time</div>
      </div>

      {/* Arrow Image */}
      <div className="w-full h-[100%] row-start-2 col-start-1 ">
        <img
          src="/arraow.svg"
          className="h-[10rem] w-[20rem] absolute left-[20%] rotate-12"
        />
      </div>

      {/* Testimonial */}
      <div className="row-start-2 col-start-3 testimonial-container w-[75%] h-[70%] rounded-md items-center shadow-custom bg-white justify-self-center grid grid-rows-3 p-3 px-4 self-center">
        <div
          className={`testimonial-text row-span-2 ${
            animate ? "fade-out" : "fade-in"
          }`}
        >
          "{testimonials[currentIndex].text}"
        </div>
        <div
          className={`testimonial-author font-bold justify-self-end ${
            animate ? "fade-out" : "fade-in"
          }`}
        >
          - {testimonials[currentIndex].author}
        </div>
      </div>

      {/* Social */}
      <div className="w-full h-[100%]  grid grid-rows-2 row-start-3 col-start-1">
        <div className="grid grid-cols-[0.2fr_1fr]">
          <div className="text-5xl text-green-btn">01</div>
          <div>
            <div>YEARS</div>
            <div>EXPERIENCE</div>
          </div>
        </div>
        <div className="grid grid-cols-6 items-center">
          {/* <Link >
            <img src="/social/fb.png"/>
          </Link> */}
          <Link
            to="https://www.instagram.com/the_jayubha_zala/"
            target="_blank"
          >
            <img src="/social/insta.png" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/jayrajsinhzala/"
            target="_blank"
          >
            <img src="/social/linkedin.png" />
          </Link>
          <Link to="https://github.com/carzy-zala" target="_blank">
            <img src="/social/github.png" />
          </Link>
          {/* <Link >
            <img src="/social/twitter.png"/>
          </Link> */}
        </div>
      </div>

      {/* Main hero Image */}
      <div className="w-full h-[100%] row-start-3 col-start-2 ">
        {/* <div className="bg-green-btn-300 absolute w-[230px] h-[230px] bottom-10 rounded-[50%]"></div> */}
        <div className="bg-green-btn absolute w-[230px] rotate-6 h-[250px] bottom-10 rounded-[50%]"></div>

        <img
          src="/cartoon-img-2.png"
          className="absolute bottom-10 h-[450px] left-[34%] "
        />
      </div>

      {/* TEchnolies */}
      <div className="w-full h-[100%] grid grid-rows-4 grid-cols-[1fr_1fr_0.3fr] row-start-3 col-start-3">
        <div className="font-lavishly text-3xl row-start-3 col-start-2 col-span-2 justify-self-center ">
          {displayedText[0]}
        </div>
        <div className="text-2xl text-green-btn font-semibold row-start-4 col-start-2  col-span-2 justify-self-end">
          {displayedText[1]}
        </div>
      </div>
    </section>
  );
}

export default Home;
