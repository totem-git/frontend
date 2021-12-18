import Image from "next/image"
import PropTypes from "prop-types"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import LinkArrowIcon from "../SVGicons/link-arrow"

const CardsList = ({ data }) => {
    return (
        <div className="container flex flex-col items-center space-y-8 py-20">
            <div className="bg-white max-w-md">
                <div className="h-64 overflow-hidden relative">
                    <Image src="/imgs/iPhone 6-7-8 Plus - 1-image2.jpg" objectFit="cover" layout="fill" />
                </div>
                <div className="h-6 bg-black"></div>
                <div className="px-8 py-10 flex flex-col space-y-5">
                    <h4 className="text-primary-600 text-3xl font-bold font-russo">Lorem ipsum</h4>
                    <p className="text-gray-700 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe rem esse beatae temporibus, praesentium facere vel aliquid cupiditate, autem eos molestiae architecto nemo. Aperiam, possimus ipsa. At.</p>
                    <ButtonLink
                        button={{
                            url: '#',
                            text: 'Catch a fish',
                            icon: LinkArrowIcon
                        }}
                        appearance={getButtonAppearance('primary', 'light')}
                    />
                </div>
            </div>
            <div className="bg-white max-w-md">
                <div className="h-64 overflow-hidden relative">
                    <Image src="/imgs/iPhone 6-7-8 Plus - 1-image3.jpg" objectFit="cover" layout="fill" />
                </div>
                <div className="h-6 bg-black"></div>
                <div className="px-8 py-10 flex flex-col space-y-5">
                    <h4 className="text-primary-600 text-3xl font-bold font-russo">Lorem ipsum</h4>
                    <p className="text-gray-700 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe rem esse beatae temporibus, praesentium facere vel aliquid cupiditate, autem eos molestiae architecto nemo. Aperiam, possimus ipsa. At.</p>
                    <ButtonLink
                        button={{
                            url: '#',
                            text: 'Catch a fish',
                            icon: LinkArrowIcon
                        }}
                        appearance={getButtonAppearance('primary', 'light')}
                    />
                </div>
            </div>
            <div className="bg-white max-w-md">
                <div className="h-64 overflow-hidden relative">
                    <Image src="/imgs/iPhone 6-7-8 Plus - 1-image5.jpg" objectFit="cover" layout="fill" />
                </div>
                <div className="h-6 bg-black"></div>
                <div className="px-8 py-10 flex flex-col space-y-5">
                    <h4 className="text-primary-600 text-3xl font-bold font-russo">Lorem ipsum</h4>
                    <p className="text-gray-700 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum saepe rem esse beatae temporibus, praesentium facere vel aliquid cupiditate, autem eos molestiae architecto nemo. Aperiam, possimus ipsa. At.</p>
                    <ButtonLink
                        button={{
                            url: '#',
                            text: 'Catch a fish',
                            icon: LinkArrowIcon
                        }}
                        appearance={getButtonAppearance('primary', 'light')}
                    />
                </div>
            </div>
        </div>
    )
}

CardsList.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string,
    }),
}

export default CardsList