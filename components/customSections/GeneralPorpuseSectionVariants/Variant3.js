import Image from "next/image";
import Markdown from "react-markdown";

const Variant3 = ({ data }) => {
  return (
    <section className="bg-black lg:px-24">
      <div className="container flex max-w-4xl flex-col items-center space-y-4 py-16 text-center text-light-grey-blue lg:space-y-12">
        <div className="hidden w-full flex-col items-center gap-8 pt-8 lg:flex lg:flex-row">
          <div className="w-3/6 shrink-0 grow -translate-x-2/4 -scale-y-100">
            <Image src="/icons/figure1.svg" width="491" height="128" />
          </div>
          <div className="separator-fish h-8 w-3/6 shrink-0 grow md:h-12"></div>
        </div>
        <div className="space-y-4">
          <h4 className="font-russo text-4xl font-thin text-primary-600">
            {data.title}
          </h4>
          <div className="prose prose-invert">
            <Markdown>{data.text}</Markdown>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-8 pt-8 lg:flex-row">
          <div className="separator-fish h-8 w-3/6 shrink-0 grow md:h-12"></div>
          <div className="shrink-0 grow md:w-3/6">
            <Image src="/icons/figure1.svg" width="491" height="128" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variant3;
