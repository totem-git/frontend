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
    <div className="fixed inset-0 overflow-y-scroll bg-black text-white pb-6 md:hidden z-50">
      <div className="container h-full flex flex-col">
        {/* Top section */}
        <div className="flex flex-row justify-between h-20 items-center">
          {/* Company logo */}
          <a className="text-primary-600 font-javanese text-2xl h-4">
            TOTEM RESORTS
          </a>
          {/* Close button */}
          <button onClick={closeSelf} className="py-1 px-1">
            <Image src="/icons/close-menu-icon.svg" width="36" height="36" />
          </button>
        </div>
        {/* Bottom section */}
        <div className="flex flex-col items-center w-9/12 mx-auto mt-auto mb-auto pb-24">
          <ul className="flex flex-col list-none items-baseline text-2xl mb-10">
            {navbar.links.map((navLink) => (
              <li onClick={closeSelf} key={navLink.id} className="block w-full">
                <CustomLink link={navLink}>
                  <div className="text-primary-600 hover:text-primary-300 uppercase py-6 text-center">
                    <span>{navLink.text}</span>
                  </div>
                </CustomLink>
              </li>
            ))}
          </ul>

          <span onClick={closeSelf}>
            {navbar.button && (<ButtonLink
              button={navbar.button}
              appearance={getButtonAppearance(navbar.button.type, "dark")}
              size="text-2xl"
            />)}
          </span>

          <div className="flex gap-12 mt-32">
            <a onClick={closeSelf} href="#">
              <Image src="/icons/ig-icon.svg" width="40" height="40" />
            </a>
            <a onClick={closeSelf} href="#">
              <Image src="/icons/fb-icon.svg" width="40" height="40" />
            </a>
            <a onClick={closeSelf} href="#">
              <Image src="/icons/yt-icon.svg" width="40" height="40" />
            </a>
          </div>
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
