import PropTypes from "prop-types";
import {
  mediaPropTypes,
  linkPropTypes,
  buttonLinkPropTypes,
} from "utils/types";
import { useLockBodyScroll } from "utils/hooks";
import { getButtonAppearance } from "utils/button";
import ButtonLink from "./button-link";
import Image from "next/image";
import CustomLink from "./custom-link";

const MobileNavMenu = ({ navbar, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll();

  return (
    <div className="fixed inset-0 z-50 overflow-y-scroll bg-black pb-6 text-white lg:hidden">
      <div className="flex h-full flex-col px-6">
        {/* Top section */}
        <div className="flex h-20 shrink-0 flex-row items-center justify-between">
          {/* Company logo */}
          <a className="font-basker text-xl text-primary-600">TOTEM RESORTS</a>
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <Image src="/icons/close-menu-icon.svg" width="20" height="20" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="mx-auto mt-8 mb-auto flex w-full flex-col items-center pb-24">
          <ul className="mb-10 flex list-none flex-col items-baseline text-lg font-extrabold tracking-wider">
            {navbar.links.map((navLink) => (
              <li onClick={closeSelf} key={navLink.id} className="block w-full">
                <CustomLink link={navLink}>
                  <div className="py-3 text-center uppercase text-primary-600 hover:text-primary-300">
                    <span>{navLink.text}</span>
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>

          <span className="block w-full sm:w-80" onClick={closeSelf}>
            {navbar.button && (
              <ButtonLink
                button={navbar.button}
                appearance={getButtonAppearance(navbar.button.type, "dark")}
                size="text-lg"
                wFull
              />
            )}
          </span>

          <p className="mt-20 font-russo text-lg text-primary-600">
            CONTACT US
          </p>
          <div className="mt-8 flex flex-col items-center space-y-4">
            <a href="tel:1800668683" className="flex items-center">
              <Image src="/icons/phone-icon.svg" width="18" height="18" />
              <span className="ml-2">Phone: 1-800-66-TOTEM</span>
            </a>
            <a
              href="mailto:reservations@totemresorts.com"
              target={"_blank"}
              className="flex items-center"
            >
              <Image src="/icons/mail-icon.svg" width="18" height="18" />
              <span className="ml-2">Email: reservations@totemresorts.com</span>
            </a>
            <a
              href="mailto:info@totemresorts.com"
              target={"_blank"}
              className="flex items-center"
            >
              <Image src="/icons/mail-icon.svg" width="18" height="18" />
              <span className="ml-2">Email: info@totemresorts.com</span>
            </a>
          </div>
          {/* <div className="flex gap-12 mt-32">
            <a onClick={closeSelf} href="#">
              <Image src="/icons/ig-icon.svg" width="40" height="40" />
            </a>
            <a onClick={closeSelf} href="#">
              <Image src="/icons/fb-icon.svg" width="40" height="40" />
            </a>
            <a onClick={closeSelf} href="#">
              <Image src="/icons/yt-icon.svg" width="40" height="40" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

MobileNavMenu.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  closeSelf: PropTypes.func,
};

export default MobileNavMenu;
