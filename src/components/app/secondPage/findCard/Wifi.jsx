import { userContext } from "@/src/storage/contextApi";
import { useContext } from "react";

const Wifi = ({ facilities }) => {
  const { searchValues } = useContext(userContext);

  let hasWifi;

  if (
    searchValues?.tabValue === "Resorts" ||
    searchValues?.property === "resort"
  ) {
    hasWifi = facilities?.includes("Internet and Wifi");
  } else {
    hasWifi = facilities?.includes("Wi-fi onboard");
  }
  return (
    <div>
      <h1 className="md:text-[25px] pt-1 font-light font-outfit leading-[24px] text-[14px] text-[#0080ff]">
        <span className="md:text-[25px] pt-1 font-bold sm:font-light font-outfit leading-[24px] text-[14px] text-[#0080ff]">Wi-Fi:</span>{" "}
        {hasWifi ? "Available" : "Unavailable"}
      </h1>
    </div>
  );
};

export default Wifi;
