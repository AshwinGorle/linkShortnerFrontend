import React from "react";
import { BASE_URL } from "../static";

const UrlList = ({ urls }) => {
  return (
    <div className="overflow-x-auto">
      {urls.allUrls.map((url) => (
        <div key={url.id} className="bg-blue-100 rounded-lg p-4 mb-4">
          <div className="mb-2">
            <span className="font-bold text-gray-700">Redirect URL: </span>
            {url.redirectURL}
          </div>
          <div className="mb-2">
            <span className="font-bold text-gray-700">Shortened URL: </span>
            {`${BASE_URL}/url/get/${url.shortURL}`}
          </div>
          <div>
            <span className="font-bold text-gray-700">Clicks: </span>
            {url.clicks}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UrlList;
