import { compressAndConvertToBase64 } from "@/src/config/base64";
import dynamic from "next/dynamic";
import React from "react";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const Accommodation = ({ resortData, handleResortDataChange }) => {
  return (
    <div>
      <h2 className="text-2xl text-center font-bold">Accommodation</h2>
      <form>
        {/* <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            for="accommodationImage"
          >
            Accommodation Image
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  "
            name="image"
            id="accommodationImage"
            type="file"
            required={resortData?.accommodation?.image ? false : true}
            // onChange={async (e) =>
            //   setAccommodation({
            //     ...accommodation,
            //     image: await compressAndConvertToBase64(
            //       e.target.files[0],
            //       800,
            //       600,
            //       0.8
            //     ),
            //   })
            // }
            onChange={(e) => handleResortDataChange(e, "accommodation")}
          />
          {resortData?.accommodation?.image && (
            <img
              width={120}
              className="mt-5"
              src={resortData?.accommodation?.image}
            />
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
                      {resortData?.accommodation?.image? "Change Image" : "Select a file"}
                    </span>
                    <input
                      type="file"
                      name="image"
                      id="accommodationImage"
                      className="hidden"
                      required={resortData?.accommodation?.image ? false : true}
                      onChange={(e) => handleResortDataChange(e, "accommodation")}
                    />
                  </label>
                  {resortData?.accommodation?.image && (
                    <img
                      width={120}
                      className="mt-5"
                      src={resortData?.accommodation?.image}
                      alt="Selected feature"
                    />
                  )}
                </div>






        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl text-normal mb-2"
            htmlFor="propertyDesc"
          >
            Accommodation Description
          </label>
          {/* <textarea
            className="shadow appearance-none border  w-full py-2 px-3 rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="propertyDesc"
            rows="4"
            name="description"
            defaultValue={resortData?.accommodation?.description}
            required           
            onChange={(e) => handleResortDataChange(e, "accommodation")}
          /> */}
          <ReactQuill
            id="propertyDesc"
            name="description"
            required
            value={resortData?.accommodation?.description || ""}
            onChange={(value) =>
              handleResortDataChange(
                { target: { name: "description", value } },
                "accommodation"
              )
            }
            modules={{ toolbar: false }} // Disable toolbar
            formats={[]} // No formats
            className="shadow appearance-none border  w-full py-2 px-3 rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ minHeight: "8rem" }} // To match the textarea rows="4"
          />
        </div>
      </form>
    </div>
  );
};

export default Accommodation;
