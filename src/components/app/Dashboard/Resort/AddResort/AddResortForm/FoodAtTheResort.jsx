import React from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
const FoodAtTheResort = ({
  handleFoodsChange,
  totalSteps,
  currentStep,
  setCurrentStep,
  increaseProgress,
  decreaseProgress,
  resortData,
}) => {
  console.log({ resortData });
  // go to next step ------------
  const goToNextStep = (e) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
    increaseProgress();
  };
  // go to previous step ------------
  const goToPrevStep = () => {
    setCurrentStep(currentStep - 1);
    decreaseProgress();
  };
  return (
    <>
      <h2 className="my-4 text-xl pb-2 border-b-2">Food at the Resort</h2>
      {/* divingTitle picture */}
      <form onSubmit={goToNextStep}>
        {/* <div className="my-4">
          <h4 className="block mb-2 text-xl font-normal text-gray-900">
            Image of plant-based food at the resort{" "}
            <span className="font-normal">
            (Please upload 2:3 ratio images; otherwise, they will be automatically cropped)
            </span>
          </h4>
          <label className=" flex gap-4 w-full items-center px-4 py-2 bg-white text-blue rounded-lg border  tracking-wide uppercase  cursor-pointer ">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">Select a file</span>
            <input
              type="file"
              className="hidden"
              accept=".jpg,.png,.jpeg,.webp"
              name="image"
              required={resortData?.food?.image ? false : true}
              onChange={(e) => handleFoodsChange(e)}
            />
          </label>
          {resortData?.food?.image && (
            <img width={120} className="mt-5" src={resortData?.food?.image} />
          )}
        </div> */}


        {/*Updated With Remove Button  */}
                        <div className="my-4">
                  <h4 className="block mb-2 text-xl font-normal text-gray-900">
                    Image of plant-based food at the resort{" "}
                    <span className="font-normal">
                      (Please upload 2:3 ratio images; otherwise, they will be automatically cropped)
                    </span>
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
                      {resortData?.food?.image ? "Change Image" : "Select a file"}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept=".jpg,.png,.jpeg,.webp"
                      name="image"
                      required={!resortData?.food?.image}
                      onChange={(e) => handleFoodsChange(e)}
                    />
                  </label>
                  {resortData?.food?.image && (
                    <img
                      width={120}
                      className="mt-5"
                      src={resortData?.food?.image}
                      alt="Selected food"
                    />
                  )}
                </div>








        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl  mb-2"
            htmlFor="foodAtTheResortDesc"
          >
            Plant-based Food Description
          </label>
          <ReactQuill
            className="shadow appearance-none border h-40  w-full py-2 px-3 rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="foodAtTheResortDesc"
            required
            value={resortData?.food?.description}
            name="description"
            modules={{
              toolbar: false,
            }}
            onChange={(value) =>
              handleFoodsChange({ target: { name: "description", value } })
            }
            theme="snow" // This is the default theme; you can customize it as needed
          />
          {/* <textarea
            className="shadow appearance-none border  w-full py-2 px-3 rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="foodAtTheResortDesc"
            rows="4"
            name="description"
            defaultValue={resortData?.food?.description}
            required
            onChange={(e) => handleFoodsChange(e)}
          /> */}
        </div>
        <div className="flex justify-between mt-10">
          {currentStep > 1 && (
            <button
              onClick={goToPrevStep}
              className="custom_red_color  px-10 py-3 text-white rounded-md font-semibold"
            >
              Previous
            </button>
          )}
          {currentStep < totalSteps ? (
            <button
              type="submit"
              className="bg-green-500 px-10 py-3 text-white rounded-md font-semibold"
            >
              Next
            </button>
          ) : (
            <button
              // onClick={submitData}
              className="bg-green-500 px-10 py-3 text-white rounded-md font-semibold"
            >
              Finish
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default FoodAtTheResort;




// import React from "react";
// import dynamic from "next/dynamic";

// const ReactQuill = dynamic(import("react-quill"), { ssr: false });
// import "react-quill/dist/quill.snow.css";

// const FoodAtTheResort = ({
//   handleFoodsChange,
//   totalSteps,
//   currentStep,
//   setCurrentStep,
//   increaseProgress,
//   decreaseProgress,
//   resortData,
// }) => {
//   console.log({ resortData });

//   // Go to next step
//   const goToNextStep = (e) => {
//     e.preventDefault();
//     setCurrentStep(currentStep + 1);
//     increaseProgress();
//   };

//   // Go to previous step
//   const goToPrevStep = () => {
//     setCurrentStep(currentStep - 1);
//     decreaseProgress();
//   };

//   return (
//     <>
//       <h2 className="my-4 text-xl pb-2 border-b-2">Food at the Resort</h2>
//       <form onSubmit={goToNextStep}>
//         {/* Image Upload Section */}
//         <div className="my-4">
//           <h4 className="block mb-2 text-xl font-normal text-gray-900">
//             Image of plant-based food at the resort{" "}
//             <span className="font-normal">
//               (Please upload 2:3 ratio images; otherwise, they will be
//               automatically cropped)
//             </span>
//           </h4>
//           <label className="flex gap-4 w-full items-center px-4 py-2 bg-white text-blue rounded-lg border tracking-wide uppercase cursor-pointer">
//             <svg
//               className="w-8 h-8"
//               fill="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
//             </svg>
//             <span className="mt-2 text-base leading-normal">Select a file</span>
//             <input
//               type="file"
//               className="hidden"
//               accept=".jpg,.png,.jpeg,.webp"
//               name="image"
//               required={resortData?.food?.image ? false : true}
//               onChange={(e) => handleFoodsChange("image", e.target.files[0])}
//             />
//           </label>

//           {resortData?.food?.image && (
//             <div className="mt-5 w-fit relative">
//               <img
//                 width={120}
//                 className="mr-4 pt-2 top-1"
//                 src={resortData.food.image}
//                 alt="Food Preview"
//               />
//               <button
//                 onClick={() => handleFoodsChange("image", null)}
//                 type="button"
//                 className="absolute top-0 right-0 size-8 bg-green-500 text-white rounded-full flex justify-center items-center cursor-pointer"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 9.293L14.707 4.586a1 1 0 1 1 1.414 1.414L11.414 10l4.707 4.707a1 1 0 1 1-1.414 1.414L10 11.414l-4.707 4.707a1 1 0 1 1-1.414-1.414L8.586 10 3.879 5.293a1 1 0 1 1 1.414-1.414L10 9.293z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Description Input */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-xl mb-2"
//             htmlFor="foodAtTheResortDesc"
//           >
//             Plant-based Food Description
//           </label>
//           <ReactQuill
//             className="shadow appearance-none border h-40 w-full py-2 px-3 rounded-md text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="foodAtTheResortDesc"
//             value={resortData?.food?.description || ""}
//             onChange={(value) =>
//               handleFoodsChange("description", value)
//             }
//             theme="snow"
//             modules={{
//               toolbar: false,
//             }}
//           />
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-between mt-10">
//           {currentStep > 1 && (
//             <button
//               onClick={goToPrevStep}
//               className="custom_red_color px-10 py-3 text-white rounded-md font-semibold"
//             >
//               Previous
//             </button>
//           )}
//           {currentStep < totalSteps ? (
//             <button
//               type="submit"
//               className="bg-green-500 px-10 py-3 text-white rounded-md font-semibold"
//             >
//               Next
//             </button>
//           ) : (
//             <button
//               className="bg-green-500 px-10 py-3 text-white rounded-md font-semibold"
//             >
//               Finish
//             </button>
//           )}
//         </div>
//       </form>
//     </>
//   );
// };

// export default FoodAtTheResort;
