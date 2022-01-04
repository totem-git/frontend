import Image from "next/image"
import Markdown from "react-markdown"

const Variant3 = ({ data }) => {
    return (
        <section className="lg:px-24 bg-black">
            <div className="container max-w-4xl py-16 flex flex-col items-center text-center space-y-4 lg:space-y-12 text-light-grey-blue">
                <div className="hidden lg:flex w-full flex-col items-center gap-8 lg:flex-row pt-8">
                    <div className="grow shrink-0 w-3/6 -scale-y-100 -translate-x-2/4">
                        <Image src="/icons/figure1.svg" width="491" height="128" />
                    </div>
                    <div className="separator-fish h-8 shrink-0 grow w-3/6"></div>
                </div>
                <div className="space-y-4">
                    <h4 className="text-primary-600 text-4xl font-russo font-thin">{data.title}</h4>
                    <div className="prose prose-invert">
                        <Markdown>{data.text}</Markdown>
                    </div>
                </div>
                <div className="flex w-full flex-col items-center gap-8 lg:flex-row pt-8">
                    <div className="separator-fish w-3/6 h-8 grow shrink-0"></div>
                    <div className="grow shrink-0 w-3/6">
                        <Image src="/icons/figure1.svg" width="491" height="128" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Variant3