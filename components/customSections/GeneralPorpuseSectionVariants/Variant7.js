import HighlightedText from "@/components/elements/HighlightedText"
import Image from "next/image"
import { getStrapiMedia } from "utils/media"

const Variant7 = ({ data }) => {
    return (
        <section className="py-8 overflow-x-hidden bg-black p-4 md:p-8 lg:p-16">
            <div className="flex justify-center items-start">
                <div className="flex justify-center md:w-1/3">
                    <Image src="/icons/image 1.png" width="1173" height="117" />
                </div>
                <div className="justify-center hidden md:flex w-1/3">
                    <Image src="/icons/subtitle-figure.svg" width="100" height="20" />
                </div>
                <div className="justify-center hidden md:flex w-1/3 h-32" style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,.4), transparent 2px)",
                    backgroundSize: "7px 7px",
                }}>

                </div>
            </div>
            <HighlightedText
                text={data.title}
                tag="h4"
                className="text-4xl font-russo text-center text-white leading-tight mt-8 max-w-3xl mx-auto"
                highlightClasses={[
                    'text-highlight before:bg-primary-600 before:-right-6 before:-bottom-2',
                ]}
            />
            <div className="mt-16 lg:mt-24 flex justify-between max-w-md mx-auto">
                <div>
                    <Image src={getStrapiMedia(data.extraIcon.url)} width={data.extraIcon.width} height={data.extraIcon.height} />
                </div>
                <div className="">
                    <Image src={getStrapiMedia(data.extraIcon.url)} width={data.extraIcon.width} height={data.extraIcon.height} />
                </div>
                <div className="">
                    <Image src={getStrapiMedia(data.extraIcon.url)} width={data.extraIcon.width} height={data.extraIcon.height} />
                </div>
                <div className="">
                    <Image src={getStrapiMedia(data.extraIcon.url)} width={data.extraIcon.width} height={data.extraIcon.height} />
                </div>
            </div>
        </section>
    )
}

export default Variant7