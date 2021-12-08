import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "utils/types"
import Image from "next/image"
import CustomLink from "./custom-link"

const Footer = ({ footer }) => {
  return (
    <footer className="bg-black text-white">
      <div className="lg:hidden separator-fish h-8 mx-3 my-8"></div>
      <div className="flex items-center my-14">
        <div className="flex-grow">
          <div className="hidden lg:block separator-fish h-4 mx-3"></div>
        </div>
        <div className="w-auto px-16 flex flex-col items-center">
          <h3 className="text-primary-600 font-roboto text-4xl font-thin mb-4">TOTEM RESORT</h3>
          <Image src="/icons/icon-1.svg" width="20" height="20" />
        </div>
        <div className="flex-grow">
          <div className="hidden lg:block separator-fish separator-fish-rtl h-4 mx-3"></div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20757.144018051353!2d-94.07117138538783!3d49.43456295538341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52bdc8c17cf2d2d1%3A0xe2a8eda273c4c7f3!2sTotem%20Resorts!5e0!3m2!1sen!2sfr!4v1638831008782!5m2!1sen!2sfr"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        className="w-full h-96"
      >
      </iframe>
      <div className="container">
        <div
          className="mt-10"
        >
          <p className="text-primary-600 uppercase tracking-wide font-semibold">
            Contact
          </p>
          <ul className="mt-2">
            <li
              className="text-gray-100 py-1 px-1 -mx-1 hover:text-gray-400"
            >
              <CustomLink link={{
                url: "#"
              }}
              >
                Tel: Tel: +00 23 2 343 32
              </CustomLink>
            </li>
            <li
              className="text-gray-100 py-1 px-1 -mx-1 hover:text-gray-400"
            >
              <CustomLink link={{
                url: "#"
              }}
              >
                Email: e-comerce@totemresort.com
              </CustomLink>
            </li>
            <li
              className="text-gray-100 py-1 px-1 -mx-1 hover:text-gray-400"
            >
              <CustomLink link={{
                url: "#"
              }}
              >
                Email: info@totemresort.com
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10">
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 lg:mt-0 w-6/12 lg:w-auto"
            >
              <p className="text-primary-600 uppercase tracking-wide font-semibold">
                {footerColumn.title}
              </p>
              <ul className="mt-2">
                {footerColumn.links.map((link) => (
                  <li
                    key={link.id}
                    className="text-gray-100 py-1 px-1 -mx-1 hover:text-gray-400"
                  >
                    <CustomLink link={link}>{link.text}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="container flex flex-col items-center">
        <p className="text-primary-600 uppercase tracking-wide font-semibold">
          Follow Us
        </p>
        <div className="flex gap-9 mt-4">
          <a href="#" className="p-4">
            <Image src="/icons/ig-icon.svg" width="40" height="40" />
          </a>
          <a href="#" className="p-4">
            <Image src="/icons/fb-icon.svg" width="40" height="40" />
          </a>
          <a href="#" className="p-4">
            <Image src="/icons/yt-icon.svg" width="40" height="40" />
          </a>
        </div>
      </div>
      <div className="lg:hidden separator-fish h-8 mx-3 my-8"></div>
      <div className="border-t-2 border-gray-400 mt-24 py-12 text-sm text-center text-gray-700">
        <div className="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum in aliquid ullam vitae assumenda mollitia repudiandae eos! Est veritatis unde in temporibus? Dolores minus quos, impedit ab reprehenderit velit recusandae quam cupiditate odit est aspernatur eaque quas debitis? Numquam itaque reiciendis unde perferendis commodi voluptates officia porro nesciunt quidem.</div>
        <div className="container mt-4">{footer.smallText}</div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
}

export default Footer
