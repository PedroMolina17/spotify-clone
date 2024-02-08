import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

const HomePage = () => {
  return (
    <div className="flex w-full bg-[#121212] my-2 mr-2 rounded-xl ">
      <div className="flex w-full justify-between items-center h-16 rounded-tr-xl rounded-tl-xl bg-[#212121] px-4">
        <div className="flex text-[#f6f6f6] gap-2">
          <div className="bg-[#0a0a0a] rounded-full p-2">
            <FaChevronLeft></FaChevronLeft>
          </div>
          <div className="bg-[#0a0a0a] rounded-full p-2">
            <FaChevronRight></FaChevronRight>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-[#f6f6f6] text-black py-1 px-4 rounded-xl text-sm font-semibold">
            Explorar Premium
          </button>
          <button className="bg-[#0e0e0e] text-white py-1 px-4 rounded-xl text-sm font-semibold flex justify-between items-center ">
            <MdOutlineDownloading></MdOutlineDownloading>
            Instalar Aplicacion
          </button>
          <div className="bg-[#0e0e0e] rounded-full text-white justify-center items-center flex p-2 text-xl">
            <IoIosNotificationsOutline></IoIosNotificationsOutline>
          </div>
          <div className="bg-[#0e0e0e] rounded-full text-white justify-center items-center flex p-2 text-xl">
            <IoIosNotificationsOutline></IoIosNotificationsOutline>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default HomePage;
