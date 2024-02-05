import React from 'react'
import { BASE_URL } from '../static'

const UrlList = ({urls}) => {
  return (
    <div>
        {  <table className="min-w-full divide-y divide-gray-200">
  <thead>
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Redirect URL
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Shortened URL
      </th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Clicks
      </th>
    </tr>
  </thead>
  <tbody>
    {urls.allUrls.map((url) => (
      <tr key={url.id} className="bg-blue-50 rounded-lg ">
        <td className="px-6 py-4 whitespace-nowrap">{url.redirectURL}</td>
        <td className="px-6 py-4 whitespace-nowrap">
          {`${BASE_URL}/url/get/${url.shortURL}`}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">{url.clicks}</td>
      </tr>
    ))}
  </tbody>
</table>

            
        }
    </div>
  )
}

export default UrlList
