import { useGSAP } from "@gsap/react";
import { flavorLists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      timeline.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    const titleTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTimeline
      .to(".first-text-split", {
        xPercent: -25,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -8,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorLists.map(({ name, color, rotation }) => (
          <div
            key={name}
            className={`relative z-30 lg:w-[50vw] w-[350px] lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${rotation}`}
          >
            <img
              src={`/images/${color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />

            <img
              src={`/images/${color}-drink.webp`}
              alt=""
              className="drinks"
            />

            <img
              src={`/images/${color}-elements.webp`}
              alt=""
              className="elements"
            />

            <h1>{name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
