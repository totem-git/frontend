import Image from "next/image"
import ReservationForm from "./ReservationForm"
import { useLockBodyScroll } from "utils/hooks"
import FooterReviews from "./FooterReviews"
import RatingStars from "./RatingStars"

const ReservationPopup = ({ closeSelf, googleReviews }) => {
    useLockBodyScroll()

    return (
        <div className="flex flex-col justify-between items-stretch bg-black py-8 fixed inset-0 z-50 overflow-y-scroll">
            <div className="flex w-full max-w-md lg:max-w-6xl justify-end px-4 mx-auto">
                <button onClick={closeSelf} className="py-1 px-1">
                    <Image src="/icons/close-menu-icon.svg" width="36" height="36" />
                </button>
            </div>
            <div className="mx-auto max-w-md lg:max-w-6xl lg:px-16">
                <div className="flex flex-col lg:flex-row lg:items-center px-4 mx-auto lg:mx-4 lg:px-0 space-y-12">
                    <div className="shrink-0 lg:w-1/2 text-gray-300 space-y-4 text-center">
                        <h4 className="text-primary-600 text-4xl font-russo">Reservation</h4>
                        <p>Please tell us your dates and number of guests, and we will reach you to confirm the reservation.</p>
                    </div>
                    <div className="shrink-0 lg:w-1/2 bg-black pb-8">
                        <ReservationForm />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
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
                <div className="container mt-12 overflow-x-hidden">
                    <div className="flex flex-col text-primary-600 items-center">
                        <h4 className="text-xl font-russo text-center">TOTEM RESORTS ON GOOGLE</h4>
                        <div className="flex items-start mt-4">
                            <span className="text-2xl leading-none tracking-widest font-russo mr-4">{googleReviews.totalRating}</span>
                            <RatingStars rating={googleReviews.totalRating} starSize="w-6 h-6" starSpacing="space-x-2" />
                        </div>
                    </div>
                    <h4 className="text-xl text-center text-primary-600 font-russo mt-8 mb-12">LAST 5 REVIEWS:</h4>
                    <FooterReviews reviews={googleReviews.reviews} />
                </div>
            </div>
        </div>
    )
}

export default ReservationPopup