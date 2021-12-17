import Markdown from "react-markdown"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import Image from "next/image"

const Hero = ({ data }) => {
  return (
    <main className="text-white text-center bg-black">
      <div className="relative py-12 px-16">
        <div className="absolute inset-0">
          {/* TODO add poster attribute */}
          <video playsInline autoPlay muted loop id="bgvid" className="w-full h-full object-cover">
            <source src="/vid/totem1_trimmed_720_optimized.webm" type="video/webm" />
            <source src="/vid/totem1_trimmed_720_optimized.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black opacity-40 m-0"></div>
        <div className="relative flex flex-col items-center justify-between space-y-8 z-10">
          <div className="space-y-2">
            <h3 className="text-2xl">Suitonsectetuer</h3>
            <h2 className="text-4xl text-primary-600">Lorem ipsum hirtyt moirtere <span className="text-bg-effect">troiew</span></h2>
          </div>
          <ButtonLink
            button={{
              url: "#",
              newTab: false,
              text: "Catch a Fish",
              type: "primary"
            }}
            appearance={getButtonAppearance('primary', 'dark')}
          />
        </div>
      </div>
      <div className="flex justify-center divide-x-2 border-white px-4 mt-6">
        <div className="grow py-2 hover:text-primary-600">
          <a href="#" className="flex flex-col space-y-2">
            <Image src="/icons/icon-1.svg" width="16" height="16" />
            <span>The facilities</span>
          </a>
        </div>
        <div className="grow py-2 hover:text-primary-600">
          <a href="#" className="flex flex-col space-y-2">
            <Image src="/icons/icon-2.svg" width="16" height="16" />
            <span>The facilities</span>
          </a>
        </div>
        <div className="grow py-2 hover:text-primary-600">
          <a href="#" className="flex flex-col space-y-2">
            <Image src="/icons/icon-3.svg" width="16" height="16" />
            <span>The facilities</span>
          </a>
        </div>
      </div>
    </main>
  )
}

export default Hero
