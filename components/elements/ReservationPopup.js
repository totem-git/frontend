import Image from "next/image"
import ReservationForm from "./ReservationForm"
import { useLockBodyScroll } from "utils/hooks"
import FooterReviews from "./FooterReviews"
import RatingStars from "./RatingStars"

const ReservationPopup = ({ closeSelf, googleReviews }) => {
    useLockBodyScroll()

    return (
        <div className="flex flex-col justify-between items-stretch bg-black py-8 fixed inset-0 z-50 overflow-y-scroll">
            <div className="flex w-full max-w-md lg:max-w-7xl justify-end px-4 mx-auto">
                <button onClick={closeSelf} className="py-1 px-1">
                    <Image src="/icons/close-menu-icon.svg" width="36" height="36" />
                </button>
            </div>
            <div className="mx-auto max-w-md lg:max-w-7xl lg:w-full lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-stretch px-4 mx-auto lg:px-0 space-y-12 lg:space-y-0 lg:mt-4">
                    <div className="shrink-0 lg:w-1/2 text-gray-300 space-y-4 text-center lg:text-left lg:pr-16">
                        <h4 className="text-primary-600 text-4xl font-russo">Reservation</h4>
                        <p>Please tell us your dates and number of guests, and we will reach you to confirm the reservation.</p>
                        <div className="hidden lg:block">
                            <p className="text-primary-600 text-lg font-russo mt-14">GET IN TOUCH</p>
                            <div className="flex flex-col items-start mt-8 space-y-4 text-white">
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
                        </div>
                    </div>
                    <div className="shrink-0 lg:w-1/2 bg-black pb-8">
                        <ReservationForm />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center lg:hidden">
                <p className="text-primary-600 text-lg font-russo mt-14">GET IN TOUCH</p>
                <div className="flex flex-col items-center mt-8 space-y-4 text-white">
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
            </div>
            <div>
                <div className="container mt-12 lg:mt-0 overflow-x-hidden">
                    <div className="flex flex-col lg:flex-row text-primary-600 items-center lg:items-end lg:pl-8">
                        <h4 className="text-xl font-russo text-center"><a href="https://www.google.com/search?q=totem+resorts&oq=totem&aqs=chrome.1.69i57j35i19i39l2j0i512j46i512j69i61l3.1990j0j7&sourceid=chrome&ie=UTF-8">TOTEM RESORTS ON GOOGLE</a></h4>
                        <div className="flex items-start mt-4 lg:mt-0 lg:ml-8 lg:mb-0.5">
                            <span className="text-2xl leading-none tracking-widest font-russo mr-4">{googleReviews.totalRating}</span>
                            <RatingStars rating={googleReviews.totalRating} starSize="w-6 h-6" starSpacing="space-x-2" />
                        </div>
                    </div>
                    <h4 className="text-xl text-center lg:text-left text-primary-600 font-russo mt-8 lg:mt-2 mb-12 lg:mb-4 lg:pl-8">LAST 5 REVIEWS:</h4>
                    <FooterReviews reviews={googleReviews.reviews} />
                </div>
            </div>
        </div>
    )
}

export default ReservationPopup