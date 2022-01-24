import Image from "next/image"
import Markdown from "react-markdown"
import { getStrapiMedia } from "utils/media"

const Variant6_Reverse = ({ data }) => {
    let picture = data.media[0]

    return (
        <section className="py-8 overflow-x-hidden bg-light-grey-blue">
            <div className="flex flex-col items-center space-y-4 max-w-none xl:px-16 md:flex-row-reverse">
                <div className="relative flex-1 w-full max-w-xl">
                    <Image src={getStrapiMedia(picture.url)} layout="responsive" width={picture.width} height={picture.height} />
                    <div className="mt-8">
                        <Image src="/icons/variant6_icon2.svg" objectPosition="center" objectFit="cover" width={142} height={17} />
                    </div>
                </div>
                <div className="container relative lg:min-w-[65ch] mt-auto flex-1 space-y-4 sm:pl-2 lg:pr-16">
                    <div className="prose text-gray-700">
                        <Markdown>{data.text}</Markdown>
                    </div>
                    <div className="mt-8">
                        <Image src={data.extraIcon ? getStrapiMedia(data.extraIcon.url) : '/icons/variant6_icon_1.svg'} width={148} height={26} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Variant6_Reverse