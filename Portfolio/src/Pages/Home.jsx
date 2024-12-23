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
    }, 5000);

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
    <section
      className="xl:grid xl:grid-cols-[1.5fr_1fr_2fr] xl:grid-rows-[1.5fr_1.5fr_2fr] xl:gap-1 

    grid grid-cols-2 grid-rows-[0fr_0fr_1.5fr_0fr_0fr]  gap-2

    xl:px-[10%] xl:pt-[5%] xl:mb-10 px-[5%]"
    >
      {/* Name  */}

      <div className="w-full h-[100%] xl:row-start-1 xl:col-start-1  grid grid-rows-2 items-end pt-3  col-span-2 xl:col-span-1 ">
        <div className="font-bubblegum xl:text-3xl font-medium tracking-wider text-xl">
          Hy!I Am
        </div>
        <div className=" xl:text-4xl font-semibold  text-green-btn text-2xl">
          Jayrajsnh Zala.
        </div>
        <div></div>
      </div>

      {/* tag line */}

      <div className="w-full xl:row-start-1 xl:col-start-3 col-span-2 text-sm xl:text-xl">
        <div className="text-right">
          I craft elegent and Building the future
        </div>
        <div className="text-right">by one line at a time</div>
      </div>

      {/* Arrow Image */}
      <div className="w-full  xl:row-start-2 xl:col-start-1 row-start-3 col-start-1 relative col-span-2 xl:col-span-1 ">
        <img
          src="/arraow.svg"
          className="xl:h-[10rem] xl:w-[20rem] absolute xl:-bottom-8  xl:left-[25%] xl:rotate-12 rotate-[30deg] bottom-20 w-full "
        />
      </div>

      {/* Testimonial */}
      <div className="xl:row-start-2 xl:col-start-3 row-start-5 col-span-2 testimonial-container w-[300px] h-[100px] rounded-md items-center shadow-custom bg-white justify-self-center grid grid-rows-3 py-1 px-4 self-center">
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
      <div className="w-full h-[100%]  grid grid-rows-2 xl:row-start-3 xl:col-start-1 row-start-4 col-span-2 py-5 gap-3 xl:gap-5">
        <div className="grid grid-cols-[0.2fr_1fr] xl:justify-self-start justify-self-center gap-3">
          <div className="text-5xl text-green-btn">01</div>
          <div>
            <div>YEARS</div>
            <div>EXPERIENCE</div>
          </div>
        </div>
        <div className="grid grid-cols-3 place-items-center xl:place-items-start items-center justify-between xl:grid-cols-6 ">
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
      <div className="w-full xl:row-start-3 xl:col-start-2 row-span-3 col-start-2 relative ">
        <div className="bg-green-btn absolute xl:w-[230px]  xl:h-[250px] w-[150px]  h-[150px]  xl:bottom-10 rounded-[50%] bottom-72"></div>

        <img
          src="/cartoon-img-2.png"
          className="absolute h-[230px] bottom-72  xl:bottom-6 xl:h-[450px] xl:left-0 "
        />
      </div>

      {/* TEchnolies */}
      <div className="w-full h-[150px] grid grid-rows-2 xl:row-start-3 xl:col-start-3  row-start-3 col-start-1 self-end p-6 ">
        <div className="font-lavishly xl:text-3xl   justify-self-center self-end xl:justify-self-end xl:pr-24 ">
          {displayedText[0]}
        </div>
        <div className="xl:text-2xl text-green-btn font-semibold  justify-self-end xl:">
          {displayedText[1]}
        </div>
      </div>
    </section>
  );
}

export default Home;
