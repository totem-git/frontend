import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import Image from "next/image"
import { getStrapiMedia } from "utils/media"
import HighlightedText from "../elements/HighlightedText"
import { useEffect, useRef, useState } from "react"
import NextImage from "../elements/image"

const Hero = ({ data }) => {
  const isLanding = data.type === 'landing' || data.type === 'home'
  const isHome = data.type === 'home'
  const navRef = useRef()
  const [currentUrl, setCurrentUrl] = useState('')

  const navLinks = [
    {
      url: '/the-facilities',
      text: 'Lodging',
      icon: 'icon-1',
    },
    {
      url: '/the-fishing-experience',
      text: 'Fishing experience',
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

  return (
    <main className="text-white text-center bg-black h-screen flex flex-col">
      <div className={`relative flex justify-center items-center py-12 lg:pb-4 sm:py-32 grow`}>
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
          <div className="space-y-5 w-full flex flex-col items-center px-4">
            {data.extraIcon && (
              <div className="w-40">
                <NextImage media={data.extraIcon} />
              </div>
            )}
            <HighlightedText
              tag="h2"
              className={`text-4xl text-primary-600 ${isHome ? 'font-basker' : 'font-russo'}`}
              highlightClasses={['text-bg-effect before:right-2']}
              text={data.title}
            />
            <h3 className={`${isHome ? 'text-3xl' : 'text-xl'} font-russo`}>{data.label}</h3>
            {isHome && (
              <div className="max-w-xs px-16">
                <Image src="/icons/stars.svg" width={500} height={100} />
              </div>
            )}
            {!!data.buttons.length && (
              <div className="w-full px-6">
                <ButtonLink
                  wFull
                  button={data.buttons[0]}
                  appearance={getButtonAppearance(data.buttons[0].type, 'dark')}
                />
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <Image src="/icons/arrow-down.svg" width={32} height={32} />
          </div>
        </div>
      </div>
      {isLanding &&
        <div ref={navRef} className="flex justify-center divide-x-2 border-white">
          {navLinks.map((link, i) => (
            <div key={i} className={`grow pb-4 ${i == 1 && 'w-[36%]'} pt-6`}>
              <a href={link.url} className="flex flex-col space-y-2 group">
                {(currentUrl == link.url) ? <Image src={`/icons/${link.icon}-white.svg`} width="16" height="16" /> : <Image src={`/icons/${link.icon}.svg`} width="16" height="16" />}
                <span className={`w-max inline-block mx-auto border-b-4 ${(currentUrl == link.url) ? 'border-white' : 'border-transparent'} group-hover:border-white transition`}>{link.text}</span>
              </a>
            </div>
          ))}
        </div>
      }
    </main>
  )
}

export default Hero
