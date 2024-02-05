import React from "react";
import StaticField from "./StaticField";

const StatisticsDetails = ({ URL, setInputUrl, setUrlData }) => {
  const { redirectURL, clicks, availableDate, expiryDate, shortURL, password } = URL;
  console.log("URL data ", URL);
  return (
    <div className="w-full flex flex-col gap-7 ">
      <StaticField tittle={"Targeted Link : "} data={redirectURL} />
      <StaticField tittle={"No. of Clicks : "} data={clicks} />
      <StaticField tittle={"Availability Date : "} data={availableDate} />
      <StaticField tittle={"Expirty Date : "} data={expiryDate} />
      <StaticField
        tittle={"Shorted URL : "}
        data={`http://localhost:3000/url/get/${shortURL}`}
      />
      <StaticField tittle={"password : "} data={password ? "true" : "N/A"} />
      <button
        className="bg-blue-500 rounded-md px-4 font-bold text-white shadow-lg p-2 mx-auto"
        onClick={() => {setInputUrl(""); setUrlData(undefined)}}
      >
        Clear
      </button>
    </div>
  );
};

export default StatisticsDetails;
