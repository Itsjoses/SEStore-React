import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMap ,FaPhoneAlt} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "./map.css";
import "leaflet/dist/leaflet.css";

export default function StoreAddress() {
  return (
    <div className="overflow-hidden w-full h-full flex md:flex-row flex-col bg-[#FAFAFA] mt-12">
    <div className="md:w-6/12 w-full h-full justify-center py-24 ">
      <div className=" flex justify-center">

      <div className="flex flex-col gap-12 lg:w-2/5 md:w-3/5 w-4/5">
        <p className="lg:text-4xl md:text-3xl text-2xl font-Merienda font-bold">
          VISIT SESTORE TODAY
        </p>
        <p className="lg:text-lg text-base text-custom-orange">OPEN 7 DAYS A WEEK</p>
        <div className="gap-8 flex flex-col">
          <div className="flex md:gap-8 gap-4">
            <div className="lg:w-16 md:w-10">
              <FaMap className="lg:text-6xl md:text-5xl text-4xl max-w-xl" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="xl:text-2xl lg:text-xl md:text-lg">ADRRESS</p>
              <p className="xl:text-xl lg:text-base md:text-xs">Jl. Bambang satu dua tiga haha hihi anjay</p>
            </div>
          </div>
          <div className="flex md:gap-8 gap-4">
            <div className="lg:w-16 md:w-10">
              <SiGmail className="lg:text-6xl md:text-5xl text-4xl max-w-xl" />
            </div>
            <div className="flex flex-col gap-4 ">
              <p className="xl:text-2xl lg:text-xl md:text-lg">EMAIL</p>
              <p className="xl:text-xl lg:text-base md:text-xs break-words whitespace-normal">josesusanto147@gmail.com</p>
            </div>
          </div>
          <div className="flex md:gap-8 gap-4">
            <div className="lg:w-16 md:w-10">
              <FaPhoneAlt className="lg:text-6xl md:text-5xl text-4xl max-w-xl" />
            </div>
            <div className="flex flex-col gap-4">
              <p className="xl:text-2xl lg:text-xl md:text-lg">Phone</p>
              <p className="xl:text-xl lg:text-base md:text-xs">+62 847590384673</p>
            </div>
          </div>
        </div>
        <div>
          <button className="bg-red-600 text-white lg:text-lg md:text-base font-bold xl:py-4 xl:px-4 md:py-3 md:px-3 md:w-fit w-full py-3">
            MORE INFO
          </button>
        </div>
      </div>
      </div>

    </div>
    <div className="md:w-6/12 md:h-auto h-96 w-full">
      <MapContainer
      // @ts-ignore comment
        center={[-6.2018, 106.7823]}
        zoom={100}
        className="map-container"
      >
        <TileLayer
        // @ts-ignore comment
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-6.2018, 106.7823]}>
          <Popup>This is Our Restaurant!</Popup>
        </Marker>
      </MapContainer>
    </div>
  </div>
  )
}
