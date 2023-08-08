import Image from "next/image";
import Viewer from "viewerjs";
import { useRef, useEffect } from "react";
import Breadcrumbs from "@/components/customSections/Breadcrumbs";

const ResortMap = ({ data, prependBreadcrumbs }) => {
  const imageContainerRef = useRef();
  const viewerRef = useRef();

  const openViewer = (index) => {
    viewerRef.current.show();
    viewerRef.current.view(index);
  };

  useEffect(() => {
    let imageContainer = imageContainerRef.current;

    let viewer = new Viewer(imageContainer, {
      url: "data-original",
      title: false,
      inheritedAttributes: [],
    });

    viewerRef.current = viewer;
  }, []);

  return (
    <>
      {prependBreadcrumbs && <Breadcrumbs bgColor="bg-white" />}
      <section data-section-name="resortMap" className="bg-white">
        <div className="px-4 py-8 pb-8">
          <div className="flex justify-center">
            <Image
              src="/icons/resort-map-icon-solid.svg"
              width={64}
              height={64}
            />
          </div>
          <h2 className="mb-8 text-center font-russo text-3xl text-primary-600">
            Lodge Maps
          </h2>
          <p className="text-center">
            The resort map is divided into four properties (Totem Lodge, Wiley
            Point Lodge, Yellowbird Lodge, and French Portage Outpost) and also
            includes private islands, all located on Lake of the Woods.
          </p>
          <div
            ref={imageContainerRef}
            className="mx-auto max-w-7xl justify-center lg:flex"
          >
            <div className="shrink items-start gap-4 sm:flex sm:bg-light-grey-blue sm:p-4 lg:w-full lg:flex-col lg:bg-transparent">
              <div className="mt-8 overflow-hidden sm:mt-0 sm:w-1/2 lg:w-full">
                <Image
                  data-original="/imgs/totem-map-numbers-logo.jpg"
                  onClick={() => openViewer(0)}
                  className="cursor-pointer"
                  src="/imgs/totem-map-numbers-logo_600.jpg"
                  layout="responsive"
                  width={393}
                  height={314}
                />
              </div>
              <div className="sm:w-1/2 lg:w-full">
                <h6 className="mt-6 font-russo text-lg text-primary-600 sm:mt-0">
                  TOTEM LODGE
                </h6>
                <ul>
                  <li>
                    1. <b>Main Lodge</b>: Dining Room and Lounge
                  </li>
                  <li>
                    2. <b>Executive Lodge</b>: 5 bedrooms/3 baths
                  </li>
                  <li>
                    3. <b>Sunset</b>: 3 bedrooms/2 baths
                  </li>
                  <li>
                    4. <b>Leonard</b>: 1 bedroom/1 bath
                  </li>
                  <li>
                    5. <b>Hilltop</b>: 2 bedrooms/2 baths
                  </li>
                  <li>
                    6. <b>Little Joe</b>: 1 bedroom/1 bath
                  </li>
                  <li>
                    7. <b>Robin’s Roost</b>: 2 bedrooms/2 baths
                  </li>
                  <li>
                    8. <b>Bear’s Nest</b>: 3 bedrooms/2 baths
                  </li>
                  <li>
                    9. <b>Boathouse</b>
                  </li>
                  <li>
                    10. <b>Office</b>
                  </li>
                  <li>
                    11. <b>Aggie</b>: 3 bedrooms/2 baths
                  </li>
                  <li>
                    12. <b>Curly</b>: 4 bedrooms/3 baths
                  </li>
                  <li>
                    13. <b>Chalet 1</b>: 1 bedroom/1 bath
                  </li>
                  <li>
                    14. <b>Chalet 2</b>: 1 bedroom/1 bath
                  </li>
                  <li>
                    15. <b>Stewart</b>: 3 bedrooms/2 baths
                  </li>
                  <li>
                    16. <b>Flicker’s</b>: 2 bedrooms/2 baths
                  </li>
                  <li>
                    17. <b>Dinty</b>: 2 bedrooms/2 baths
                  </li>
                  <li>
                    18. <b>Paradise Point</b>: 4 bedrooms/2 baths
                  </li>
                  <li>
                    19. <b>Eagle’s Nest</b>: 3 bedrooms/2 baths
                  </li>
                  <li>
                    20. <b>Lookout Bay</b>: 4 bedrooms/3 baths
                  </li>
                  <li>
                    21. <b>Midnight Cove</b>: 6 bedrooms/7 baths
                  </li>
                  <li>
                    22. <b>Crow’s Nest</b>: 3 bedrooms/2 baths
                  </li>
                  <li>
                    23. <b>Willmarth’s</b>: 3 bedrooms/2 baths
                  </li>
                  <li>
                    24. <b>Wolf’s Den</b>: GM Quarters
                  </li>
                </ul>
              </div>
            </div>
            <div className="shrink items-start gap-4 sm:mt-8 sm:flex sm:bg-light-grey-blue sm:p-4 lg:mt-0 lg:w-full lg:flex-col lg:bg-transparent">
              <div className="mt-8  overflow-hidden sm:mt-0 sm:w-1/2 lg:w-full">
                <Image
                  data-original="/imgs/yellowbird-map-numbers-logos.jpg"
                  className="cursor-pointer"
                  onClick={() => openViewer(1)}
                  src="/imgs/yellowbird-map-numbers-logos_600.jpg"
                  layout="responsive"
                  width={393}
                  height={314}
                />
              </div>
              <div className="sm:w-1/2 lg:w-full">
                <h6 className="mt-6 font-russo text-lg text-primary-600 sm:mt-0">
                  YELLOWBIRD LODGE
                </h6>
                <ul>
                  <li>
                    1. <b>Lodge</b>: 10 bedrooms/13 baths
                  </li>
                  <li>
                    2. <b>Chalet</b>: 6 bedrooms/8 baths
                  </li>
                  <li>
                    3. <b>Hunter Cabin</b>: 3 bedrooms/2 baths
                  </li>
                  <li>
                    4. <b>Trapper Cabin</b>: 4 bedrooms/2 baths
                  </li>
                  <li>
                    5. <b>Fisher Cabin</b>: 3 bedrooms/2 baths
                  </li>
                  <li>
                    6. <b>Angler Cabin</b>: 3 bedrooms/2 baths
                  </li>
                </ul>
                <h6 className="mt-6 font-russo text-lg text-primary-600">
                  PRIVATE ISLANDS OF LOTW
                </h6>
                <ul>
                  <li>
                    25. <b>Island 1</b>: 2 bedrooms/ 1.5 bath
                  </li>
                  <li>
                    26. <b>Island 2 (Cabin #1)</b>: 2 bedroom/ 2 baths
                  </li>
                  <li>
                    27. <b>Island 2 (Cabin #2)</b>: 2 bedroom/ 2 baths
                  </li>
                  <li>
                    28. <b>Island 3</b>: 2 bedrooms/ 2 baths
                  </li>
                </ul>
              </div>
            </div>
            <div className="shrink items-start gap-4 sm:mt-8 sm:flex sm:bg-light-grey-blue sm:p-4 lg:mt-0 lg:w-full lg:flex-col lg:bg-transparent">
              <div className="mt-8 overflow-hidden sm:mt-0 sm:w-1/2 lg:w-full">
                <Image
                  onClick={() => openViewer(2)}
                  data-original="/imgs/wiley-map-numbers-logo.jpg"
                  src="/imgs/wiley-map-numbers-logo_600.jpg"
                  className="cursor-pointer"
                  layout="responsive"
                  width={393}
                  height={314}
                />
              </div>
              <div className="sm:w-1/2 lg:w-full">
                <h6 className="mt-6 font-russo text-lg text-primary-600 sm:mt-0">
                  WILEY POINT LODGE
                </h6>
                <ul>
                  <li>
                    1. <b>Main Lodge:</b>
                    <ul>
                      <li>
                        <b>Top level</b>
                      </li>
                      <li>
                        <b>Main Level</b> -{" "}
                        <span className="whitespace-nowrap">Dining Room</span>,
                        Bar, Store, Office.
                      </li>
                      <li>
                        <b>Middle Level</b> -{" "}
                        <span className="whitespace-nowrap">
                          Guest Suites (Rooms 1-8),
                        </span>{" "}
                        <span className="whitespace-nowrap">2nd Bar,</span>{" "}
                        <span className="whitespace-nowrap">Games Room.</span>
                      </li>
                      <li>
                        <b>Bottom Level</b> - Gym, Sauna,{" "}
                        <span className="whitespace-nowrap">
                          Changerooms & Bathroom.
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li>
                    2. <b>Wolf:</b>{" "}
                    <span className="whitespace-nowrap">
                      2 big bedrooms/4 beds each/2 baths
                    </span>
                  </li>
                  <li>
                    3. <b>Deer:</b>{" "}
                    <span className="whitespace-nowrap">
                      2 big bedrooms/4 beds each/2 baths
                    </span>
                  </li>
                  <li>
                    4. <b>Bear:</b>{" "}
                    <span className="whitespace-nowrap">
                      2 big bedrooms/4 beds each/2 baths
                    </span>
                  </li>
                  <li>
                    5. <b>Fox:</b>{" "}
                    <span className="whitespace-nowrap">
                      2 big bedrooms/4 beds each/2 baths
                    </span>
                  </li>
                  <li>
                    6. <b>Boathouse/Fish Cleaning House:</b>{" "}
                    <span className="whitespace-nowrap">2 baths</span>
                  </li>
                  <li>
                    7. <b>Moose:</b>{" "}
                    <span className="whitespace-nowrap">M1-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">M2-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">M3-2 beds,</span>{" "}
                    <span className="whitespace-nowrap">M4-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">M5-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">M6-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">M7-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">M8-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">M9-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">1 bath each.</span>
                  </li>
                  <li>
                    8. <b>Staff Quarters & Laundry</b>
                  </li>
                  <li>
                    9. <b>Elk:</b>{" "}
                    <span className="whitespace-nowrap">E1-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">E2-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">E3-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">E4-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">E5-4 beds,</span>{" "}
                    <span className="whitespace-nowrap">1 bath each.</span>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResortMap;
