import Image from "next/image"
import Markdown from "react-markdown"
import { getStrapiMedia } from "utils/media"

const Variant6_Reverse = ({ data }) => {
    let picture = data.media[0]

    return (
        <section className="py-8 md:px-4 overflow-x-hidden bg-light-grey-blue">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 max-w-none xl:px-16 md:flex-col-reverse">
                <div className="relative flex-1 md:flex flex-row-reverse items-center w-full max-w-xl md:max-w-none md:mt-4">
                    <div className="w-full">
                        <Image src={getStrapiMedia(picture.url)} layout="responsive" objectPosition="center" objectFit="cover" width={picture.width} height={picture.height} />
                        <div className="hidden md:block mt-8 w-40">
                            <Image src="/icons/variant6_icon2.svg" layout="responsive" width={142} height={17} />
                        </div>
                    </div>
                    <div className="mt-8 md:w-2/3 lg:hidden">
                        <div className="md:hidden">
                            <Image src="/icons/variant6_icon2.svg" objectPosition="center" objectFit="cover" width={142} height={17} />
                        </div>
                        <div className="hidden md:block p-12">
                            <Image src={data.extraIcon ? getStrapiMedia(data.extraIcon.url) : '/icons/variant6_icon_1.svg'} width={300} height={100} />
                        </div>
                    </div>
                </div>
                <div className="container relative flex-1 lg:min-w-[65ch] mt-auto space-y-4 sm:pl-2 lg:pl-6 lg:pr-0">
                    <div className="prose md:mx-auto md:max-w-none text-gray-700">
                        <Markdown>{data.text}</Markdown>
                    </div>
                    <div className="mt-8 md:hidden lg:block">
                        <Image src={data.extraIcon ? getStrapiMedia(data.extraIcon.url) : '/icons/variant6_icon_1.svg'} width={148} height={26} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Variant6_Reverse