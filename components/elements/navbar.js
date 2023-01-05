import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { getButtonAppearance } from "utils/button";
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "utils/types";
import MobileNavMenu from "./mobile-nav-menu";
import ButtonLink from "./button-link";
import Image from "next/image";
import CustomLink from "./custom-link";
// import LocaleSwitch from "../locale-switch";
import { throttle } from "utils/performance";
import ArrowDownIcon from "../SVGicons/arrow-down";
import { sendEvent, useGAEventEffect } from "utils/gtag";

const Navbar = ({ navbar, pageContext }) => {
  const router = useRouter();

  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false);

  const currentPage = `/${pageContext.slug}`;

  const [scrolledDown, setScrolledDown] = useState(false);
  const scrollDistance = 200;

  useEffect(() => {
    setScrolledDown(window.scrollY > scrollDistance);

    let eventHandler = throttle(() => {
      setScrolledDown(window.scrollY > scrollDistance);
    }, 1000);

    window.addEventListener("scroll", eventHandler);
    return () => {
      window.removeEventListener("scroll", eventHandler);
    };
  }, []);

  useEffect(() => {
    if (pageContext.slug.includes("lodging"))
      sendEvent({
        action: "view-lodge",
        category: "view",
        label: pageContext.slug.replace("lodging/", ""),
      });
  }, [pageContext.slug]);

  return (
    <>
      {/* The actual navbar */}
      <nav
        className={`flex bg-gradient-black-to-b ${
          scrolledDown ? "bg-black" : "bg-black/0"
        } trans fixed inset-x-0 top-0 z-50 h-20 transition duration-1000 2xl:h-32`}
      >
        <div className="mx-4 flex grow flex-row justify-between lg:mx-8 2xl:mx-16">
          {/* Content aligned to the left */}
          <div className="flex grow flex-row justify-between">
            <Link href="/">
              <a className="inline-flex items-center font-basker text-xl text-primary-600 md:text-base lg:text-2xl 2xl:text-[1.4vw] 2xl:tracking-wider">
                TOTEM RESORTS
              </a>
            </Link>
            {/* List of links on desktop */}
            <ul className="ml-6 mr-4 hidden list-none flex-row lg:mr-8 lg:flex xl:mr-16 2xl:mr-[5vw] 2xl:gap-[1.8vw]">
              {navbar.links.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`group relative flex items-center ${
                    navLink.url == currentPage && "border-b-2 border-white"
                  }`}
                >
                  <CustomLink link={navLink} locale={router.locale}>
                    <div className="relative flex items-center px-2 py-8 text-xs uppercase text-primary-600 hover:text-primary-300 lg:text-[1.1vw] lg:font-medium 2xl:text-[1vw]">
                      {navLink.label}
                      {!!navLink.children.length && (
                        <div className="ml-1 w-3 2xl:ml-2">
                          <ArrowDownIcon />
                        </div>
                      )}
                    </div>
                  </CustomLink>
                  {!!navLink.children.length && (
                    <div className="invisible absolute top-3/4 left-1/2 flex w-max min-w-[150px] -translate-x-1/2 flex-col items-center bg-black opacity-0 transition-all group-hover:visible group-hover:top-full group-hover:opacity-100">
                      {navLink.children.map((sublink) => (
                        <CustomLink
                          key={sublink.id}
                          link={sublink}
                          locale={router.locale}
                        >
                          <div className="px-6 py-4 text-center text-xs uppercase text-primary-600 hover:text-primary-300 lg:text-[1vw] lg:font-medium 2xl:text-[.9vw]">
                            {sublink.label}
                          </div>
                        </CustomLink>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            {/* Locale Switch Mobile */}
            {/* {pageContext.localizedPaths.length > 0 && (
              <div className="lg:hidden">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )} */}
            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className="flex lg:hidden"
            >
              <Image width="64" height="40" src="/icons/menu-icon.svg" />
            </button>
            {/* CTA button on desktop */}
            {navbar.button && (
              <>
                <div className="hidden lg:block 2xl:hidden">
                  <ButtonLink
                    button={navbar.button}
                    appearance={getButtonAppearance(navbar.button.type, "dark")}
                    compact
                    size="text-xs lg:text-base"
                  />
                </div>
                <div className="hidden 2xl:block">
                  <ButtonLink
                    button={navbar.button}
                    appearance={getButtonAppearance(navbar.button.type, "dark")}
                    size="text-xs lg:text-base 2xl:text-[1vw]"
                  />
                </div>
              </>
            )}
            {/* Locale Switch Desktop */}
            {/* {pageContext.localizedPaths.length > 0 && (
              <div className="hidden lg:block">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )} */}
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu panel */}
      {mobileMenuIsShown && (
        <MobileNavMenu
          navbar={navbar}
          closeSelf={() => setMobileMenuIsShown(false)}
        />
      )}
    </>
  );
};

Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: PropTypes.shape({
      image: mediaPropTypes,
      url: PropTypes.string,
    }),
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  initialLocale: PropTypes.string,
};

export default Navbar;
