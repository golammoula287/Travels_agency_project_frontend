import dynamic from "next/dynamic";
import React from "react";
import { useState } from "react";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
const PropertyDesc = ({ resortData, handleImageChanges, setResortData }) => {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold">
        {/*Brief Description of the Resort */}
        Resort
      </h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl  mb-2"
            htmlFor="propertyDesc"
          >
            Resort Description
          </label>
          {/* <textarea
            onChange={(e) =>
              setResortData({
                ...resortData,
                briefDescription: e.target.value,
              })
            }
            className="shadow appearance-none border  w-full py-2 px-3 rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="propertyDesc"
            rows="4"
            required
            defaultValue={resortData?.briefDescription || ""}
            name="briefDescription"
          
          /> */}

          <ReactQuill
            id="propertyDesc"
            modules={{ toolbar: false }} // Disable toolbar
            formats={[]} // No formats
            name="briefDescription"
            value={resortData?.briefDescription || ""}
            onChange={(value) =>
              setResortData({
                ...resortData,
                briefDescription: value,
              })
            }
            className="shadow appearance-none border   w-full py-2 px-3 rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ minHeight: "12rem" }}
          />
        </div>
        {/* <div className="mb-4">
          <label
            className="block mb-2 text-xl font-normal text-gray-900"
            for="propertyImage"
          >
            Resort Image
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  "
            name="briefImage"
            id="propertyImage"
            type="file"
            required={resortData?.briefImage ? false : true}
            onChange={(e) =>
              handleImageChanges("briefImage", e.target.files[0])
            }
          />
          {resortData?.briefImage && (
            <img width={120} className="mt-5" src={resortData?.briefImage} />
          )}
        </div> */}
       <div className="my-4">
                  <h4 className="block mb-2 text-xl font-normal text-gray-900">
                  Resort Image{" "}
                  </h4>
                  <label className="flex gap-4 w-full items-center px-4 py-2 bg-white text-blue rounded-lg border tracking-wide uppercase cursor-pointer">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">
                      {resortData?.briefImage? "Change Image" : "Select a file"}
                    </span>
                    <input
                      type="file"
                      name="briefImage"
                      id="propertyImage"
                      className="hidden"
                      required={resortData?.briefImage ? false : true}
                      onChange={(e) =>
                        handleImageChanges("briefImage", e.target.files[0])
                      }
                    />
                  </label>
                  {resortData?.briefImage && (
                    <img
                      width={120}
                      className="mt-5"
                      src={resortData?.briefImage}
                      alt="Selected feature"
                    />
                  )}
                </div>



      </form>
    </div>
  );
};

export default PropertyDesc;
