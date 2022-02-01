import HighlightedText from "@/components/elements/HighlightedText"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { backgroundImage } from "tailwindcss/defaultTheme"
import { getStrapiMedia } from "utils/media"
import Separator from "../Separator"

const Variant7 = ({ data }) => {
    return (
        <section className="overflow-x-hidden bg-black md:p-8 lg:p-16">
            <div style={{
                backgroundImage: 'url("/icons/variant7-icon-1.svg")',
                backgroundRepeat: 'repeat-x',
                backgroundSize: 'auto 100%',
                backgroundPosition: 'center'
            }}
                className="h-12"
            ></div>
            <div className="flex justify-center items-start px-4">
                {/* <div className="justify-center hidden md:flex w-1/3">
                    <Image src="/icons/subtitle-figure.svg" width="100" height="20" />
                </div> */}
                {/* <div className="justify-center hidden md:flex w-1/3 h-32" style={{
                    backgroundImage: "radial-gradient(rgba(255,255,255,.4), transparent 2px)",
                    backgroundSize: "7px 7px",
                }}>
                </div> */}
            </div>
            <div className="text-white px-4">
                <HighlightedText
                    text={data.title}
                    tag="h4"
                    className="text-3xl font-russo text-center leading-tight mt-16 max-w-3xl mx-auto"
                    highlightClasses={[
                        'text-highlight before:bg-primary-600 before:-right-6 before:-bottom-2 before:top-0',
                    ]}
                />
                <div className="prose mx-auto text-gray-300 text-center mt-8">
                    <ReactMarkdown>{data.text}</ReactMarkdown>
                </div>
            </div>
            <div className="mt-16 lg:mt-24 flex justify-between max-w-md mx-auto px-4">
                <div>
                    <Image src={getStrapiMedia(data.extraIcon.url)} width={data.extraIcon.width} height={data.extraIcon.height} />
                </div>
                <div className="">
                    <Image src={getStrapiMedia(data.extraIcon.url)} width={data.extraIcon.width} height={data.extraIcon.height} />
                </div>
                <div className="">
                    <Image src={getStrapiMedia(data.extraIcon.url)} width={data.extraIcon.width} height={data.extraIcon.height} />
                </div>
                <div className="hidden lg:block">
                    <Image src={getStrapiMedia(data.extraIcon.url)} width={data.extraIcon.width} height={data.extraIcon.height} />
                </div>
            </div>
            <div style={{
                backgroundImage: 'url("/icons/variant7-icon-1.svg")',
                backgroundRepeat: 'repeat-x',
                backgroundSize: 'auto 100%',
                backgroundPosition: 'center'
            }}
                className="h-12 mt-16"
            ></div>
        </section >
    )
}

export default Variant7