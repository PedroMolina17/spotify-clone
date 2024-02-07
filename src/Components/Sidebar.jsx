import { GrHomeRounded } from "react-icons/gr";
import { GrSearch } from "react-icons/gr";
import { VscLibrary } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlus, FaListUl } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-black w-96 h-screen  text-white">
      <div className="bg-[#121212] m-2 rounded-xl gap-y-4 flex flex-col justify-center text-lg">
        <div className="m-2">
          <div className="flex items-center my-2">
            <GrHomeRounded className="mx-4 my-2 mr-6 text-xl" /> Inicio
          </div>
          <div className="flex items-center my-2">
            <GrSearch className="mx-4 mr-6 my-2 text-xl" /> Buscar
          </div>
        </div>
      </div>

      <div className="bg-[#121212] mx-2 flex flex-col rounded-tr-xl rounded-tl-xl  text-lg">
        <div className="m-2 flex justify-between items-center">
          <div className="flex items-center">
            <VscLibrary className="mx-4 mr-6 text-xl" /> Tu biblioteca
          </div>
          <div className="flex items-center text-md gap-x-4">
            <FaPlus />
            <FaArrowRight />
          </div>
        </div>
        <div className="flex mx-2 gap-2 my-4 ">
          <button className="bg-[#2a2a2a] rounded-md px-2 py-1">
            Playlists
          </button>
          <button className="bg-[#2a2a2a] rounded-md px-2 py-1">
            Artistas
          </button>
          <button className="bg-[#2a2a2a] rounded-md px-2 py-1">
            Almbunes
          </button>
        </div>
        <div className=" flex flex-col">
          <div className="flex justify-between items-center text-sm">
            <div>
              <GrSearch className="mx-4  " />
            </div>
            <div className="flex items-center">
              Recientes
              <FaListUl className="mx-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
