import Image from "next/image"
import { backgroundColor, borderColor } from "tailwindcss/defaultTheme"

const GeoInfo = ({ data }) => {
    return (
        <section className="bg-white">
            <div className="px-4 pb-8">
                <div className="flex justify-center w-12 mx-auto">
                    <Image src="/icons/compass-icon.svg" width={64} height={64} />
                </div>
                <h5 className="text-3xl text-primary-600 text-center font-russo mt-4">Geographic information</h5>
                <p className="text-center text-gray-700 leading-snug mt-4">Lake of the Woods, Ontario is located right in the middle of Canada limiting with the north border of Minnesota, its location make it easy to get there from any place. It is less than a day driving from Midwestern states of USA.</p>
                <div className="mt-8">
                    <Image src="/imgs/geo-info.png" width={428} height={441} />
                </div>
                <div className="grid grid-cols-2 gap-2 gap-y-16 items-start">
                    <div className="flex items-center flex-wrap">
                        <div style={{ borderColor: "#ec410e" }} className="shrink-0 rounded-full border-2 p-1.5 w-14 h-14">
                            <div style={{ backgroundColor: "#ec410e" }} className="rounded-full h-full w-full bg-black"></div>
                        </div>
                        <div className="h-20 w-24 pl-4 flex">
                            <Image src="/imgs/totem-lodge.png" objectFit="contain" width={250} height={148} />
                        </div>
                        <p className="w-full shrink-0 font-russo text-sm text-gray-700 mt-2">TOTEM LODGE</p>
                    </div>
                    <div className="flex items-center flex-wrap">
                        <div style={{ borderColor: "#feb026" }} className="shrink-0 rounded-full border-2 p-1.5 w-14 h-14">
                            <div style={{ backgroundColor: "#feb026" }} className="rounded-full h-full w-full bg-black"></div>
                        </div>
                        <div className="h-20 w-24 pl-4 flex">
                            <Image src="/imgs/yellow-bird.png" objectFit="contain" width={200} height={184} />
                        </div>
                        <p className="w-full shrink-0 font-russo text-sm text-gray-700 mt-2">YELLOWBIRDLODGE & CHALET</p>
                    </div>
                    <div className="flex items-center flex-wrap">
                        <div style={{ borderColor: "#076185" }} className="shrink-0 rounded-full border-2 p-1.5 w-14 h-14">
                            <div style={{ backgroundColor: "#076185" }} className="rounded-full h-full w-full bg-black"></div>
                        </div>
                        <div className="h-20 w-24 pl-4 flex">
                            <Image src="/imgs/willey-port.png" objectFit="contain" width={604} height={570} />
                        </div>
                        <p className="w-full shrink-0 font-russo text-sm text-gray-700 mt-2">WILEY POINTWILDERNESS LODGE</p>
                    </div>
                    <div className="flex items-center flex-wrap">
                        <div style={{ borderColor: "#114131" }} className="shrink-0 rounded-full border-2 p-1.5 w-14 h-14">
                            <div style={{ backgroundColor: "#114131" }} className="rounded-full h-full w-full bg-black"></div>
                        </div>
                        <div className="h-20 w-24 pl-4 flex">
                            <Image src="/imgs/french-portage.png" objectFit="contain" width={595} height={570} />
                        </div>
                        <p className="w-full shrink-0 font-russo text-sm text-gray-700 mt-2">WILEY POINTWILDERNESS LODGE</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 mx-4 px-4 py-8 text-gray-600 text-xl">
                <p className="text-2xl font-bold mb-4">DISTANCE TO TOTEM RESORTS FROM:</p>
                <div className="flex justify-between"><span>Winnipeg, MB</span> <span>180 mi.</span></div>
                <div className="flex justify-between"><span>Thunder Bay, ON</span><span>300 mi.</span></div>
                <div className="flex justify-between"><span>Duluth, MN</span><span>250 mi.</span></div>
                <div className="flex justify-between"><span>Fargo, ND</span><span>350 mi.</span></div>
                <div className="flex justify-between"><span>Minneapolis, MN</span><span>400 mi.</span></div>
                <div className="flex justify-between"><span>Des Moines, IA</span><span>725 mi.</span></div>
                <div className="flex justify-between"><span>Chicago, IL</span><span>650 mi.</span></div>
                <div className="flex justify-between"><span>Omaha, NE</span><span>775 mi.</span></div>
                <div className="flex justify-between"><span>Edmonton, AB</span><span>1000 mi.</span></div>
                <div className="flex justify-between"><span>Toronto, ON</span><span>1230 mi.</span></div>
                <div className="flex justify-between"><span>Kansas City, MO</span><span>850 mi.</span></div>
                <div className="flex justify-between"><span>Detroit, MI</span><span>1000 mi.</span></div>
                <div className="flex justify-between"><span>St. Louis, MO</span><span>950 mi.</span></div>
                <div className="flex justify-between"><span>Milwaukee, WI</span><span>650 mi.</span></div>
                <div className="flex justify-between"><span>Green Bay, WI</span><span>550 mi.</span></div>
                <div className="flex justify-between"><span>Sioux Falls, SD</span><span>600 mi.</span></div>
                <div className="flex justify-between"><span>Madison, WI</span><span>575 mi.</span></div>
                <div className="flex justify-between"><span>Indianapolis,</span><span>900 mi.</span></div>
                <div className="flex justify-between"><span>Calgary, AB</span><span>1020 mi.</span></div>
                <div className="flex justify-between"><span>Vancouver, BC</span><span>1615 mi.</span></div>




















            </div>
        </section >
    )
}

export default GeoInfo