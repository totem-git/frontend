import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "utils/types"
import Image from "next/image"
import CustomLink from "./custom-link"
import RatingStars from "./RatingStars"
import FooterReviews from "./FooterReviews"
import ButtonLink from "./button-link"

const Footer = ({ footer, googleReviews }) => {
  return (
    <footer className="bg-black text-white">
      <div className="flex items-center my-14">
        <div className="flex-grow">
          <div className="hidden lg:block separator-fish h-4 mx-3"></div>
        </div>
        <div className="w-auto px-8 flex flex-col items-center">
          <h3 className="text-primary-600 font-basker text-4xl font-thin mb-8 text-center">TOTEM RESORTS</h3>
          <Image src="/icons/icon-1.svg" width="20" height="20" />
          <p className="text-center mt-4">{footer.text}</p>
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
        className="w-full h-96 lg:container"
      >
      </iframe>
      <div className="container mt-12 overflow-x-hidden">
        <div className="flex flex-col text-primary-600 items-center">
          <h4 className="text-2xl font-russo text-center"><a href="https://www.google.com/search?q=totem+resorts&oq=totem&aqs=chrome.1.69i57j35i19i39l2j0i512j46i512j69i61l3.1990j0j7&sourceid=chrome&ie=UTF-8">TOTEM RESORTS ON GOOGLE</a></h4>
          <div className="flex items-start mt-4">
            <span className="text-3xl leading-none tracking-widest font-russo mr-4">{googleReviews.totalRating}</span>
            <RatingStars rating={googleReviews.totalRating} starSize="w-7 h-7" starSpacing="space-x-2" />
          </div>
        </div>
        <h4 className="text-2xl text-center text-primary-600 font-russo mt-8 mb-12">LAST 5 REVIEWS:</h4>
        <FooterReviews reviews={googleReviews.reviews} />
      </div>
      <div className="container flex flex-col mt-16">
        <nav className="flex flex-wrap flex-row items-start lg:justify-between mb-10">
          <div
            className="mt-10 pr-6 lg:pr-0 lg:mt-0 w-full sm:w-6/12 sm:pl-[10%] lg:pl-0 lg:w-auto"
          >
            <p className="text-primary-600 font-russo text-xl tracking-wide font-semibold">
              Contact
            </p>
            <ul className="mt-2">
              <li
                className="text-gray-100 py-2 px-1 -mx-1 hover:text-gray-400"
              >
                <CustomLink link={{
                  url: "#"
                }}
                >
                  Tel: Tel: +00 23 2 343 32
                </CustomLink>
              </li>
              <li
                className="text-gray-100 py-2 px-1 -mx-1 hover:text-gray-400"
              >
                <CustomLink link={{
                  url: "#"
                }}
                >
                  Email: e-comerce@totemresort.com
                </CustomLink>
              </li>
              <li
                className="text-gray-100 py-2 px-1 -mx-1 hover:text-gray-400"
              >
                <CustomLink link={{
                  url: "#"
                }}
                >
                  Email: info@totemresort.com
                </CustomLink>
              </li>
            </ul>
            <div className="hidden lg:flex flex-col mt-8">
              <p className="text-primary-600 font-russo text-xl tracking-wide font-semibold">
                Follow Us
              </p>
              <div className="flex gap-2">
                <a href="https://www.instagram.com/totemresorts/" className="p-4 pl-0">
                  <Image src="/icons/ig-icon.svg" width="40" height="40" />
                </a>
                <a href="https://www.facebook.com/TotemLodge/" className="p-4">
                  <Image src="/icons/fb-icon.svg" width="40" height="40" />
                </a>
                <a href="https://www.youtube.com/channel/UCpqUq6jJy2rd2GQdOPyDQ9Q" className="p-4">
                  <Image src="/icons/yt-icon.svg" width="40" height="40" />
                </a>
                <a href="https://twitter.com/TotemResorts" className="p-4">
                  <Image src="/icons/twitter-icon.png" width="40" height="40" />
                </a>
              </div>
            </div>
          </div>
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn.id}
              className="mt-10 pr-6 odd:pr-0 sm:even:pr-0 sm:odd:pr-6 lg:!pr-0 lg:mt-0 w-6/12 sm:pl-[10%] lg:pl-0 lg:w-auto"
            >
              <p className="text-primary-600 font-russo text-xl tracking-wide font-semibold">
                {footerColumn.title}
              </p>
              <ul className="mt-2">
                {footerColumn.links.map((link) => (
                  <li
                    key={link.id}
                    className="text-gray-100 py-2 px-1 -mx-1 hover:text-gray-400"
                  >
                    <CustomLink link={link}>{link.text}</CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="container flex lg:hidden flex-col items-center">
        <p className="text-primary-600 uppercase font-russo tracking-wide font-semibold">
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
      <div className="px-4">
        <ButtonLink
          button={{
            url: '#reservationForm',
            text: 'RESERVATIONS',
          }}
          appearance="white"
          wFull
        />
      </div>
      <div className="flex justify-center mt-12">
        <RatingStars rating={5} starSize="w-8" starSpacing="space-x-4" />
      </div>
      <div className="border-t-[1px] border-gray-600 mt-16 mx-4 lg:mt-10 py-12 text-sm text-center text-gray-500">
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum in aliquid ullam vitae assumenda mollitia repudiandae eos! Est veritatis unde in temporibus? Dolores minus quos, impedit ab reprehenderit velit recusandae quam cupiditate odit est aspernatur eaque quas debitis? Numquam itaque reiciendis unde perferendis commodi voluptates officia porro nesciunt quidem.</div>
        <div className="mt-4">{footer.smallText}</div>
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
