import Image from "next/image"
import ReservationForm from "./ReservationForm"
import { useLockBodyScroll } from "utils/hooks"

const ReservationPopup = ({ closeSelf }) => {
    useLockBodyScroll()

    return (
        <div className="flex flex-col justify-between items-stretch bg-black py-8 fixed inset-0 z-50 overflow-y-scroll">
            <div className="flex w-full max-w-md lg:max-w-6xl justify-end px-4 mx-auto">
                <button onClick={closeSelf} className="py-1 px-1">
                    <Image src="/icons/close-menu-icon.svg" width="36" height="36" />
                </button>
            </div>
            <div className="mx-auto max-w-md lg:max-w-6xl lg:px-16 border-gray-500 lg:border-b-2">
                <div className="flex flex-col lg:flex-row lg:items-center px-4 mx-auto lg:mx-4 lg:px-0 space-y-12">
                    <div className="shrink-0 lg:w-1/2 text-gray-300 space-y-4">
                        <h4 className="text-primary-600 text-4xl font-russo">Reservation</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore nisi sed voluptate animi magni, excepturi possimus tenetur fuga non. Iusto, voluptatibus? Alias dolorem porro quibusdam explicabo quo hic. Minus, non!</p>
                    </div>
                    <div className="shrink-0 lg:w-1/2 bg-black border-gray-500 border-b-2 pb-8 lg:border-b-0">
                        <ReservationForm />
                    </div>
                </div>
            </div>
            <div className="shrink-0 separator-fish h-4 mt-4"></div>
        </div>
    )
}

export default ReservationPopup