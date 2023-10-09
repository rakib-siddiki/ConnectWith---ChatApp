import { LuSearch } from 'react-icons/Lu';
import { BsThreeDotsVertical } from 'react-icons/Bs';

const SearchBox = () => {
   return (
      <>
         <form className="relative">
            <div className="text-2xl cursor-pointer absolute top-1/2 left-[23px] translate-y-[-50%]">
               <LuSearch />
            </div>

            <input className="focus:outline-none font-poppins text-base font-medium text-black py-[17px] pl-[78px] pr-12 w-full shadow-homeCardShadow rounded-custom" type="text" placeholder="Search" />

            <div className="text-2xl cursor-pointer text-themeColor absolute top-1/2 right-[22px] translate-y-[-50%]">
               <BsThreeDotsVertical />
            </div>
         </form>
      </>
   )
}

export default SearchBox