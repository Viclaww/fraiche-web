import Image from "next/image";
import chef from "@/images/Chef.png";

const MeetTeam = () => {
  return (
    <div className=" w-full gap-8 items-center my-10 justify-center flex flex-col md:flex-row px-8 md:px-20">
      <Image
        src={chef}
        width={0}
        height={0}
        className="md:w-1/4 w-2/3 rounded-3xl"
        alt="name"
      />
      <div className="flex flex-col gap-8 justify-evenly h-full md:w-1/3 font-medium">
        <div className="flex flex-col">
          <h6 className="text-xl text-fraiche-yellow">About Chef</h6>
          <h2 className="text-3xl md:text-4xl">What we believe in</h2>
        </div>

        <p>
          Chef Itoro believes in sustainable, farm-to-table dining, using fresh,
          local ingredients to craft innovative dishes that celebrate natural
          flavors and nourish the soul, ensuring every meal is a unique
          experience.
        </p>

        <div className="flex flex-col">
          <span className="text-2xl">ItoroAbasi Ufot</span>
          <span>Chef UI</span>
        </div>
      </div>
    </div>
  );
};
export default MeetTeam;
