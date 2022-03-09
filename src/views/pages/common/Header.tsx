import React from "react";
const Header = () => {
  return (
    <div className="container mx-auto  ">
      <div className="flex items-center justify-between">
        <div>
          <img
            src="https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png"
            alt="logo"
            height="30px"
            width="130px"
          />
        </div>
        <div className="flex">
          <input
            className="p-2 rounded-lg my-1 outline-none border-none bg-slate-400 text-black"
            type="text"
            name=""
            id=""
            placeholder="Search Here product"
          />
          <button className=" px-1 rounded-lg">Search </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
