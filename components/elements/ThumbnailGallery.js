import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { getStrapiMedia } from "utils/media";
import Viewer from "viewerjs";
import SliderIndicators from "./SliderIndicators";
import css from "classnames";
import { fetchAPI } from "utils/api";

const ThumbnailGallery = ({ mediaList }) => {
  const sliderRef = useRef();
  const activeSlidesRef = useRef(Array(mediaList.length).fill(0));
  const [activeSlides, setActiveSlides] = useState(activeSlidesRef.current);
  const viewerRef = useRef();

  const bigImagesArray = [];
  let bigImageIndex = 0;

  mediaList = mediaList.map((m) => {
    let isVideo = false;
    let videoUrl = null;
    let videoThumbnailName = null;
    if (m.mime.startsWith("video")) {
      isVideo = true;
      videoUrl = getStrapiMedia(m.url);
      videoThumbnailName = `${m.name.split(".")[0]}_thumbnail`;
      m = {
        url: "/imgs/play-icon.png",
        isVideoThumbnail: true,
        width: null,
        videoThumbnailName,
      };
    }

    if (m.width > 960 || isVideo) {
      bigImagesArray.push({
        isVideo,
        url: isVideo ? m.url : getStrapiMedia(m.url),
        videoUrl,
        videoThumbnailName,
      });
      m.isBigImage = true;
      m.bigImageIndex = bigImageIndex;
      bigImageIndex++;
    } else {
      m.isBigImage = false;
    }
    return m;
  });

  const openViewer = (index) => {
    viewerRef.current.show();
    viewerRef.current.view(index);
  };

  useEffect(() => {
    let videoThumbnailsList = Array.from(
      sliderRef.current.querySelectorAll("[data-is-video=true]")
    );

    videoThumbnailsList.forEach(async (thumbnail) => {
      let name = thumbnail.dataset.videoThumbnailName;

      let realThumbail = (await fetchAPI(`/upload/search/${name}`))[0];

      if (realThumbail) {
        thumbnail.querySelector("img").src = getStrapiMedia(realThumbail.url);
        thumbnail.querySelector("img").srcset = "";
      }
    });
  }, []);

  useEffect(() => {
    let imagesList = document.createElement("div");

    bigImagesArray.forEach((bigImage) => {
      let image = document.createElement("img");
      image.src = bigImage.url;
      image.dataset.isVideo = bigImage.isVideo;
      image.dataset.videoUrl = bigImage.videoUrl;
      imagesList.appendChild(image);
    });
    viewerRef.current = new Viewer(imagesList, {
      view(e) {
        if (this.viewer.viewer.querySelector(".custom-video-player")) {
          this.viewer.viewer.querySelector(".custom-video-player").remove();
        }
      },
      viewed(e) {
        if (e.detail.originalImage.dataset.isVideo == "true") {
          let videoPlayerContainer = document.createElement("div");
          videoPlayerContainer.classList.add(
            "absolute",
            "text-white",
            "custom-video-player",
            "top-1/2",
            "left-1/2",
            "-translate-x-1/2",
            "-translate-y-1/2",
            "w-full",
            "lg:w-3/5"
          );
          videoPlayerContainer.innerHTML = `
            <video class="w-full" controls>
              <source src="${e.detail.originalImage.dataset.videoUrl}" type="video/mp4" />
            </video>
          `;
          this.viewer.viewer.appendChild(videoPlayerContainer);
        }
      },
      hide(e) {
        if (this.viewer.viewer.querySelector(".custom-video-player")) {
          this.viewer.viewer.querySelector(".custom-video-player").remove();
        }
      },
    });
  }, []);

  const ioCallback = (entries) => {
    let intersections = [...activeSlidesRef.current];
    entries.forEach((entry) => {
      if (entry.isIntersecting) intersections[entry.target.dataset.index] = 1;
      else intersections[entry.target.dataset.index] = 0;
    });
    activeSlidesRef.current = intersections;
    setActiveSlides(intersections);
  };

  useEffect(() => {
    const io = new IntersectionObserver(ioCallback, {
      root: sliderRef.current,
      rootMargin: "-47%",
      threshold: 0,
    });
    if (sliderRef.current) {
      Array.from(sliderRef.current.children).forEach((slide) => {
        io.observe(slide);
      });
    }

    let ref = Object.assign({}, sliderRef);

    return () => {
      if (ref.current) {
        Array.from(ref.current.children).forEach((slide) => {
          io.unobserve(slide);
        });
      }
    };
  }, []);

  const handleSlide = (e) => {
    let slidesCount = activeSlidesRef.current.length;
    let scrollAmount = Math.floor(
      sliderRef.current.getBoundingClientRect().width
    );
    let currentScrollPosition = sliderRef.current.scrollLeft;
    let currentPosition = Math.round(currentScrollPosition / scrollAmount);

    let direction = Number.parseInt(e.currentTarget.dataset.slideDirection);
    let slideSteps = [];
    for (let i = 0; i < slidesCount; i++) {
      slideSteps.push(Math.floor(scrollAmount * i));
    }

    if (
      !slideSteps.includes(currentScrollPosition) &&
      Math.abs(currentScrollPosition - slideSteps[currentPosition]) > 50
    ) {
      return;
    }

    let nextPosition = currentPosition + direction;
    nextPosition =
      nextPosition > slideSteps.length - 1
        ? slideSteps.length - 1
        : nextPosition;
    nextPosition = nextPosition < 0 ? 0 : nextPosition;

    let targetScrollPosition = slideSteps[nextPosition];
    sliderRef.current.scrollTo({ left: targetScrollPosition });
  };

  return (
    <div className="relative w-full px-4">
      <div
        ref={sliderRef}
        className="no-scrollbar flex h-60 w-full snap-x snap-mandatory items-end overflow-y-hidden overflow-x-scroll scroll-smooth bg-black lg:h-80 2xl:h-[30vw]"
      >
        {mediaList.map((mediaObject, i) => (
          <div
            key={i}
            data-index={i}
            data-is-video={!!mediaObject.isVideoThumbnail}
            data-video-thumbnail-name={
              mediaObject.isVideoThumbnail ? mediaObject.videoThumbnailName : ""
            }
            className={`relative h-full max-h-full w-full shrink-0 snap-start snap-always ${
              mediaObject.isBigImage ? "cursor-pointer" : ""
            }`}
            onClick={
              mediaObject.isBigImage
                ? () => openViewer(mediaObject.bigImageIndex)
                : () => {}
            }
          >
            <Image
              src={
                mediaObject.isVideoThumbnail
                  ? mediaObject.url
                  : getStrapiMedia(mediaObject.url)
              }
              layout="fill"
              objectFit="cover"
              loading={mediaObject.isVideoThumbnail ? "eager" : "lazy"}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,.6) 15px, rgba(0,0,0,0) 30px)`,
              }}
            ></div>
          </div>
        ))}
      </div>
      <button
        data-slide-direction="-1"
        onClick={handleSlide}
        className={css(
          "absolute top-1/2 -left-6 flex h-12 w-8 -translate-y-1/2 lg:-left-8 lg:w-8 2xl:-left-[3vw] 2xl:h-[3.2vw] 2xl:w-[3.2vw]",
          { hidden: mediaList.length <= 1 }
        )}
      >
        <Image
          src="/icons/arrow-left-bg-yellow.svg"
          layout="fill"
          objectFit="contain"
        />
      </button>
      <button
        data-slide-direction="1"
        onClick={handleSlide}
        className={css(
          "absolute top-1/2 -right-6 flex h-12 w-8 -translate-y-1/2 rotate-180 lg:-right-8 lg:w-8 2xl:-right-[3vw] 2xl:h-[3.2vw] 2xl:w-[3.2vw]",
          { hidden: mediaList.length <= 1 }
        )}
      >
        <Image
          src="/icons/arrow-left-bg-yellow.svg"
          layout="fill"
          objectFit="contain"
        />
      </button>
      <div
        className={css("absolute bottom-2 left-1/2 -translate-x-1/2", {
          hidden: mediaList.length <= 1,
        })}
      >
        <SliderIndicators activeSlides={activeSlides} />
      </div>
    </div>
  );
};

export default ThumbnailGallery;
