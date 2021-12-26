import { useState } from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import { useRouter } from "next/router"
import { getButtonAppearance } from "utils/button"
import { mediaPropTypes, linkPropTypes, buttonLinkPropTypes } from "utils/types"
import MobileNavMenu from "./mobile-nav-menu"
import ButtonLink from "./button-link"
import Image from "next/image"
import CustomLink from "./custom-link"
import LocaleSwitch from "../locale-switch"

const Navbar = ({ navbar, pageContext }) => {
  const router = useRouter()
  const [mobileMenuIsShown, setMobileMenuIsShown] = useState(false)
  const currentPage = `/${pageContext.slug}`

  return (
    <>
      {/* The actual navbar */}
      <nav className="flex bg-black h-20 fixed top-0 inset-x-0 z-50">
        <div className="grow mx-6 lg:mx-12 xl:container flex flex-row justify-between">
          {/* Content aligned to the left */}
          <div className="flex flex-row justify-between grow">
            <Link href="/">
              <a className="inline-flex items-center text-primary-600 font-javanese text-xl lg:text-2xl h-20 pt-[6px]">
                TOTEM RESORTS
              </a>
            </Link>
            {/* List of links on desktop */}
            <ul className="hidden list-none md:flex flex-row gap-4 ml-10 mr-6 lg:mr-12 xl:mr-24">
              {navbar.links.map((navLink) => (
                <li key={navLink.id} className={`flex items-center ${navLink.url == currentPage && 'border-b-2 border-white'}`}>
                  <CustomLink link={navLink} locale={router.locale}>
                    <div className="text-primary-600 hover:text-primary-300 text-xs lg:text-base px-2 py-1">
                      {navLink.text}
                    </div>
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            {/* Locale Switch Mobile */}
            {pageContext.localizedPaths.length > 0 && (
              <div className="md:hidden">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )}
            {/* Hamburger menu on mobile */}
            <button
              onClick={() => setMobileMenuIsShown(true)}
              className="flex md:hidden"
            >
              <Image width="64" height="40" src="/icons/menu-icon.svg" />
            </button>
            {/* CTA button on desktop */}
            {navbar.button && (
              <div className="hidden md:block">
                <ButtonLink
                  button={navbar.button}
                  appearance={getButtonAppearance(navbar.button.type, "dark")}
                  compact
                  size="text-xs lg:text-base"
                />
              </div>
            )}
            {/* Locale Switch Desktop */}
            {pageContext.localizedPaths.length > 0 && (
              <div className="hidden md:block">
                <LocaleSwitch pageContext={pageContext} />
              </div>
            )}
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
  )
}

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
}

export default Navbar
