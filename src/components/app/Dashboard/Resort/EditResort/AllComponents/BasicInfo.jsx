// import { compressAndConvertToBase64 } from "@/src/config/base64";

// import{ DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { useDropzone } from "react-dropzone";
// import React, { useContext, useEffect, useState } from "react";
// import { DateRangePicker } from "@mui/x-date-pickers-pro";
// import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// import { userContext } from "@/src/storage/contextApi";
// import Swal from "sweetalert2";
// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from "@mui/material";
// import { Close } from "@mui/icons-material";
// import dayjs from "dayjs";
// const BasicInfo = ({
//   resortData,
//   minImages = 5,
//   maxImages = 15,
//   caruselImages,
//   setCaruselImages,
//   setDeactivitionDate,
//   deactivitionDate,
//   setDiscountTimeFrameDate,
//   discountTimeFrameDate,
//   setResortData,
//   handleImageChanges,
// }) => {
//   const { country } = useContext(userContext);
//   const [region, setRegion] = useState("");

//   useEffect(() => {
//     if (resortData?.region) {
//       setRegion(resortData?.region);
//     }
//   }, [resortData]);

//   const countryList = country.filter(
//     (item) => item.region === resortData?.region
//   );
//   // console.log({ countryList });

//   const onDrop = async (acceptedFiles) => {
//     if (resortData?.carousalImages.length + acceptedFiles.length <= maxImages) {
//       let fileError = false;
//       const base64Images = await Promise.all(
//         acceptedFiles.map((file) => {
//           if (file.size > 2 * 1024 * 1024) {
//             return (fileError = true);
//           } else {
//             return compressAndConvertToBase64(file, 800, 600, 0.8);
//           }
//         })
//       );

//       if (fileError) {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Something went wrong!",
//           footer:
//             "File size exceeds the limit (2MB). Please choose a smaller file.",
//         });
//       } else {
//         setResortData({
//           ...resortData,
//           carousalImages: [...resortData?.carousalImages, ...base64Images],
//         });
//       }
//     }
//   };
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const removeImage = (index) => {
//     const newImageData = resortData?.carousalImages.filter(
//       (image, i) => i !== index
//     );
//     setResortData({
//       ...resortData,
//       carousalImages: [...newImageData],
//     });
//   };

//   const handleDeactivationPeriodChange = (newValue) => {
//     setResortData({
//       ...resortData,
//       deactivationPeriod: {
//         startDate: newValue[0],
//         endDate: newValue[1],
//       },
//     });
//   };

  
//   const handleDiscountTimeFrame = (newValue) => {
//     setResortData({
//       ...resortData,
//       discountTimeFrame: {
//         startDate: newValue[0],
//         endDate: newValue[1],
//       },
//     });
//   };

//   // if (!resortData) {
//   //   return <div>Loading</div>;
//   // }

//   // handle carousel image

//   return (
//     <div>
//       <h2 className="text-2xl text-center font-bold mb-4">Basic Information</h2>
//       <form>
//         <div className="grid grid-cols-3 gap-x-2">
//           <div className="mb-4">
//             <FormControl fullWidth>
//               <InputLabel id="region">Region</InputLabel>
//               <Select
//                 labelId="region"
//                 id="region"
//                 name="region"
//                 label="region"
//                 onChange={(e) =>
//                   setResortData({
//                     ...resortData,
//                     region: e.target.value,
//                   })
//                 }
//                 value={resortData?.region}
//                 required
//               >
//                 {country?.map((item, index) => (
//                   <MenuItem key={index} value={item?.region}>
//                     {item?.region}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </div>
//           <div className="mb-4">
//             <FormControl
//               disabled={countryList?.length === 0 ? true : false}
//               fullWidth
//             >
//               <InputLabel id="country">Country</InputLabel>
//               <Select
//                 labelId="country"
//                 id="country"
//                 name="country"
//                 label="country"
//                 value={resortData?.country}
//                 required
//                 // onChange={(e) => handleInputChange(e)}
//                 onChange={(e) =>
//                   setResortData({
//                     ...resortData,
//                     country: e.target.value,
//                   })
//                 }
//               >
//                 {countryList[0]?.countries?.map((item, index) => (
//                   <MenuItem key={index} value={item}>
//                     {item}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//           </div>

//           <div className="mb-4">
//             <FormControl fullWidth>
//               <TextField
//                 id="district"
//                 InputProps={{
//                   style: {
//                     padding: "8px ", // Adjust the padding as needed
//                   },
//                 }}
//                 name="district"
//                 label="District"
//                 defaultValue={resortData?.district || ""}
//                 required
//                 variant="outlined"
//                 onChange={(e) =>
//                   setResortData({
//                     ...resortData,
//                     district: e.target.value,
//                   })
//                 }
//               />
//             </FormControl>
//           </div>
//         </div>

//         {/* Feature Image */}
//         {/* Add your feature image input here */}
//         {/* <div className="mb-4">
//           <label
//             className="block mb-2 text-xl font-normal text-gray-900"
//             for="featureImage"
//           >
//             Feature Image
//           </label>
//           <input
//             className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  "
//             name="featureImage"
//             id="featureImage"
//             type="file"
//             required={resortData?.featureImage ? false : true}
//             onChange={(e) =>
//               handleImageChanges("featureImage", e.target.files[0])
//             }
//           />
//           {resortData?.briefImage && (
//             <img width={120} className="mt-5" src={resortData?.featureImage} />
//           )}
//         </div>
//         */}

// <div className="my-4">
//                   <h4 className="block mb-2 text-xl font-normal text-gray-900">
//                   Feature Image{" "}
//                   </h4>
//                   <label className="flex gap-4 w-full items-center px-4 py-2 bg-white text-blue rounded-lg border tracking-wide uppercase cursor-pointer">
//                     <svg
//                       className="w-8 h-8"
//                       fill="currentColor"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
//                     </svg>
//                     <span className="mt-2 text-base leading-normal">
//                       {resortData?.featureImage? "Change Image" : "Select a file"}
//                     </span>
//                     <input
//                       type="file"
//                       name="featureImage"
//                       id="featureImage"
//                       className="hidden"
//                       required={resortData?.featureImage ? false : true}
//                       onChange={(e) =>
//                         handleImageChanges("featureImage", e.target.files[0])
//                       }
//                     />
//                   </label>
//                   {resortData?.featureImage && (
//                     <img
//                       width={120}
//                       className="mt-5"
//                       src={resortData?.featureImage}
//                       alt="Selected feature"
//                     />
//                   )}
//                 </div>


        
//         <div className="mb-4">
//           <h2 className="my-4 text-xl pb-2 border-b-2">Carousel Images</h2>

//           <div>
//             <div {...getRootProps()} style={dropzoneStyles}>
//               <input {...getInputProps()} />
//               {isDragActive ? (
//                 <p>Drop the images here...</p>
//               ) : (
//                 <p>Drag and drop images here, or click to select files</p>
//               )}
//             </div>

//             {resortData?.carousalImages?.length > 0 && (
//               <div>
//                 <h4>Uploaded Carousel Images:</h4>
//                 <div className="grid grid-cols-5 gap-x-4 space-y-4 mt-4">
//                   {resortData?.carousalImages.map((image, index) => (
//                     <div key={index} className="relative w-full h-[200px]">
//                       <img
//                         src={image}
//                         alt={`uploaded-${index}`}
//                         className="w-full h-full object-fit scale-90"
//                       />
//                       <div
//                         onClick={() => removeImage(index)}
//                         className="absolute top-0 right-0 size-8 bg-green-500 text-white rounded-full flex justify-center items-center cursor-pointer"
//                       >
//                         <Close />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {resortData?.carousalImages?.length < minImages &&
//               resortData?.carousalImages.length !== 0 && (
//                 <p style={{ color: "red" }}>
//                   Please upload a minimum of {minImages} images.
//                 </p>
//               )}

//             {resortData?.carousalImages?.length > maxImages && (
//               <p style={{ color: "red" }}>
//                 You can't upload more than {maxImages} images.
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="mb-4">
//           <h2 className="my-4 text-xl">Period of Closure</h2>

//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DateRangePicker
//               value={[
//                 dayjs(resortData?.deactivationPeriod?.startDate),
//                 dayjs(resortData?.deactivationPeriod?.endDate),
//               ]}
//               onChange={handleDeactivationPeriodChange}
//               renderInput={(startProps, endProps) => (
//                 <>
//                   <TextField {...startProps} />
//                   <Box sx={{ mx: 2 }}> to </Box>
//                   <TextField {...endProps} />
//                 </>
//               )}
//             />
//           </LocalizationProvider>

//          </div>


        
//         <div className="mb-4">
//           <label
//             htmlFor="propertyName"
//             className="block text-xl font-normal text-gray-700"
//           >
//             Name of the Resort
//           </label>
//           <input
//             type="text"
//             id="propertyName"
//             name="propertyName"
//             defaultValue={resortData?.propertyName || ""}
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             required
//             onChange={(e) =>
//               setResortData({
//                 ...resortData,
//                 propertyName: e.target.value,
//               })
//             }
//           />
//         </div>
//         <div className="mb-4">
//           <h2 className="my-4 text-xl"> Discount </h2>

//           <label
//             htmlFor="propertyName"
//             className="block text-md font-normal text-gray-700"
//           >
//             Percentage
//           </label>
//           <input
//             type="number"
//             id="propertyName"
//             name="discount"
//             defaultValue={resortData?.discount || ""}
//             className="mt-1 p-2 border border-gray-300 rounded-md w-full"
//             onChange={(e) =>
//               setResortData({
//                 ...resortData,
//                 discount: e.target.value,
//               })
//             }
//             // onChange={(e) => handleInputChange(e)}
//           />

//           <div className="my-4">
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DateRangePicker
//                 defaultValue={[
//                   dayjs(resortData?.discountTimeFrame?.startDate),
//                   dayjs(resortData?.discountTimeFrame?.endDate),
//                 ]}
//                 onChange={handleDiscountTimeFrame}
//                 renderInput={(startProps, endProps) => (
//                   <>
//                     <TextField {...startProps} />
//                     <Box sx={{ mx: 2 }}> to </Box>
//                     <TextField {...endProps} />
//                   </>
//                 )}
//               />
//             </LocalizationProvider>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// const dropzoneStyles = {
//   border: "2px dashed #cccccc",
//   borderRadius: "4px",
//   padding: "20px",
//   textAlign: "center",
//   cursor: "pointer",
// };

// const imageStyles = {
//   maxWidth: "100px",
//   maxHeight: "100px",
//   margin: "5px",
// };

// export default BasicInfo;


import { compressAndConvertToBase64 } from "@/src/config/base64";

import{ DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { useDropzone } from "react-dropzone";
import React, { useContext, useEffect, useState } from "react";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { userContext } from "@/src/storage/contextApi";
import Swal from "sweetalert2";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import dayjs from "dayjs";
const BasicInfo = ({
  resortData,
  minImages = 5,
  maxImages = 15,
  caruselImages,
  setCaruselImages,
  setDeactivitionDate,
  deactivitionDate,
  setDiscountTimeFrameDate,
  discountTimeFrameDate,
  setResortData,
  handleImageChanges,
}) => {
  const { country } = useContext(userContext);
  const [region, setRegion] = useState("");

  useEffect(() => {
    if (resortData?.region) {
      setRegion(resortData?.region);
    }
  }, [resortData]);

  const countryList = country.filter(
    (item) => item.region === resortData?.region
  );
  // console.log({ countryList });

  const onDrop = async (acceptedFiles) => {
    if (resortData?.carousalImages.length + acceptedFiles.length <= maxImages) {
      let fileError = false;
      const base64Images = await Promise.all(
        acceptedFiles.map((file) => {
          if (file.size > 2 * 1024 * 1024) {
            return (fileError = true);
          } else {
            return compressAndConvertToBase64(file, 800, 600, 0.8);
          }
        })
      );

      if (fileError) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer:
            "File size exceeds the limit (2MB). Please choose a smaller file.",
        });
      } else {
        setResortData({
          ...resortData,
          carousalImages: [...resortData?.carousalImages, ...base64Images],
        });
      }
    }
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeImage = (index) => {
    const newImageData = resortData?.carousalImages.filter(
      (image, i) => i !== index
    );
    setResortData({
      ...resortData,
      carousalImages: [...newImageData],
    });
  };

  // const handleDeactivationPeriodChange = (newValue) => {
  //   setResortData({
  //     ...resortData,
  //     deactivationPeriod: {
  //       startDate: newValue[0],
  //       endDate: newValue[1],
  //     },
  //   });
  // };
  
    const handleDeactivationDateChange = (field, newValue) => {
      setResortData((prevData) => ({
        ...prevData,
        deactivationPeriod: {
          ...prevData.deactivationPeriod,
          [field]: newValue ? dayjs(newValue).toISOString() : null, // Ensure proper format
        },
      }));
    };
    

  
  // const handleDiscountTimeFrame = (newValue) => {
  //   setResortData({
  //     ...resortData,
  //     discountTimeFrame: {
  //       startDate: newValue[0],
  //       endDate: newValue[1],
  //     },
  //   });
  // };

  const handleDiscountDateChange = (field, newValue) => {
    setResortData((prevData) => ({
      ...prevData,
      discountTimeFrame: {
        ...prevData.discountTimeFrame,
        [field]: newValue ? dayjs(newValue).toISOString() : null, // Ensure proper date format
      },
    }));
  };

  // if (!resortData) {
  //   return <div>Loading</div>;
  // }

  // handle carousel image

  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-4">Basic Information</h2>
      <form>
        <div className="grid grid-cols-3 gap-x-2">
          <div className="mb-4">
            <FormControl fullWidth>
              <InputLabel id="region">Region</InputLabel>
              <Select
                labelId="region"
                id="region"
                name="region"
                label="region"
                onChange={(e) =>
                  setResortData({
                    ...resortData,
                    region: e.target.value,
                  })
                }
                value={resortData?.region}
                required
              >
                {country?.map((item, index) => (
                  <MenuItem key={index} value={item?.region}>
                    {item?.region}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mb-4">
            <FormControl
              disabled={countryList?.length === 0 ? true : false}
              fullWidth
            >
              <InputLabel id="country">Country</InputLabel>
              <Select
                labelId="country"
                id="country"
                name="country"
                label="country"
                value={resortData?.country}
                required
                // onChange={(e) => handleInputChange(e)}
                onChange={(e) =>
                  setResortData({
                    ...resortData,
                    country: e.target.value,
                  })
                }
              >
                {countryList[0]?.countries?.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="mb-4">
            <FormControl fullWidth>
              <TextField
                id="district"
                InputProps={{
                  style: {
                    padding: "8px ", // Adjust the padding as needed
                  },
                }}
                name="district"
                label="District"
                defaultValue={resortData?.district || ""}
                required
                variant="outlined"
                onChange={(e) =>
                  setResortData({
                    ...resortData,
                    district: e.target.value,
                  })
                }
              />
            </FormControl>
          </div>
        </div>

        {/* Feature Image */}
        {/* Add your feature image input here */}
        {/* <div className="mb-4">
          <label
            className="block mb-2 text-xl font-normal text-gray-900"
            for="featureImage"
          >
            Feature Image
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none  "
            name="featureImage"
            id="featureImage"
            type="file"
            required={resortData?.featureImage ? false : true}
            onChange={(e) =>
              handleImageChanges("featureImage", e.target.files[0])
            }
          />
          {resortData?.briefImage && (
            <img width={120} className="mt-5" src={resortData?.featureImage} />
          )}
        </div>
        */}

<div className="my-4">
                  <h4 className="block mb-2 text-xl font-normal text-gray-900">
                  Feature Image{" "}
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
                      {resortData?.featureImage? "Change Image" : "Select a file"}
                    </span>
                    <input
                      type="file"
                      name="featureImage"
                      id="featureImage"
                      className="hidden"
                      required={resortData?.featureImage ? false : true}
                      onChange={(e) =>
                        handleImageChanges("featureImage", e.target.files[0])
                      }
                    />
                  </label>
                  {resortData?.featureImage && (
                    <img
                      width={120}
                      className="mt-5"
                      src={resortData?.featureImage}
                      alt="Selected feature"
                    />
                  )}
                </div>


        
        <div className="mb-4">
          <h2 className="my-4 text-xl pb-2 border-b-2">Carousel Images</h2>

          <div>
            <div {...getRootProps()} style={dropzoneStyles}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the images here...</p>
              ) : (
                <p>Drag and drop images here, or click to select files</p>
              )}
            </div>

            {resortData?.carousalImages?.length > 0 && (
              <div>
                <h4>Uploaded Carousel Images:</h4>
                <div className="grid grid-cols-5 gap-x-4 space-y-4 mt-4">
                  {resortData?.carousalImages.map((image, index) => (
                    <div key={index} className="relative w-full h-[200px]">
                      <img
                        src={image}
                        alt={`uploaded-${index}`}
                        className="w-full h-full object-fit scale-90"
                      />
                      <div
                        onClick={() => removeImage(index)}
                        className="absolute top-0 right-0 size-8 bg-green-500 text-white rounded-full flex justify-center items-center cursor-pointer"
                      >
                        <Close />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resortData?.carousalImages?.length < minImages &&
              resortData?.carousalImages.length !== 0 && (
                <p style={{ color: "red" }}>
                  Please upload a minimum of {minImages} images.
                </p>
              )}

            {resortData?.carousalImages?.length > maxImages && (
              <p style={{ color: "red" }}>
                You can't upload more than {maxImages} images.
              </p>
            )}
          </div>
        </div>
        {/* <div className="mb-4">
          <h2 className="my-4 text-xl">Period of Closure</h2>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              value={[
                dayjs(resortData?.deactivationPeriod?.startDate),
                dayjs(resortData?.deactivationPeriod?.endDate),
              ]}
              onChange={handleDeactivationPeriodChange}
              renderInput={(startProps, endProps) => (
                <>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </>
              )}
            />
          </LocalizationProvider>

         </div> */}


<div className="mb-4">
      <h2 className="my-4 text-xl">Period of Closure</h2>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="flex gap-6">
          {/* Start Date Picker */}
          <div>
            <p className="mb-1 text-lg font-normal">Start Date</p>
            <DatePicker
              value={resortData?.deactivationPeriod?.startDate ? dayjs(resortData.deactivationPeriod.startDate) : null}
              onChange={(newDate) => handleDeactivationDateChange('startDate', newDate)}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>

          {/* End Date Picker */}
          <div>
            <p className="mb-1 text-lg font-normal">End Date</p>
            <DatePicker
              value={resortData?.deactivationPeriod?.endDate ? dayjs(resortData.deactivationPeriod.endDate) : null}
              onChange={(newDate) => handleDeactivationDateChange('endDate', newDate)}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </div>
      </LocalizationProvider>
    </div>
  


        
        <div className="mb-4">
          <label
            htmlFor="propertyName"
            className="block text-xl font-normal text-gray-700"
          >
            Name of the Resort
          </label>
          <input
            type="text"
            id="propertyName"
            name="propertyName"
            defaultValue={resortData?.propertyName || ""}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
            onChange={(e) =>
              setResortData({
                ...resortData,
                propertyName: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-4">
          <h2 className="my-4 text-xl"> Discount </h2>

          <label
            htmlFor="propertyName"
            className="block text-md font-normal text-gray-700"
          >
            Percentage
          </label>
          <input
            type="number"
            id="propertyName"
            name="discount"
            defaultValue={resortData?.discount || ""}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            onChange={(e) =>
              setResortData({
                ...resortData,
                discount: e.target.value,
              })
            }
            // onChange={(e) => handleInputChange(e)}
          />

          {/* <div className="my-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateRangePicker
                defaultValue={[
                  dayjs(resortData?.discountTimeFrame?.startDate),
                  dayjs(resortData?.discountTimeFrame?.endDate),
                ]}
                onChange={handleDiscountTimeFrame}
                renderInput={(startProps, endProps) => (
                  <>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                  </>
                )}
              />
            </LocalizationProvider>
          </div> */}

<div className="my-4">
      <h2 className="my-4 text-xl">Discount Time Frame</h2>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="flex gap-6">
          {/* Start Date Picker */}
          <div>
            <p className="mb-1 text-lg font-normal">Start Date</p>
            <DatePicker
              value={resortData?.discountTimeFrame?.startDate ? dayjs(resortData.discountTimeFrame.startDate) : null}
              onChange={(newDate) => handleDiscountDateChange('startDate', newDate)}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>

          {/* End Date Picker */}
          <div>
            <p className="mb-1 text-lg font-normal">End Date</p>
            <DatePicker
              value={resortData?.discountTimeFrame?.endDate ? dayjs(resortData.discountTimeFrame.endDate) : null}
              onChange={(newDate) => handleDiscountDateChange('endDate', newDate)}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </div>
      </LocalizationProvider>
    </div>
        </div>
      </form>
    </div>
  );
};

const dropzoneStyles = {
  border: "2px dashed #cccccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

const imageStyles = {
  maxWidth: "100px",
  maxHeight: "100px",
  margin: "5px",
};

export default BasicInfo;

