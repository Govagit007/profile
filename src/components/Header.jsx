import React from "react";

const Header = () => {
  const scrollToComponent = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sty =
    "hover:text-neutral-200 cursor-pointer font-medium hover:scale-105 transition";

  return (
    <div
      style={{ backdropFilter: "blur(8px)" }}
      className="z-10 bg-transparent fixed w-full flex justify-center md:gap-20 gap-4 text-neutral-400 text-sm md:text-md  p-4  "
    >
      <div className={sty} onClick={() => scrollToComponent("main")}>
        Home
      </div>
      <div className={sty} onClick={() => scrollToComponent("career")}>
        About
      </div>
      <div className={sty} onClick={() => scrollToComponent("skills")}>
        Skills
      </div>
      <div className={sty} onClick={() => scrollToComponent("projects")}>
        Projects
      </div>
      <div className={sty} onClick={() => scrollToComponent("contact")}>
        Contact
      </div>
    </div>
  );
};

export default Header;
