import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import Image from "next/image"
import { getStrapiMedia } from "utils/media"
import HighlightedText from "../elements/HighlightedText"
import { useEffect, useRef, useState } from "react"
import NextImage from "../elements/image"
import Link from "next/link"

const Hero = ({ data }) => {
  const isLanding = data.type === 'landing' || data.type === 'home'
  const isHome = data.type === 'home'
  const navRef = useRef()
  const [currentUrl, setCurrentUrl] = useState('')
  const mainRef = useRef()

  const navLinks = [
    {
      url: '/the-facilities',
      text: 'Lodging',
      icon: 'icon-1',
    },
    {
      url: '/the-fishing-experience',
      text: 'The fishing experience',
      icon: 'icon-2',
    },
    {
      url: '/events',
      text: 'Events',
      icon: 'icon-3',
    },
  ]

  useEffect(() => {
    let url = window.location.pathname
    if (url.indexOf('?') != -1) url = url.slice(0, url.indexOf('?'))
    if (url.indexOf('#') != -1) url = url.slice(0, url.indexOf('#'))

    setCurrentUrl(url)
  }, [])

  useEffect(() => {
    mainRef.current.style.height = `${window.innerHeight}px`
  }, [])

  return (
    <main ref={mainRef} className="text-white text-center bg-black h-screen flex flex-col">
      <div className={`relative flex justify-center items-center grow pt-10`}>
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
        {isHome && (
          <div className="absolute hidden left-12 bottom-28 m-0 w-1.5 h-1/2 z-10 lg:flex flex-col">
            <div className="h-32 w-full bg-white"></div>
            <div className="h-full w-full bg-primary-600"></div>
          </div>
        )}
        <div className="relative flex flex-col items-center justify-between space-y-16 z-10 w-full">
          <div className="space-y-5 sm:space-y-4 w-full flex flex-col items-center px-4">
            {data.extraIcon && (
              <div className="w-40">
                <NextImage media={data.extraIcon} />
              </div>
            )}
            <HighlightedText
              tag="h2"
              className={`${isLanding ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'} text-primary-600 ${isHome ? 'font-basker' : 'font-russo'}`}
              highlightClasses={['text-bg-effect before:right-2']}
              text={data.title}
            />
            <h3 className={`${isHome ? 'text-3xl' : 'text-xl md:text-3xl'} font-russo`}>
              {data.label &&
                data.label.split('<br>').map((labelPart, i) => (
                  <span key={i}>{labelPart} <br className="sm:hidden" /></span>
                ))
              }
            </h3>
            {isHome && (
              <div className="flex items-center lg:!mt-12">
                <div className="hidden sm:block w-48 lg:w-32">
                  <Image src="/icons/rectangle-with-squiggly.svg" width={500} height={100} />
                </div>
                <div className="w-52 sm:w-80 lg:w-52 px-4 lg:mx-20">
                  <Image src="/icons/stars.svg" width={500} height={100} />
                </div>
                <div className="hidden sm:block w-48 lg:w-32">
                  <Image src="/icons/rectangle-with-squiggly.svg" className=" rotate-180" width={500} height={100} />
                </div>
              </div>
            )}
            {!!data.buttons.length && (
              <div className={`w-full ${isHome && 'lg:hidden'} px-6 sm:px-0 sm:w-96 sm:pt-6`}>
                <ButtonLink
                  wFull
                  button={data.buttons[0]}
                  appearance={getButtonAppearance(data.buttons[0].type, 'dark')}
                  size="text-base md:text-2xl lg:text-xl"
                />
              </div>
            )}
          </div>
          {/* <div className="hidden lg:block">
            <Image src="/icons/arrow-down.svg" width={32} height={32} />
          </div> */}
        </div>
      </div>
      {isLanding &&
        <div ref={navRef} className="flex justify-center divide-x-2 border-white lg:max-w-lg lg:py-8 lg:mx-auto">
          {navLinks.map((link, i) => (
            <div key={i} className={`grow pb-4 ${i == 1 && 'w-[36%]'} pt-6 lg:pt-0 lg:pb-0 min-w-max lg:px-12`}>
              <Link href={link.url}>
                <a className="flex flex-col space-y-2 group font-russo font-thin">
                  {(currentUrl == link.url) ? <Image src={`/icons/${link.icon}-white.svg`} width="16" height="16" /> : <Image src={`/icons/${link.icon}.svg`} width="16" height="16" />}
                  <span className={`w-max inline-block mx-auto border-b-4 ${(currentUrl == link.url) ? 'border-white' : 'border-transparent'} group-hover:border-white transition`}>{link.text}</span>
                </a>
              </Link>
            </div>
          ))}
        </div>
      }
    </main>
  )
}

export default Hero
