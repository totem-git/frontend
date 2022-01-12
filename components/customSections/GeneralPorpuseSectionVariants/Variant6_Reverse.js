import Image from "next/image"
import Markdown from "react-markdown"
import { getStrapiMedia } from "utils/media"

const Variant6_Reverse = ({ data }) => {
    let picture = data.media[0]

    return (
        <section className="py-8 overflow-x-hidden bg-light-grey-blue">
            <div className="container flex flex-col items-center max-w-md space-y-4 max-w-none xl:px-16 md:flex-row-reverse">
                <div className="relative flex-1 w-full p-4 max-w-xl">
                    <Image src={getStrapiMedia(picture.url)} layout="responsive" width={picture.width} height={picture.height} />
                    <div className="mt-8">
                        <Image src="/icons/variant6_icon2.svg" objectPosition="center" objectFit="cover" width={142} height={17} />
                    </div>
                </div>
                <div className="relative lg:min-w-[65ch] mt-auto flex-1 space-y-4 sm:pl-2 lg:pr-16">
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

export default Variant6_Reverse