import { useEffect, useState } from "react";
import Card from "./components/Card";

type LocationJson = {
  ip?: string;
  network?: string;
  version?: string;
  city?: string;
  region?: string;
  region_code?: string;
  country?: string;
  country_name?: string;
  country_code?: string;
  country_code_iso3?: string;
  country_capital?: string;
  country_tld?: string;
  continent_code?: string;
  in_eu: boolean;
  postal?: string;
  latitude: number;
  longitude: number;
  timezone?: string;
  utc_offset?: string;
  country_calling_code?: string;
  currency?: string;
  currency_name?: string;
  languages?: string;
  country_area: number;
  country_population: number;
  asn?: string;
  org?: string;
};

const defaultProps = {
  ip: "",
  network: "",
  version: "",
  city: "",
  region: "",
  region_code: "",
  country: "",
  country_name: "",
  country_code: "",
  country_code_iso3: "",
  country_capital: "",
  country_tld: "",
  continent_code: "",
  in_eu: false,
  postal: "",
  latitude: 0,
  longitude: 0,
  timezone: "",
  utc_offset: "",
  country_calling_code: "",
  currency: "",
  currency_name: "",
  languages: "",
  country_area: 0,
  country_population: 0,
  asn: "",
  org: "",
};

const App = () => {
  const [ip, setIp] = useState<LocationJson>(defaultProps);

  const IpGrabber = async () => {
    try {
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((response) => {
          setIp(response);
          console.log(response);
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    IpGrabber();
  }, []);

  return (
    <>
      <main className="flex flex-col w-screen max-w-screen-md p-4 space-y-2 justify-center">
        <div className="flex justify-between items-center bg-neutral-900 border-2 border-neutral-800 px-4 py-2 rounded-lg h-full w-full">
          <h1 className="text-2xl font-bold ">Ip Lookup React</h1>
          <button
            type="button"
            className="bg-neutral-800 hover:bg-neutral-700 border-2 border-neutral-700/50 focus:outline-none font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 transition-colors z-50"
            onClick={() => {
              open(
                `https://github.com/sanoojes` + import.meta.env.BASE_URL,
                "SingleSecondaryWindowName"
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="2rem"
              height="2rem"
              fill="#fff"
            >
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
            </svg>
          </button>
        </div>
        <Card>
          <p className="text-xl font-bold">Your Ip Address is : {ip.ip}</p>
        </Card>
        {/* Location Information Card */}
        <Card>
          <h3 className="text-xl font-bold m-0">Location</h3>
          <div className="h-0.5 w-full bg-neutral-800 mb-3 mt-2"></div>
          <p className="text-base font-bold">Country: {ip.country_name}</p>
          <p className="text-base font-bold">Region: {ip.region}</p>
          <p className="text-base font-bold">City: {ip.city}</p>
        </Card>
        {/* Internet Service Provider (ISP) Card */}
        <Card>
          <h3 className="text-xl font-bold m-0">
            Internet Service Provider (ISP)
          </h3>
          <div className="h-0.5 w-full bg-neutral-800 mb-3 mt-2"></div>
          <p className="text-base font-bold">Network: {ip.network}</p>
          <p className="text-base font-bold">ISP: {ip.org}</p>
          <p className="text-base font-bold">ASN: {ip.asn}</p>
        </Card>
        {/* Geographical Coordinates Card */}
        <Card>
          <h3 className="text-xl font-bold m-0">Geographical Coordinates</h3>
          <div className="h-0.5 w-full bg-neutral-800 mb-3 mt-2"></div>
          <p className="text-base font-bold">Latitude: {ip.latitude}</p>
          <p className="text-base font-bold">Longitude: {ip.longitude}</p>
        </Card>
        {/* Timezone Card */}
        <Card>
          <h3 className="text-xl font-bold m-0">Timezone and Language</h3>
          <div className="h-0.5 w-full bg-neutral-800 mb-3 mt-2"></div>
          <p className="text-base font-bold">Timezone: {ip.timezone}</p>
          <p className="text-base font-bold">UTC Offset: {ip.utc_offset}</p>
        </Card>
        {/* Country Details Card */}
        <Card>
          <h3 className="text-xl font-bold m-0">Country Details</h3>
          <div className="h-0.5 w-full bg-neutral-800 mb-3 mt-2"></div>
          <p className="text-base font-bold">
            ISO Code: {ip.country_code_iso3}
          </p>
          <p className="text-base font-bold">Capital: {ip.country_capital}</p>
          <p className="text-base font-bold">
            Population: {ip.country_population.toLocaleString()}
          </p>
          <p className="text-base font-bold">
            Area: {ip.country_area.toLocaleString()} km²
          </p>
        </Card>
      </main>
    </>
  );
};

export default App;

