import React, { useState } from "react";
import StatisticsDetails from "./StatisticsDetails";
import { useNavigate } from "react-router";
import { BASE_URL } from "../static";
import Loader from "./Loader";
const Statistics = () => {
  const [urlData, setUrlData] = useState(undefined);
  const [inputUrl, setInputUrl] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleAnalyse = async () => {
    setIsLoading(true);
    setErrorMessage("");
    const id = inputUrl.slice(-5);
    console.log("id to fetch ", id);
    if (!id) {
      setErrorMessage("Enter Valid Url !");
      setIsLoading(false);
    } else {
      try {
        const response = await fetch(`${BASE_URL}/url/get/data/${id}`, {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        if (!response.ok) {
          if (response.status == 401) {
            navigate("/");
          }
        }
        const URL = await response.json();
        setUrlData(URL);
      } catch (err) {
        setErrorMessage("Enter Valid Url !");
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <div className="flex flex-col gap-10 h-full  border-black m-5 bg-white rounded-2xl shadow-md p-10 mx-auto justify-center items-center border-t-8 border-blue-500">
      <div>
        <h1 className="text-blue-500 text-2xl text-center mb-10">
          {" "}
          Statistcs{" "}
        </h1>
      </div>
      <div className="w-full flex flex-col gap-10">
        <div>
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Enter Shortened Url Here"
          className=" border-b-4 border-blue-500 w-full text-lg focus:outline-none"
        />
        {errorMessage ? <p className=" text-pretty text-sm text-red-400">{errorMessage}</p> : '' }
        </div>
        <button
          className=" flex justify-center bg-blue-500 rounded-md px-4 font-bold text-white shadow-lg p-2"
          onClick={handleAnalyse}
        >
          {isLoading ? <Loader size={25} color={"#ffffff"} /> : "Analyse"}
        </button>
      </div>
      {urlData ? (
        <StatisticsDetails
          URL={urlData}
          setInputUrl={setInputUrl}
          setUrlData={setUrlData}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Statistics;
