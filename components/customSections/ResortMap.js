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
            className="mx-auto max-w-6xl justify-center lg:flex"
          >
            <div className="shrink items-start gap-4 sm:flex sm:bg-light-grey-blue sm:p-8 lg:w-full lg:flex-col lg:bg-transparent">
              <div className="mt-8 h-52 overflow-hidden sm:mt-0 sm:w-1/2 lg:w-full">
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
                <p className="mt-4 text-gray-700">
                  1. Main Lodge: Dining Room and Lounge
                  <br />
                  2. Executive Lodge: 5 bedrooms/3 baths
                  <br />
                  3. Sunset: 3 bedrooms/2 baths
                  <br />
                  4. Leonard: 1 bedroom/1 bath
                  <br />
                  5. Hilltop: 2 bedrooms/2 baths
                  <br />
                  6. Little Joe: 1 bedroom/1 bath
                  <br />
                  7. Robin’s Roost: 2 bedrooms/2 baths
                  <br />
                  8. Bear’s Nest: 3 bedrooms/2 baths
                  <br />
                  9. Boathouse
                  <br />
                  10. Office
                  <br />
                  11. Aggie: 3 bedrooms/2 baths
                  <br />
                  12. Curly: 4 bedrooms/3 baths
                  <br />
                  13. Chalet 1: 1 bedroom/1 bath
                  <br />
                  14. Chalet 2: 1 bedroom/1 bath
                  <br />
                  15. Stewart: 3 bedrooms/2 baths
                  <br />
                  16. Flicker’s: 2 bedrooms/2 baths
                  <br />
                  17. Dinty: 2 bedrooms/2 baths
                  <br />
                  18. Paradise Point: 4 bedrooms/2 baths
                  <br />
                  19. Eagle’s Nest: 3 bedrooms/2 baths
                  <br />
                  20. Lookout Bay: 4 bedrooms/3 baths
                  <br />
                  21. Midnight Cove: 6 bedrooms/7 baths
                  <br />
                  22. Crow’s Nest: 3 bedrooms/2 baths
                  <br />
                  23. Willmarth’s: 3 bedrooms/2 baths
                  <br />
                  24. Wolf’s Den: GM Quarters
                </p>
              </div>
            </div>
            <div className="shrink items-start gap-4 sm:mt-8 sm:flex sm:bg-light-grey-blue sm:p-8 lg:mt-0 lg:w-full lg:flex-col lg:bg-transparent">
              <div className="mt-8 h-52 overflow-hidden sm:mt-0 sm:w-1/2 lg:w-full">
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
                <p className="mt-4 text-gray-700">
                  1. Lodge: 10 bedrooms/13 baths
                  <br />
                  2. Chalet: 6 bedrooms/8 baths
                  <br />
                  3. Hunter Cabin: 3 bedrooms/2 baths
                  <br />
                  4. Trapper Cabin: 4 bedrooms/2 baths
                  <br />
                  5. Fisher Cabin: 3 bedrooms/2 baths
                  <br />
                  6. Angler Cabin: 3 bedrooms/2 baths
                </p>
                <h6 className="mt-6 font-russo text-lg text-primary-600">
                  PRIVATE ISLANDS OF LOTW
                </h6>
                <p className="mt-4 text-gray-700">
                  25. Island 1: 2 bedrooms/ 1.5 bath
                  <br />
                  26. Island 2 (Cabin #1): 2 bedroom/ 2 baths
                  <br />
                  27. Island 2 (Cabin #2): 2 bedroom/ 2 baths
                  <br />
                  28. Island 3: 2 bedrooms/ 2 baths
                </p>
              </div>
            </div>
            <div className="shrink items-start gap-4 sm:mt-8 sm:flex sm:bg-light-grey-blue sm:p-8 lg:mt-0 lg:w-full lg:flex-col lg:bg-transparent">
              <div className="mt-8 h-52 overflow-hidden sm:mt-0 sm:w-1/2 lg:w-full">
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
                <p className="mt-4 text-gray-700">
                  1. Main Lodge:
                  <br />
                  Top level - Board Room
                  <br />
                  Main Level - Dining Room, Bar, Store, Office
                  <br />
                  Middle Level - Guest Suites (Rms 1-8),
                  <br />
                  2nd Bar, Games Room
                  <br />
                  Bottom Level - Gym, Sauna,
                  <br />
                  Changerooms & Bathroom
                  <br />
                  2. Wolf: 2 big bedrooms/4 beds each/2 baths
                  <br />
                  3. Deer: 2 big bedrooms/4 beds each/2 baths
                  <br />
                  4. Bear: 2 big bedrooms/4 beds each/2 baths
                  <br />
                  5. Fox: 2 big bedrooms/4 beds each/2 baths
                  <br />
                  6. Boathouse/Fish Cleaning House/2 baths
                  <br />
                  7. Big Moose: M1-4 beds, M2-4 beds, M3-2 beds,
                  <br />
                  M4-4 beds, M5-4 beds, 1 bath ea.
                  <br />
                  8. Little Moose: M6-4 beds, M7-4 beds,
                  <br />
                  M8-4 beds, M9-4 beds, 1 bath each
                  <br />
                  9. Staff Quarters & Laundry
                  <br />
                  10. Elk: E1-4 beds, E2-4 beds, E3-4 beds,
                  <br />
                  E4-4 beds, E5-4 beds, 1 bath each
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResortMap;
