import Image from "next/image"

const ResortMap = ({ data }) => {
    return (
        <section className="bg-white">
            <div className="px-4 pb-8">
                <div className="flex justify-center">
                    <Image src="/icons/map-icon.svg" width={64} height={64} />
                </div>
                <h5 className="text-3xl text-primary-600 text-center font-russo mb-8">Entire resort map</h5>
                <div className="mt-8">
                    <Image src="/imgs/map-1.png" width={393} height={314} />
                </div>
                <h6 className="text-primary-600 text-lg mt-6 font-russo">TOTEM LODGE</h6>
                <p className="text-gray-700 mt-4">
                    1. Main Lodge: Dining Room and Lounge<br />
                    2. Executive Lodge: 5 bedrooms/3 baths<br />
                    3. Sunset: 3 bedrooms/2 baths<br />
                    4. Leonard: 1 bedroom/1 bath<br />
                    5. Hilltop: 2 bedrooms/2 baths<br />
                    6. Little Joe: 1 bedroom/1 bath<br />
                    7. Robin’s Roost: 2 bedrooms/2 baths<br />
                    8. Bear’s Nest: 3 bedrooms/2 baths<br />
                    9. Boathouse<br />
                    10. Office<br />
                    11. Aggie: 3 bedrooms/2 baths<br />
                    12. Curly: 4 bedrooms/3 baths<br />
                    13. Chalet 1: 1 bedroom/1 bath<br />
                    14. Chalet 2: 1 bedroom/1 bath<br />
                    15. Stewart: 3 bedrooms/2 baths<br />
                    16. Flicker’s: 2 bedrooms/2 baths<br />
                    17. Dinty: 2 bedrooms/2 baths<br />
                    18. Paradise Point: 4 bedrooms/2 baths<br />
                    19. Eagle’s Nest: 3 bedrooms/2 baths<br />
                    20. Lookout Bay: 4 bedrooms/3 baths<br />
                    21. Midnight Cove: 6 bedrooms/7 baths<br />
                    22. Crow’s Nest: 3 bedrooms/2 baths<br />
                    23. Willmarth’s: 3 bedrooms/2 baths<br />
                    24. Wolf’s Den: GM Quarters
                </p>
                <div className="mt-8">
                    <Image src="/imgs/map-2.png" width={393} height={314} />
                </div>
                <h6 className="text-primary-600 text-lg mt-6 font-russo">YELLOWBIRD LODGE</h6>
                <p className="text-gray-700 mt-4">
                    1. Lodge: 10 bedrooms/13 baths<br />
                    2. Chalet: 6 bedrooms/8 baths<br />
                    3. Hunter Cabin: 3 bedrooms/2 baths<br />
                    4. Trapper Cabin: 4 bedrooms/2 baths<br />
                    5. Fisher Cabin: 3 bedrooms/2 baths<br />
                    6. Angler Cabin: 3 bedrooms/2 baths
                </p>
                <h6 className="text-primary-600 text-lg mt-6 font-russo">EXECUTIVE ISLANDS</h6>
                <p className="text-gray-700 mt-4">
                    25. Island 1: 2 bedrooms/1 bath<br />
                    26. Island 2: 2 bedrooms/2 baths<br />
                    27. Island 3: 2 bedrooms/2 baths
                </p>
                <div className="mt-8">
                    <Image src="/imgs/map-3.png" width={393} height={314} />
                </div>
                <h6 className="text-primary-600 text-lg mt-6 font-russo">WILEY POINT LODGE</h6>
                <p className="text-gray-700 mt-4">
                    1. Main Lodge:<br />
                    Top level - Board Room<br />
                    Main Level - Dining Room, Bar, Store, Office<br />
                    Middle Level - Guest Suites (Rms 1-8),<br />
                    2nd Bar, Games Room<br />
                    Bottom Level - Gym, Sauna,<br />
                    Changerooms & Bathroom<br />
                    2. Wolf: 2 big bedrooms/4 beds each/2 baths<br />
                    3. Deer: 2 big bedrooms/4 beds each/2 baths<br />
                    4. Bear: 2 big bedrooms/4 beds each/2 baths<br />
                    5. Fox: 2 big bedrooms/4 beds each/2 baths<br />
                    6. Boathouse/Fish Cleaning House/2 baths<br />
                    7. Big Moose: M1-4 beds, M2-4 beds, M3-2 beds,<br />
                    M4-4 beds, M5-4 beds, 1 bath ea.<br />
                    8. Little Moose: M6-4 beds, M7-4 beds,<br />
                    M8-4 beds, M9-4 beds, 1 bath each<br />
                    9. Staff Quarters & Laundry<br />
                    10. Elk: E1-4 beds, E2-4 beds, E3-4 beds,<br />
                    E4-4 beds, E5-4 beds, 1 bath each
                </p>
            </div>
        </section>
    )
}

export default ResortMap