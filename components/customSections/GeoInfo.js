import Image from "next/image";
import { useRef, useEffect } from "react";
import viewer from "viewerjs";

const GeoInfo = ({ data }) => {
  const viewerRef = useRef();

  const openViewer = (e) => {
    if (!viewerRef.current) return;

    viewerRef.current.show();
  };

  useEffect(() => {
    let img = document.createElement("img");
    img.src = "/imgs/totem-resorts-lake-chart.jpg";

    viewerRef.current = new viewer(img, {
      navbar: false,
      toolbar: {
        zoomIn: true,
        zoomOut: true,
        oneToOne: false,
        reset: true,
        prev: false,
        play: false,
        next: false,
        rotateLeft: false,
        rotateRight: false,
        flipHorizontal: false,
        flipVertical: false,
      },
      hidden: function () {
        viewerRef.current.destroy();
      },
    });
  }, []);

  return (
    <section data-section-name="GeoInfo" className="bg-white py-8 px-4">
      <div className="lg:container">
        <div className="mx-auto flex w-12 justify-center">
          <Image src="/icons/compass-icon.svg" width={64} height={64} />
        </div>
        <h5 className="mt-4 text-center font-russo text-3xl text-primary-600">
          Geographic information
        </h5>
        <p className="mx-auto mt-4 max-w-3xl text-center leading-snug text-gray-700">
          Lake of the Woods, Ontario is located right in the middle of Canada
          limiting with the north border of Minnesota, its location make it easy
          to get there from any place. It is less than a day driving from
          Midwestern states of USA.
        </p>
        <div className="pb-8 lg:hidden">
          <div onClick={openViewer} className="mt-8 cursor-pointer">
            <Image
              src="/imgs/geo-info.png"
              layout="responsive"
              width={428}
              height={441}
            />
          </div>
          <div className="grid grid-cols-2 items-start gap-2 gap-y-16">
            <div className="flex flex-wrap items-center">
              <div
                style={{ borderColor: "#ec410e" }}
                className="h-14 w-14 shrink-0 rounded-full border-2 p-1.5"
              >
                <div
                  style={{ backgroundColor: "#ec410e" }}
                  className="h-full w-full rounded-full bg-black"
                ></div>
              </div>
              <div className="flex h-20 w-24 pl-4">
                <Image
                  src="/imgs/totem-lodge.png"
                  objectFit="contain"
                  width={250}
                  height={148}
                />
              </div>
              <p className="mt-2 w-full shrink-0 font-russo text-sm text-gray-700">
                TOTEM LODGE
              </p>
            </div>
            <div className="flex flex-wrap items-center">
              <div
                style={{ borderColor: "#feb026" }}
                className="h-14 w-14 shrink-0 rounded-full border-2 p-1.5"
              >
                <div
                  style={{ backgroundColor: "#feb026" }}
                  className="h-full w-full rounded-full bg-black"
                ></div>
              </div>
              <div className="flex h-20 w-24 pl-4">
                <Image
                  src="/imgs/yellow-bird.png"
                  objectFit="contain"
                  width={200}
                  height={184}
                />
              </div>
              <p className="mt-2 w-full shrink-0 font-russo text-sm text-gray-700">
                YELLOWBIRDLODGE & CHALET
              </p>
            </div>
            <div className="flex flex-wrap items-center">
              <div
                style={{ borderColor: "#076185" }}
                className="h-14 w-14 shrink-0 rounded-full border-2 p-1.5"
              >
                <div
                  style={{ backgroundColor: "#076185" }}
                  className="h-full w-full rounded-full bg-black"
                ></div>
              </div>
              <div className="flex h-20 w-24 pl-4">
                <Image
                  src="/imgs/willey-port.png"
                  objectFit="contain"
                  width={604}
                  height={570}
                />
              </div>
              <p className="mt-2 w-full shrink-0 font-russo text-sm text-gray-700">
                WILEY POINTWILDERNESS LODGE
              </p>
            </div>
            <div className="flex flex-wrap items-center">
              <div
                style={{ borderColor: "#114131" }}
                className="h-14 w-14 shrink-0 rounded-full border-2 p-1.5"
              >
                <div
                  style={{ backgroundColor: "#114131" }}
                  className="h-full w-full rounded-full bg-black"
                ></div>
              </div>
              <div className="flex h-20 w-24 pl-4">
                <Image
                  src="/imgs/french-portage.png"
                  objectFit="contain"
                  width={595}
                  height={570}
                />
              </div>
              <p className="mt-2 w-full shrink-0 font-russo text-sm text-gray-700">
                WILEY POINTWILDERNESS LODGE
              </p>
            </div>
          </div>
        </div>
        <div className="relative hidden pr-14 lg:block">
          <div className="cursor-pointer">
            <Image
              src="/imgs/geo-info-2.png"
              onClick={openViewer}
              width={1659}
              height={1211}
            />
          </div>
          <div className="top-0 right-0 mx-4 bg-gray-300 px-4 py-8 text-xl text-gray-600 lg:absolute lg:py-4">
            <div className="mx-auto sm:max-w-md lg:w-64">
              <p className="mb-4 text-2xl font-bold lg:text-base">
                DISTANCE TO TOTEM RESORTS FROM:
              </p>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Winnipeg, MB</span> <span>180 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Thunder Bay, ON</span>
                <span>300 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Duluth, MN</span>
                <span>250 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Fargo, ND</span>
                <span>350 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Minneapolis, MN</span>
                <span>400 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Des Moines, IA</span>
                <span>725 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Chicago, IL</span>
                <span>650 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Omaha, NE</span>
                <span>775 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Edmonton, AB</span>
                <span>1000 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Toronto, ON</span>
                <span>1230 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Kansas City, MO</span>
                <span>850 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Detroit, MI</span>
                <span>1000 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>St. Louis, MO</span>
                <span>950 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Milwaukee, WI</span>
                <span>650 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Green Bay, WI</span>
                <span>550 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Sioux Falls, SD</span>
                <span>600 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Madison, WI</span>
                <span>575 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Indianapolis,</span>
                <span>900 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Calgary, AB</span>
                <span>1020 mi.</span>
              </div>
              <div className="flex justify-between border-b-2 border-light-grey-blue lg:text-sm">
                <span>Vancouver, BC</span>
                <span>1615 mi.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoInfo;
