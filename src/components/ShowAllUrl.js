import React, { useState } from "react";
import StatisticsDetails from "./StatisticsDetails";
import UrlList from "./UrlList";
import { BASE_URL } from "../static";

const ShowAllUrl = () => {
  const [urlData, setUrlData] = useState(undefined);
  const [inputUrl, setInputUrl] = useState("");
  const [allUrls, setAllUrls] = useState(undefined);

  const handleShowAllUrls = async () => {
    const id = inputUrl.slice(-5);
    console.log("id to fetch ", id);

    try {
      const response = await fetch(`${BASE_URL}/url`, {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          console.log("You are unauthorized");
        } else {
          throw new Error("URL not valid");
        }
      }
      const urls = await response.json();
      console.log(urls);
      setAllUrls(urls);
    } catch (err) {
      console.log("urldetails fetch error", err);
    }
  };
  return (
    <div className="flex flex-col gap-5 h-full  border-black m-5 bg-white rounded-2xl shadow-md p-10 mx-auto justify-center items-center border-t-8 border-blue-500">
      <div className="overflow-hidden">
        <div>
          <h1 className="text-blue-500 text-2xl text-center mb-10">
            {" "}
            See Your All URLS{" "}
          </h1>
        </div>

        {!allUrls ? (
          <div className="w-full flex">
            <button
              className="bg-blue-500 font-thin text-2xl rounded-md px-4 font-bold text-white shadow-lg p-2 mx-auto"
              onClick={handleShowAllUrls}
            >
              Show My Urls
            </button>
          </div>
        ) : (
          <div className=" ">
          <UrlList urls={allUrls} />
          </div>
        )}
        {allUrls ? (
          <div className="mx-auto m-5 flex gap-5">
          <button
            className="bg-blue-500 rounded-md text-lg px-8 font-thin text-white shadow-lg p-2 mx-auto"
            onClick={handleShowAllUrls}
          >
            Refresh
          </button>
          <button
            className="bg-blue-500 rounded-md text-lg px-8 font-thin text-white shadow-lg p-2 mx-auto"
            onClick={(e)=>{setAllUrls(undefined)}}
          >
            Close
          </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ShowAllUrl;
