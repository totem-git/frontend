import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import Image from "next/image"
import { getStrapiMedia } from "utils/media"
import HighlightedText from "../elements/HighlightedText"
import { useEffect, useRef, useState } from "react"

const Hero = ({ data }) => {
  const isLanding = data.type === 'landing' || data.type === 'home'
  const isHome = data.type === 'home'
  const navRef = useRef()
  const [currentUrl, setCurrentUrl] = useState('')

  useEffect(() => {
    let url = window.location.pathname
    if (url.indexOf('?') != -1) url = url.slice(0, url.indexOf('?'))
    if (url.indexOf('#') != -1) url = url.slice(0, url.indexOf('#'))

    setCurrentUrl(url)
  }, [])

  console.log(currentUrl);

  return (
    <main className="text-white text-center bg-black">
      <div className={`relative flex justify-center items-center py-12 lg:pb-4 sm:py-32 ${isLanding && 'h-[85vh]'}`}>
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
        <div className="relative flex flex-col items-center justify-between space-y-16 z-10 w-full">
          <div className="space-y-5 w-full flex flex-col items-center">
            <HighlightedText tag="h2" className={`text-4xl text-primary-600 ${isHome ? 'font-basker' : 'font-russo'}`} highlightClasses={['text-bg-effect']} text={data.title} />
            <h3 className={`${isHome ? 'text-3xl' : 'text-xl'} font-russo max-w-xs`}>{data.label}</h3>
            {isHome && (
              <div className="max-w-xs px-16">
                <Image src="/icons/stars.svg" width={500} height={100} />
              </div>
            )}
            <div className="w-full px-6">
              <ButtonLink
                wFull
                button={data.buttons[0]}
                appearance={getButtonAppearance(data.buttons[0].type, 'dark')}
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <Image src="/icons/arrow-down.svg" width={32} height={32} />
          </div>
        </div>
      </div>
      {isLanding &&
        <div ref={navRef} className="flex justify-center divide-x-2 border-white">
          <div className="grow pb-4 pt-6">
            <a href="/the-facilities" className="flex flex-col space-y-2 group">
              {(currentUrl == '/the-facilities') ? <Image src="/icons/icon-1-white.svg" width="16" height="16" /> : <Image src="/icons/icon-1.svg" width="16" height="16" />}
              <span className={`w-max inline-block mx-auto border-b-4 ${(currentUrl == '/the-facilities') ? 'border-white' : 'border-transparent'} group-hover:border-white transition`}>Lodging</span>
            </a>
          </div>
          <div className="grow pb-4 w-[36%] pt-6">
            <a href="#" className="flex flex-col space-y-2 group">
              {(currentUrl == '#') ? <Image src="/icons/icon-2-white.svg" width="16" height="16" /> : <Image src="/icons/icon-2.svg" width="16" height="16" />}
              <span className={`w-max inline-block mx-auto border-b-4 ${(currentUrl == '#') ? 'border-white' : 'border-transparent'} group-hover:border-white transition`}>Fishing experience</span>
            </a>
          </div>
          <div className="grow pb-4 pt-6">
            <a href="#" className="flex flex-col space-y-2 group">
              {(currentUrl == '#') ? <Image src="/icons/icon-3-white.svg" width="16" height="16" /> : <Image src="/icons/icon-3.svg" width="16" height="16" />}
              <span className={`w-max inline-block mx-auto border-b-4 ${(currentUrl == '#') ? 'border-white' : 'border-transparent'} group-hover:border-white transition`}>Events</span>
            </a>
          </div>
        </div>
      }
    </main>
  )
}

export default Hero
