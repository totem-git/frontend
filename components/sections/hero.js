import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import Image from "next/image"
import { getStrapiMedia } from "utils/media"

const Hero = ({ data }) => {
  const isLanding = data.type === 'landing'
  const titlePart1 = data.title.slice(0, data.title.lastIndexOf(' ') + 1)
  const titlePart2 = data.title.slice(data.title.lastIndexOf(' ') + 1)
  return (
    <main className="text-white text-center bg-black">
      <div className={`relative flex justify-center items-center py-12 lg:pb-4 sm:py-32 px-16 ${isLanding && 'h-[85vh]'}`}>
        <div className="absolute inset-0">
          {data.picture.mime.startsWith('image') &&
            <Image src={getStrapiMedia(data.picture.url)} objectFit="cover" layout="fill" />
          }
          {data.picture.mime.startsWith('video') &&
            /* TODO[epic=To do] add poster attribute */
            <video playsInline autoPlay muted loop id="bgvid" className="w-full h-full object-cover">
              <source src={getStrapiMedia(data.picture.url)} type="video/mp4" />
            </video>
          }
        </div>
        <div className="absolute inset-0 bg-black opacity-60 m-0"></div>
        <div className="relative flex flex-col items-center justify-between space-y-16 z-10">
          <div className="space-y-2">
            <h3 className="text-2xl">{data.label}</h3>
            <h2 className="text-4xl text-primary-600">{titlePart1}<span className="text-bg-effect">{titlePart2}</span></h2>
          </div>
          <ButtonLink
            button={data.buttons[0]}
            appearance={getButtonAppearance(data.buttons[0].type, 'dark')}
          />
          <div className="hidden lg:block">
            <Image src="/icons/arrow-down.svg" width={32} height={32} />
          </div>
        </div>
      </div>
      {isLanding &&
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
      }
    </main>
  )
}

export default Hero
