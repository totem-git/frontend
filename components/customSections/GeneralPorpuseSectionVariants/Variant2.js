import ButtonLink from "@/components/elements/button-link";
import Image from "next/image";
import { getButtonAppearance } from "utils/button";
import { getStrapiMedia } from "utils/media";
import Markdown from "react-markdown";
import NextImage from "@/components/elements/image";
import HighlightedText from "@/components/elements/HighlightedText";
import { fetchAPI } from "utils/api";
import Viewer from "viewerjs";
import { useRef, useEffect } from "react";
import { sendEvent } from "utils/gtag";
import Breadcrumbs from "@/components/customSections/Breadcrumbs";

const Variant2 = ({ data, prependBreadcrumbs }) => {
  const isVideoRef = useRef(false);
  const viewerRef = useRef();
  const imageContainerRef = useRef();
  const mediaRef = useRef();

  mediaRef.current = data.media.map((m) => {
    let isVideo = false;
    let videoUrl = null;
    let videoThumbnailName = null;
    if (m.mime.startsWith("video")) {
      isVideo = true;
      videoUrl = getStrapiMedia(m.url);
      videoThumbnailName = `${m.name.split(".")[0]}_thumbnail`;
      m = {
        url: "/imgs/play-icon-video-format.png",
        isVideoThumbnail: true,
        width: null,
        videoThumbnailName,
        videoName: m.name,
      };

      isVideoRef.current = true;
    }

    m.isVideo = isVideo;
    m.videoUrl = videoUrl;

    return m;
  });

  const openViewer = (index) => {
    viewerRef.current.show();
    viewerRef.current.view(index);
  };

  useEffect(async () => {
    let imageContainer = imageContainerRef.current;

    if (isVideoRef.current) {
      let name = imageContainer.dataset.videoThumbnailName;

      let realThumbail = (await fetchAPI(`/upload/search/${name}`))[0];

      if (realThumbail) {
        imageContainer.querySelector("img").src = getStrapiMedia(
          realThumbail.url
        );
        imageContainer.querySelector("img").srcset = "";
      }
    }
  }, []);

  useEffect(() => {
    if (isVideoRef.current) {
      let imagesList = document.createElement("div");

      mediaRef.current.forEach((m) => {
        let image = document.createElement("img");
        image.src = m.url;
        image.dataset.isVideo = m.isVideo;
        image.dataset.videoUrl = m.videoUrl;
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
            <video class="w-full" autoplay controls>
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
        toolbar: false,
        title: false,
      });
    }
  }, []);

  return (
    <>
      {prependBreadcrumbs && <Breadcrumbs />}
      <section
        id={data.identifier}
        className="pt-12 text-center"
        data-section-name="GeneralPurposeSection:Variant2"
      >
        <div className="container max-w-4xl space-y-6 px-4">
          {data.extraIcon && (
            <div className="mx-auto w-20">
              <NextImage media={data.extraIcon} />
            </div>
          )}
          <HighlightedText
            tag="h2"
            text={data.title}
            className="w-full pt-4 text-center font-russo text-4xl text-gray-600"
            highlightClasses={[
              "text-highlight before:bg-black text-primary-600 block md:inline-block px-16 pt-2",
              "text-highlight before:bg-primary-600 before:-left-3 before:-right-3 before:-inset-0 text-black",
            ]}
          />
          <div className="prose mx-auto leading-snug lg:max-w-none">
            <Markdown>{data.text}</Markdown>
          </div>
          {data.CTAs[0] && (
            <div className="mb-4 inline-block w-full sm:w-96">
              <ButtonLink
                button={data.CTAs[0]}
                appearance={getButtonAppearance(data.CTAs[0].type, "light")}
                wFull
              />
            </div>
          )}
        </div>
        {!!mediaRef.current.length ? (
          <div
            ref={imageContainerRef}
            className={`relative !mt-16 h-[500px] lg:mx-24 2xl:h-[40vw] ${
              isVideoRef.current ? "cursor-pointer" : ""
            }`}
            data-is-video={isVideoRef.current}
            data-video-thumbnail-name={
              mediaRef.current[0].isVideoThumbnail
                ? mediaRef.current[0].videoThumbnailName
                : ""
            }
            onClick={
              isVideoRef.current
                ? () => {
                    openViewer(0);
                    sendEvent({
                      category: "view-video",
                      action: "clic",
                      label: `video-${mediaRef.current[0].videoName}`,
                    });
                  }
                : () => {}
            }
          >
            <Image
              src={
                isVideoRef.current
                  ? mediaRef.current[0].url
                  : getStrapiMedia(mediaRef.current[0].url)
              }
              objectPosition="center"
              objectFit="cover"
              layout="fill"
              loading={isVideoRef.current ? "eager" : "lazy"}
            />
          </div>
        ) : (
          <>
            <br />
            <br />
          </>
        )}
      </section>
    </>
  );
};

export default Variant2;
