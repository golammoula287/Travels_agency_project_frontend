const Nitrox = ({ facilities }) => {
  console.log(facilities);
  const hasWifi = facilities?.includes("Nitrox");
  return (
    <div>
      <h1 className="md:text-[25px] pt-1 font-light font-outfit leading-[24px] text-[14px] text-[#0080ff]">
        <span className="md:text-[25px] pt-1 font-bold sm:font-light font-outfit leading-[24px] text-[14px] text-[#0080ff]">Nitrox:</span>{" "}
        {hasWifi ? "Available" : "Unavailable"}
      </h1>
    </div>
  );
};

export default Nitrox;
