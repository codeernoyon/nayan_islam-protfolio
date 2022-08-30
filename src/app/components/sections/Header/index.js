import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineDownload,
  AiOutlineMenu,
} from "react-icons/ai";
import { Events, Link, scrollSpy } from "react-scroll";
import { headerAnimation } from "../../../animation";
import { HEADER, HERO } from "../../../data";
import { Button, SocialIcons } from "../../elements";

function Header() {
  const { button } = HERO;
  const [opened, setOpened] = useState(false);
  const [navbarSticky, setNavbarSticky] = useState(false);

  const { logo, menus } = HEADER;
  const { headerAnim } = headerAnimation;

  const nav = () =>
    window.scrollY > 20 ? setNavbarSticky(true) : setNavbarSticky(false);

  useEffect(() => {
    // add event listener for scroll (react-scroll)
    Events.scrollEvent.register("begin");
    Events.scrollEvent.register("end");
    scrollSpy.update();
    window.addEventListener("scroll", nav);

    return () => {
      // remove event listener for scroll to unsubscribe
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", nav);
    };
  }, []);

  return (
    <motion.header
      initial={headerAnim.start}
      animate={headerAnim.end}
      className={`z-[999] w-full bg-slate-800 md:bg-transparent text-slate-200 fixed top-0 shadow-md sm:py-4 py-2.5 ${
        navbarSticky && "NavBar__sticky"
      }`}
    >
      <div className="relative container flex flex-wrap items-center justify-between">
        {/* ==== Logo ==== */}
        <a href="/">
          {logo.src ? (
            <img src={logo.src} className="h-12" alt="logo" />
          ) : (
            <h3 className="text-3xl font-Poppins font-medium text-primary-color">
              {logo.alt}
            </h3>
          )}
        </a>
        {/* ==== Burger Menu ==== */}
        <span className="md:hidden">
          <div
            className="cursor-pointer text-white"
            onClick={() => setOpened((o) => !o)}
          >
            {!opened ? (
              <div className="transition-all duration-500 ease-in-out ">
                <AiOutlineMenu size={29} />
              </div>
            ) : (
              <div className="transition-all duration-500 ease-in-out outline-none">
                <AiOutlineClose size={29} />
              </div>
            )}
          </div>
        </span>
        {/* ==== Menus ==== */}
        <div
          className={`${
            !opened &&
            "absolute bg-teal-700 right-[-780px] md:right-0 transition-all duration-500 ease-in-out "
          } absolute top-[55px] right-0 bg-slate-800 md:relative md:top-0  z-[998] justify-center  md:justify-between items-center w-screen h-screen md:h-auto  flex md:flex md:w-auto md:order-1 md:bg-transparent transition-all duration-1000 ease-in-out`}
          id="mobile-menu-4"
        >
          <nav className="relative top-[-60px] md:top-0 flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium">
            {menus.map((link, index) => {
              return (
                <Link
                  activeClass="NavBar__active_menu"
                  key={index}
                  className={`NavBar__menu menu`}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setOpened((o) => !o)}
                >
                  {link.name}
                </Link>
              );
            })}
            {!opened ? (
              <>
                <SocialIcons />
                <Button href={button.url} className="md:hidden">
                  {button.text}
                  <AiOutlineDownload className="block md:hidden" />
                </Button>
              </>
            ) : (
              <>
                <SocialIcons />
                <Button href={button.url} className="md:hidden">
                  {button.text}
                  <AiOutlineDownload className="ml-1 text-lg" />
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
