import React from "react";
import imagecontent from "../../assets/IMG/HOME/Heading Content.png";
import { Button } from "primereact/button";

const ImageViewDelete = () => {
  return (
    <div className="w-[100px] h-[140px]">
      <img
        className="w-[100px] h-[100px] rounded object-cover"
        src={imagecontent}
        alt="imagecontent"
      />
      <Button className="w-[100%] rounded mt-2 h-[30px]" severity="danger" label="Delete" />
      {/* <div className="w-[100%] h-[40px] bg-red-400 flex justify-center">
        <div className="cursor-pointer rounded-full flex justify-center items-center">
          <i className="pi pi-trash"></i>
        </div>
      </div> */}
    </div>
  );
};

export default ImageViewDelete;
