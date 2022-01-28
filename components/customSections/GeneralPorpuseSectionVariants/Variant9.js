import Image from "next/image"
import Markdown from "react-markdown"
import { getStrapiMedia } from "utils/media"
import ButtonLink from '@/components/elements/button-link'
import { getButtonAppearance } from '../../../utils/button'

const Variant9 = ({ data }) => {
    let picture = data.media[0]

    return (
        <section className="pt-10 pb-8 overflow-x-hidden bg-light-grey-blue">
            <div className="container flex flex-col items-center space-y-4 max-w-none xl:px-16 lg:flex-row">
                <div className="relative flex-1 w-full p-4 max-w-xl hidden lg:block">
                    <Image src={getStrapiMedia(picture.url)} layout="responsive" objectPosition="center" objectFit="cover" width={picture.width} height={picture.height} />
                    <div className="mt-8">
                        <Image src="/icons/variant6_icon2.svg" width={142} height={17} />
                    </div>
                </div>
                <div className="relative flex-1 lg:min-w-[65ch] space-y-4 lg:pl-16">
                    <h4 className="text-3xl font-russo font-medium text-center text-gray-600">{data.title}</h4>
                    <div className="prose text-gray-700 text-center leading-tight px-2">
                        <Markdown>{data.text}</Markdown>
                    </div>
                    <div className="pt-4 space-y-6 sm:flex flex-col items-center">
                        <Image src={data.extraIcon ? getStrapiMedia(data.extraIcon.url) : '/icons/variant6_icon_1.svg'} width={148} height={26} />
                        {data.CTAs.length > 0 && (
                            <div className="w-full sm:w-auto">
                                <ButtonLink
                                    button={data.CTAs[0]}
                                    appearance={getButtonAppearance(data.CTAs[0].type, 'light')}
                                    size="px-28"
                                    wFull
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Variant9