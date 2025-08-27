// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub() {

    const data = useLoaderData()

//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch("https://api.github.com/users/Asad-bot07")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-[360px] text-center border border-gray-200 hover:scale-105 transition-transform duration-300">
        
        {/* Avatar */}
        <img
          src={data.avatar_url}
          alt="GitHub Avatar"
          className="w-28 h-28 rounded-full mx-auto border-4 border-orange-600 shadow-md"
        />

        {/* Name */}
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          {data.name || "No Name"}
        </h1>
        <p className="text-gray-600">@{data.login}</p>

        {/* Bio */}
        {data.bio && (
          <p className="mt-4 text-gray-700 text-sm leading-relaxed italic">
            "{data.bio}"
          </p>
        )}

        {/* Stats */}
        <div className="flex justify-around mt-6 text-gray-800">
          <div className="text-center">
            <h3 className="text-xl font-bold">{data.public_repos}</h3>
            <p className="text-sm text-gray-500">Repos</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">{data.followers}</h3>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">{data.following}</h3>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4 justify-center mt-6">
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-500 transition"
          >
            GitHub
          </a>
          {data.blog && (
            <a
              href={data.blog}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-400 rounded-lg shadow hover:bg-gray-200 transition"
            >
              Portfolio
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default GitHub;

export const GithubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Asad-bot07')
    return response.json()
}