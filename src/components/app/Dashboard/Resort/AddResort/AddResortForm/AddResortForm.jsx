import React, { useState } from "react";
import BasicInfo from "./BasicInfo";
import PropertyDesc from "./PropertyDesc";
import Accommodation from "./Accommodation";
import Diving from "./Diving";
import Room from "./Room";
import FoodAtTheResort from "./FoodAtTheResort";
import CheckFeilds from "./CheckFeilds";
import { compressAndConvertToBase64 } from "@/src/config/base64";
import { baseUrl } from "@/src/config/serverConfig";
import Swal from "sweetalert2";
import { useContext } from "react";
import { useRouter } from "next/router";
import { userContext } from "@/src/storage/contextApi";
import EnvQAndA from "./EnvQAndA";
const AddResortForm = ({ increaseProgress, decreaseProgress }) => {
  const rotuer = useRouter();
  const { submitLoader, setSubmitLoader } = useContext(userContext);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;
  const [listofPackages, setListOfPackages] = useState([]);
  const [caruselImages, setCaruselImages] = useState([]);
  const [deactivitionDate, setDeactivitionDate] = useState({});
  const [discountTimeFrameDate, setDiscountTimeFrameDate] = useState({});
  const [resortData, setResortData] = useState({
    accommodation: {},
    diving: {},
  });
  // console.log("deactivations: ", deactivitionDate);
  // console.log("discount time: ", discountTimeFrameDate);

  // console.log(resortData);
  const handleInputChange = (e) => {
    let newValue = { ...resortData };
    if (e.target.name === "special") {
      newValue[e.target.name] = e.target.checked;
    } else if (e.target.name === "equipmentAvailable") {
      newValue[e.target.name] = e.target.checked;
    } else if (e.target.name === "diveCourseAvailable") {
      newValue[e.target.name] = e.target.checked;
    } else {
      newValue[e.target.name] = e.target.value;
    }
    setResortData(newValue);
  };

  const handleAccommodationChange = async (event) => {
    const { name, value } = event.target;
    if (name === "image") {
      const files = event.target.files[0];
      if (files && files.size > 2 * 1024 * 1024) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer:
            "File size exceeds the limit (2MB). Please choose a smaller file.",
        });
      } else {
        const compressedBase64 = await compressAndConvertToBase64(
          files,
          800,
          600,
          0.8
        );
        setResortData((prevState) => ({
          ...prevState,
          accommodation: {
            ...prevState.accommodation,
            [name]: compressedBase64,
          },
        }));
      }
    } else {
      setResortData((prevState) => ({
        ...prevState,
        accommodation: {
          ...prevState.accommodation,
          [name]: value, // Using computed property name
        },
      }));
    }
  };

  //Updated handleAccomodationImages Fuction 

  // const handleAccommodationChange = async (field, file) => {
  //   if (file && file instanceof File) {
  //     // Check if file size exceeds 2MB
  //     if (file.size > 2 * 1024 * 1024) {
  //       return Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Something went wrong!",
  //         footer: "File size exceeds the limit (2MB). Please choose a smaller file.",
  //       });
  //     }
  
  //     // Compress and convert to base64 if the file is valid
  //     const compressedBase64 = await compressAndConvertToBase64(file, 800, 600, 0.8);
  //     setResortData((prevData) => ({
  //       ...prevData,
  //       accommodation: {
  //         ...prevData.accommodation,
  //         [field]: compressedBase64, // Store the compressed base64 string
  //       },
  //     }));
  //   } else {
  //     // If file is null (removing the image), set the field to null
  //     setResortData((prevData) => ({
  //       ...prevData,
  //       accommodation: {
  //         ...prevData.accommodation,
  //         [field]: null, // Remove the image
  //       },
  //     }));
  //   }
  // };
  

//   const handleAccommodationChange = async (field, valueOrFile) => {
//   if (valueOrFile instanceof File) {
//     // Handle file uploads
//     if (valueOrFile.size > 2 * 1024 * 1024) {
//       return Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//         footer: "File size exceeds the limit (2MB). Please choose a smaller file.",
//       });
//     }

//     // Compress and convert to base64
//     const compressedBase64 = await compressAndConvertToBase64(valueOrFile, 800, 600, 0.8);
//     setResortData((prevData) => ({
//       ...prevData,
//       accommodation: {
//         ...prevData.accommodation,
//         [field]: compressedBase64, // Update the specific field with the base64 string
//       },
//     }));
//   } else {
//     // Handle non-file updates (e.g., text fields)
//     setResortData((prevData) => ({
//       ...prevData,
//       accommodation: {
//         ...prevData.accommodation,
//         [field]: valueOrFile, // Update the specific field with the value
//       },
//     }));
//   }
// };








  const handleDivingChange = async (event) => {
    const { name, value } = event.target;
    if (name === "image") {
      const files = event.target.files[0];
      if (files && files.size > 2 * 1024 * 1024) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer:
            "File size exceeds the limit (2MB). Please choose a smaller file.",
        });
      } else {
        const compressedBase64 = await compressAndConvertToBase64(
          files,
          800,
          600,
          0.8
        );
        setResortData((prevState) => ({
          ...prevState,
          diving: {
            ...prevState.diving,
            [name]: compressedBase64,
          },
        }));
      }
    } else {
      setResortData((prevState) => ({
        ...prevState,
        diving: {
          ...prevState.diving,
          [name]: value,
        },
      }));
    }
  };


  // //Updated  handleDivingChange  Function 

  // const handleDivingChange = async (event) => {
  //   const { name, files, value } = event.target;
  
  //   // Check if the event target is a file input (image)
  //   if (files) {
  //     // If files are selected, handle the file change logic
  //     const file = files[0];
  
  //     // Check if a file is selected
  //     if (file) {
  //       // Check if the file size exceeds 2MB
  //       if (file.size > 2 * 1024 * 1024) {
  //         return Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: "Something went wrong!",
  //           footer: "File size exceeds the limit (2MB). Please choose a smaller file.",
  //         });
  //       }
  
  //       // Compress and convert the image to base64 (we assume you have a `compressAndConvertToBase64` function)
  //       const compressedBase64 = await compressAndConvertToBase64(file, 800, 600, 0.8);
  
  //       // Update state with the compressed base64 image
  //       setResortData((prevState) => ({
  //         ...prevState,
  //         diving: {
  //           ...prevState.diving,
  //           [name]: compressedBase64,
  //         },
  //       }));
  //     } else {
  //       // If no file is selected (i.e., image is removed), update the state to null
  //       setResortData((prevState) => ({
  //         ...prevState,
  //         diving: {
  //           ...prevState.diving,
  //           [name]: null,
  //         },
  //       }));
  //     }
  //   } else {
  //     // If the event target is a text field (description), update the description state
  //     setResortData((prevState) => ({
  //       ...prevState,
  //       diving: {
  //         ...prevState.diving,
  //         [name]: value.trim(), // Use `.trim()` to remove any extra whitespace
  //       },
  //     }));
  //   }
  // };
  
  
  


  const handleFoodsChange = async (event) => {
    const { name, value } = event.target;
    if (name === "image") {
      const files = event.target.files[0];
      if (files && files.size > 2 * 1024 * 1024) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer:
            "File size exceeds the limit (2MB). Please choose a smaller file.",
        });
      } else {
        const compressedBase64 = await compressAndConvertToBase64(
          files,
          800,
          600,
          0.8
        );
        setResortData((prevState) => ({
          ...prevState,
          food: {
            ...prevState.food,
            [name]: compressedBase64,
          },
        }));
      }
    } else {
      setResortData((prevState) => ({
        ...prevState,
        food: {
          ...prevState.food,
          [name]: value, // Using computed property name
        },
      }));
    }
  };


  // Update  handleFoodsChange

  // const handleFoodsChange = async (field, valueOrFile) => {
  //   if (valueOrFile instanceof File) {
  //     // Handle file uploads
  //     if (valueOrFile.size > 2 * 1024 * 1024) {
  //       return Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "File size exceeds the limit (2MB). Please choose a smaller file.",
  //       });
  //     }
  
  //     try {
  //       // Compress and convert the file to base64
  //       const compressedBase64 = await compressAndConvertToBase64(valueOrFile, 800, 600, 0.8);
  //       setResortData((prevData) => ({
  //         ...prevData,
  //         food: {
  //           ...prevData.food,
  //           [field]: compressedBase64, // Update the specific field with the base64 string
  //         },
  //       }));
  //     } catch (error) {
  //       console.error("Error compressing the file:", error);
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "Something went wrong while processing the file.",
  //       });
  //     }
  //   } else {
  //     // Handle non-file updates (e.g., description or other text fields)
  //     setResortData((prevData) => ({
  //       ...prevData,
  //       food: {
  //         ...prevData.food,
  //         [field]: valueOrFile, // Update the specific field with the value
  //       },
  //     }));
  //   }
  // };
  
  
  





  const handleRoomsChange = async (event) => {
    const { name, value } = event.target;
    if (name === "image") {
      const files = event.target.files[0];
      if (files && files.size > 2 * 1024 * 1024) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer:
            "File size exceeds the limit (2MB). Please choose a smaller file.",
        });
      } else {
        const compressedBase64 = await compressAndConvertToBase64(
          files,
          800,
          600,
          0.8
        );
        setResortData((prevState) => ({
          ...prevState,
          rooms: {
            ...prevState.rooms,
            [name]: compressedBase64, // Using computed property name
          },
        }));
      }
    } else {
      setResortData((prevState) => ({
        ...prevState,
        rooms: {
          ...prevState.rooms,
          [name]: value, // Using computed property name
        },
      }));
    }
  };
  const handleEnvChange = (event) => {
    const { name, value } = event.target;

    setResortData((prevState) => ({
      ...prevState,
      environmentalQuestions: {
        ...prevState.environmentalQuestions,
        [name]: value,
      },
    }));
  };

  const handleImageChanges = async (name, value) => {
    const files = value;
    if (files && files.size > 2 * 1024 * 1024) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer:
          "File size exceeds the limit (2MB). Please choose a smaller file.",
      });
    } else {
      const compressedBase64 = await compressAndConvertToBase64(files);
      let newValue = { ...resortData };
      newValue[name] = compressedBase64;
      setResortData(newValue);
    }
  };


  // updated 

//   const handleImageChanges = (field, file) => {
//   // Check if the file is valid
//   if (file && file instanceof File) {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setResortData((prevData) => ({
//         ...prevData,
//         [field]: reader.result, // Storing the file's URL (base64 string)
//       }));
//     };
//     reader.readAsDataURL(file);
//   } else {
//     // If null (image removed), just set it to null
//     setResortData((prevData) => ({
//       ...prevData,
//       [field]: null,
//     }));
//   }
// };


  // console.log("form add", resortData);

  /* submit resort */
  const handleResortSubmit = (e) => {
    e.preventDefault();
    setSubmitLoader(true);
    fetch(`${baseUrl}/resorts/create-resort`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("access-token"),
      },
      body: JSON.stringify({
        ...resortData,
        // listOfPackages: [...listofPackages],
        carousalImages: [...caruselImages],
        deactivationPeriod: {
          ...deactivitionDate,
        },
        discountTimeFrame: {
          ...discountTimeFrameDate,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Resort Was Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setSubmitLoader(false);
          rotuer.push("/dashboard/resort");
        }
      })
      .catch((err) => {
        console.log(err);
        setSubmitLoader(false);
      });
  };
  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
    increaseProgress();
  };

  const goToPrevStep = () => {
    setCurrentStep(currentStep - 1);
    decreaseProgress();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfo
            resortdata={resortData}
            caruselImages={caruselImages}
            setCaruselImages={setCaruselImages}
            setListOfPackages={setListOfPackages}
            listofPackages={listofPackages}
            resortData={resortData}
            setResortData={setResortData}
            handleInputChange={handleInputChange}
            handleImageChanges={handleImageChanges}
            setDeactivitionDate={setDeactivitionDate}
            deactivitionDate={deactivitionDate}
            discountTimeFrameDate={discountTimeFrameDate}
            setDiscountTimeFrameDate={setDiscountTimeFrameDate}
            totalSteps={totalSteps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            increaseProgress={increaseProgress}
            decreaseProgress={decreaseProgress}
          />
        );
      case 2:
        return (
          <PropertyDesc
            resortData={resortData}
            handleInputChange={handleInputChange}
            handleImageChanges={handleImageChanges}
            totalSteps={totalSteps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            increaseProgress={increaseProgress}
            decreaseProgress={decreaseProgress}
          />
        );
      case 3:
        return (
          <Accommodation
            resortData={resortData}
            handleAccommodationChange={handleAccommodationChange}
            totalSteps={totalSteps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            increaseProgress={increaseProgress}
            decreaseProgress={decreaseProgress}
          />
        );
      case 4:
        return (
          <Diving
            resortData={resortData}
            handleDivingChange={handleDivingChange}
            totalSteps={totalSteps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            increaseProgress={increaseProgress}
            decreaseProgress={decreaseProgress}
          />
        );
      case 5:
        return (
          <FoodAtTheResort
            resortData={resortData}
            handleFoodsChange={handleFoodsChange}
            totalSteps={totalSteps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            increaseProgress={increaseProgress}
            decreaseProgress={decreaseProgress}
          />
        );
      // case 6:
      //   return (
      //     <Room
      //       resortData={resortData}
      //       handleRoomsChange={handleRoomsChange}
      //       totalSteps={totalSteps}
      //       currentStep={currentStep}
      //       setCurrentStep={setCurrentStep}
      //       increaseProgress={increaseProgress}
      //       decreaseProgress={decreaseProgress}
      //     />
      //   );
      case 6:
        return (
          <CheckFeilds
            resortData={resortData}
            handleInputChange={handleInputChange}
            setResortData={setResortData}
            totalSteps={totalSteps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            increaseProgress={increaseProgress}
            decreaseProgress={decreaseProgress}
          />
        );
      case 7:
        return (
          <EnvQAndA
            resortData={resortData}
            handleEnvChange={handleEnvChange}
            totalSteps={totalSteps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            increaseProgress={increaseProgress}
            decreaseProgress={decreaseProgress}
            handleResortSubmit={handleResortSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* <ProgressBar currentStep={currentStep} totalSteps={totalSteps} /> */}
      {renderStep()}
      {/* <div className='flex justify-between  mt-10'>
                {currentStep > 1 && <button onClick={goToPrevStep} className="custom_red_color  px-10 py-3 text-white rounded-md font-semibold">Previous</button>}
                {currentStep < totalSteps ? <button className="bg-green-500 px-10 py-3 text-white rounded-md font-semibold" onClick={goToNextStep}>Next</button> : <button className="bg-green-500 px-10 py-3 text-white rounded-md font-semibold" onClick={handleResortSubmit}>Finish</button>}
            </div> */}
    </>
  );
};

export default AddResortForm;
