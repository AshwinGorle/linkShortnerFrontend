import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Loader from "./Loader";
import { useRef } from "react";
import InputField from "./InputField";
import QRCode from "qrcode";
import QRcode from "./QRcode";
import { useNavigate } from "react-router";
import { BASE_URL } from "../static";

const LinkShortner = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    status : false,
    message : ""
  })
  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [shortUrl, setShortUrl] = useState("");
  const textAreaRef = useRef(null);

  const [customLink, setCustomLink] = useState(false);
  const [linkPassword, setLinkPassword] = useState(false);
  const [linkAvailableDate, setLinkAvailableDate] = useState(false);
  const [linkExpiryDate, setLinkExpiryDate] = useState(false);
  const [linkQR, setLinkQR] = useState(false);

  const [customLinkInput, setCustomLinkInput] = useState("");
  const [linkPasswordInput, setLinkPasswordInput] = useState("");
  const [linkAvailableDateInput, setLinkAvailableDateInput] = useState("");
  const [linkExpiryDateInput, setLinkExpiryDateInput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleInputUrl = (e) => {
    setInputUrl(e.target.value);
    setShortUrl("");
    console.log(inputUrl);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setCopied(false);
    try {
      const response = await fetch(`${BASE_URL}/url`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization" : localStorage.getItem("token")
        },
        body: JSON.stringify({
          redirectUrl: inputUrl,
          customLink:
            customLink == true && customLinkInput != ""
              ? customLinkInput
              : null,
          availableDate:
            linkAvailableDate == true && linkAvailableDateInput != ""
              ? linkAvailableDateInput
              : null,
          expiryDate:
            linkExpiryDate == true && linkExpiryDateInput != ""
              ? linkExpiryDateInput
              : null,
          password:
            linkPassword == true && linkPasswordInput != ""
              ? linkPasswordInput
              : null,
        }),
      });
      if(response.status == 401){
        navigate('/');
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
     
      console.log("dataaa ", data);
      setTimeout(async () => {
        setLoading(false);
        setShortUrl(`${BASE_URL}/url/get/${data.shortURL}`)
      },2000);


      setInputUrl(data.shortUrl);
    } catch (error) {
      console.log("this is the error : ",error)
    } finally {
     
    }
  };

  const handleClickToCopy = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand("copy");
      setCopied(true);
      console.log("copied");
    }
  };

  return (
    (error.status == true) ? <h1>{error.message}</h1> :
    <div className=" flex flex-col gap-5 h-full  border-black m-5 bg-white rounded-2xl shadow-md p-10 mx-auto justify-center items-center border-t-8 border-blue-500">
      <h1 className=" text-blue-500  text-2xl text-center mb-10">
        {" "}
        URL SHORTNER{" "}
      </h1>

      <div className="w-full  flex flex-col gap-4">
        <input
          type="text"
          value={inputUrl}
          onChange={handleInputUrl}
          placeholder="Paste Link Here"
          className=" border-b-4 border-blue-500 w-full text-md focus:outline-none"
        />
        {shortUrl != "" ? (
          <div className="flex justify-center ">
            <div className="text-sm rounded-l-md bg-slate-200  p-2 text-blue-500 font-mono">
              {shortUrl}
            </div>
            <button
              className="bg-blue-500 rounded-r-md px-4 font-bold text-white shadow-lg p-2 "
              onClick={handleClickToCopy}
            >
              {!copied ? "Copy" : "Copied" }
            </button>
          </div>
        ) : (
          ""
        )}
        {loading == true ? <Loader /> : ""}
      </div>
      {shortUrl != null ? (
        <div>
          <textarea
            className=" border-balck border-2 rext-black "
            value={shortUrl}
            ref={textAreaRef}
            readOnly
            style={{ position: "absolute", left: "-9999px" }}
          >
            {shortUrl}
          </textarea>
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-wrap gap-2  bg-red">
        <Checkbox name="Customise link" setStatus={setCustomLink} />
        <Checkbox name="Link with password" setStatus={setLinkPassword} />
        <Checkbox name="Available Date" setStatus={setLinkAvailableDate} />
        <Checkbox name="Expiry Date" setStatus={setLinkExpiryDate} />
        <Checkbox name="Generate QR code" setStatus={setLinkQR} />
      </div>
      <div className=" w-full flex flex-col gap-10">
        {customLink == true ? (
          <InputField
            label="Enter Custom Link"
            value={customLinkInput}
            setValue={setCustomLinkInput}
          />
        ) : (
          ""
        )}
        {linkPassword == true ? (
          <InputField
            label="Enter Passowrd :"
            value={linkPasswordInput}
            setValue={setLinkPasswordInput}
          />
        ) : (
          ""
        )}

        {linkAvailableDate == true ? (
          <label className="font-bold font-mono text-blue-600 text-lg">
            {" "}
            Select Availablity Date :
            <input
              className="block w-full p-2 border text-slate-600 border-slate-500 rounded focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              type="date"
              value={linkAvailableDateInput}
              onChange={(e) => setLinkAvailableDateInput(e.target.value)}
            />
          </label>
        ) : (
          ""
        )}

        {linkExpiryDate == true ? (
          <label className="font-bold font-mono text-blue-600 text-lg">
            {" "}
            Select Expiry Date :
            <input
              className="block w-full p-2 border text-slate-600 border-slate-500 rounded focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              type="date"
              value={linkExpiryDateInput}
              onChange={(e) => setLinkExpiryDateInput(e.target.value)}
            />
          </label>
        ) : (
          ""
        )}

        {linkQR == true && inputUrl != "" ? (
          <QRcode texToEncode={inputUrl} />
        ) : (
          <div>
            {document.getElementById("container")
              ? (document.getElementById("container").innerHTML = "")
              : ""}{" "}
          </div>
        )}
      </div>
      <div>
        <button
          className="bg-blue-500 rounded-md text-lg px-8 font-thin text-white shadow-lg p-2 mx-auto"
          onClick={handleSubmit}
        >
          Shorten Url
        </button>
      </div>
    </div>
  );
};

export default LinkShortner;
