import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import '../fonts.css';
import LogoIcon from '../assets/x-house-logo.svg';


const Link = ({ page, selectedPage, setSelectedPage,externalLink }) => {
  const lowerCasePage = page.toLowerCase();

  if (externalLink){
    return (
      <a
        className={`${
          selectedPage === lowerCasePage ? "text-primary-yellow" : ""
        } hover:text-yellow transition duration-500`}
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {page}
      </a>
    );
  }
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-yellow" : ""
      } hover:text-primary-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        {/* <h4 className="font-custom text-3xl font-bold">X House</h4> */}
        <img src={LogoIcon} alt="X House Logo" className="h-5 w-auto" />

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-averia text-xl font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Learning Center"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              externalLink="https://learn.houseofx.co"
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-primary-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 font-averia h-full bg-primary-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[13%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Learning Center"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                externalLink="https://learn.houseofx.co"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
