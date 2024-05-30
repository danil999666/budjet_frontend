import { FC, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import img2 from "../../../../assets/moon.png";
import img3 from "../../../../assets/mountains_behind.png";
import img4 from "../../../../assets/mountains_front.png";
import img1 from "../../../../assets/stars.png";

const HeroSection: FC = () => {
  const starsRef = useRef<HTMLImageElement>(null);
  const moonRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const mountainBehindRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const stars = starsRef.current;
      const moon = moonRef.current;
      const text = textRef.current;
      const btn = btnRef.current;
      const mountainBeh = mountainBehindRef.current;

      if (stars && moon && text && btn && mountainBeh) {
        const value = window.scrollY;
        stars.style.left = value * 0.25 + "px";
        moon.style.top = value * 0.8 + "px";
        mountainBeh.style.top = value * 0.4 + "px";
        text.style.marginRight = value * 2.8 + "px";
        text.style.marginBottom = value * 1.5 + "px";
        btn.style.marginTop = value * 0.7 + "px";
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const moon = moonRef.current;
      const stars = starsRef.current;

      if (moon && stars) {
        const x = (window.innerWidth - e.clientX) / 50;
        const y = (window.innerHeight - e.clientY) / 50;
        moon.style.transform = `translate(${x}px, ${y}px)`;
        stars.style.transform = `translate(${-x}px, ${-y}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero-section">
      <img src={img1} id="stars" ref={starsRef} alt="Stars" />
      <img src={img2} id="moon" ref={moonRef} alt="Moon" />
      <img
        src={img3}
        id="mountains_behind"
        ref={mountainBehindRef}
        alt="Mountains Behind"
      />
      <img src={img4} id="mountains_front" alt="Mountains Front" />
      <h2 id="text" ref={textRef}>
        Money Fund
      </h2>
      <NavLink to={"/transactions"} id="btn" ref={btnRef}>
        Досліджувати
      </NavLink>
    </section>
  );
};

export default HeroSection;
