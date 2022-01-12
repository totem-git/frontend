import Image from "next/image"
import Markdown from "react-markdown"
import { getStrapiMedia } from "utils/media"

const Variant6 = ({ data }) => {
    let picture = data.media[0]

    return (
        <section className="py-8 overflow-x-hidden bg-light-grey-blue">
            <div className="container flex flex-col items-center space-y-4 max-w-none xl:px-16 md:flex-row">
                <div className="relative flex-1 w-full p-4 max-w-xl">
                    <Image src={getStrapiMedia(picture.url)} layout="responsive" objectPosition="center" objectFit="cover" width={picture.width} height={picture.height} />
                    <div className="mt-8">
                        <Image src="/icons/variant6_icon2.svg" width={142} height={17} />
                    </div>
                </div>
                <div className="relative flex-1 lg:min-w-[65ch] space-y-4 sm:pl-2 lg:pl-16">
                    <div className="prose text-gray-700">
                        <Markdown>{data.text}</Markdown>
                    </div>
                    <div className="mt-8">
                        <Image src="/icons/variant6_icon.svg" width={74} height={13} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Variant6