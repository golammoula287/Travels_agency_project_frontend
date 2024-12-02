import dynamic from "next/dynamic";
import React from "react";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
const LiveaBoard = ({ boatData, setBoatData, handleBoatDataChange }) => {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold">Liveaboard</h1>
      {/* divingTitle picture */}
      <form>
        {/* <div className="mb-4">
          <label
            className="block mb-2 text-xl font-normal text-gray-900"
            for="divingImage"
          >
            Liveaboard Image
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  "
            name="Picture"
            id="divingImage"
            required={boatData?.liveABoard?.Picture ? false : true}
            type="file"
            // onChange={(e) => handleLiveboarChange(e)}
            onChange={(e) => handleBoatDataChange(e, "liveABoard")}
          />
          {boatData?.liveABoard?.Picture && (
            <img
              width={120}
              className="mt-5"
              src={boatData?.liveABoard?.Picture}
            />
          )}
        </div> */}

        <div className="my-4">
                  <h4 className="block mb-2 text-xl font-normal text-gray-900">
                  Liveaboard Image{" "}
                    
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
                      {boatData?.liveABoard?.Picture ? "Change Image" : "Select a file"}
                    </span>
                    <input
                      type="file"
                      name="Picture"
                      id="divingImage"
                      className="hidden"
                      
                      required={boatData?.liveABoard?.Picture ? false : true}
                      onChange={(e) => handleBoatDataChange(e, "liveABoard")}
                    />
                  </label>
                  {boatData?.liveABoard?.Picture && (
                    <img
                      width={120}
                      className="mt-5"
                      src={boatData?.liveABoard?.Picture}
                    />
                  )}
                </div>




        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl  mb-2"
            htmlFor="divingDesc"
          >
            Liveaboard Description
          </label>
          <ReactQuill
            id="divingDesc"
            name="description"
            required
            value={boatData?.liveABoard?.description || ""}
            onChange={(value) =>
              handleBoatDataChange(
                { target: { name: "description", value } },
                "liveABoard"
              )
            }
            modules={{ toolbar: false }} // Disable toolbar
            formats={[]} // No formats
            className="shadow appearance-none border w-full py-2 px-3 rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            style={{ minHeight: "8rem" }} // To match the textarea rows="4"
          />
          {/* <textarea
            className="shadow appearance-none border  w-full py-2 px-3 rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="divingDesc"
            name="description"
            defaultValue={boatData?.liveABoard?.description || ""}
            required
            rows="4"          
            onChange={(e) => handleBoatDataChange(e, "liveABoard")}
          /> */}
        </div>
      </form>
    </div>
  );
};

export default LiveaBoard;
