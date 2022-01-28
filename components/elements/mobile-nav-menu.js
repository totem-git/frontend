import PropTypes from "prop-types"
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types"
import { useLockBodyScroll } from "utils/hooks"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "./button-link"
import Image from "next/image"
import CustomLink from "./custom-link"

const MobileNavMenu = ({ navbar, closeSelf }) => {
  // Prevent window scroll while mobile nav menu is open
  useLockBodyScroll()

  return (
    <div className="fixed inset-0 overflow-y-scroll bg-black text-white pb-6 lg:hidden z-50">
      <div className="px-6 h-full flex flex-col">
        {/* Top section */}
        <div className="flex flex-row justify-between h-20 shrink-0 items-center">
          {/* Company logo */}
          <a className="text-primary-600 font-basker text-xl">
            TOTEM RESORTS
          </a>
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <Image src="/icons/close-menu-icon.svg" width="20" height="20" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col items-center w-full mx-auto mt-8 mb-auto pb-24">
          <ul className="flex flex-col list-none items-baseline text-lg tracking-wider font-extrabold mb-10">
            {navbar.links.map((navLink) => (
              <li onClick={closeSelf} key={navLink.id} className="block w-full">
                <CustomLink link={navLink}>
                  <div className="text-primary-600 hover:text-primary-300 uppercase py-3 text-center">
                    <span>{navLink.text}</span>
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>

          <span className="block w-full sm:w-80" onClick={closeSelf}>
            {navbar.button && (<ButtonLink
              button={navbar.button}
              appearance={getButtonAppearance(navbar.button.type, "dark")}
              size="text-lg"
              wFull
            />)}
          </span>

          <p className="text-primary-600 text-lg font-russo mt-20">GET IN TOUCH</p>
          <div className="flex flex-col items-center mt-8 space-y-4">
            <a href="#" className="flex items-center">
              <Image src="/icons/whatsapp-icon.svg" width="18" height="18" />
              <span className="ml-2">WhatsAap: +00 23 2 343 32</span>
            </a>
            <a href="#" className="flex items-center">
              <Image src="/icons/phone-icon.svg" width="18" height="18" />
              <span className="ml-2">Tel: +00 23 2 343 32</span>
            </a>
            <a href="#" className="flex items-center">
              <Image src="/icons/mail-icon.svg" width="18" height="18" />
              <span className="ml-2">Email: e-comerce@totemresort.com</span>
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
  )
}

MobileNavMenu.propTypes = {
  navbar: PropTypes.shape({
    logo: mediaPropTypes,
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  closeSelf: PropTypes.func,
}

export default MobileNavMenu
