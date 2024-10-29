import React from "react";
import { FileUpload } from "primereact/fileupload";
import { Divider } from "primereact/divider";
import imagecontent from "../../assets/IMG/HOME/Heading Content.png";
import { Button } from "primereact/button";
import GalleryImages from "../../Components/GalleryImages/GalleryImages";

const Archive = () => {
  return (
    <div className="w-[95%] h-[95vh] flex-col bg-[#fff] p-10 rounded-md flex justify-start items-center overflow-y-auto">
      <div className="w-[100%]">
        <div className="text-[20px] font-mont font-bold">Archive</div>
      </div>
      <Divider />
      <div className="w-[100%]">
        <FileUpload
          name="demo[]"
          url={"/api/upload"}
          multiple
          accept="image/*"
          maxFileSize={1000000}
          emptyTemplate={
            <p className="m-0">Drag and drop files to here to upload.</p>
          }
        />
      </div>
      <Divider />
      <div className="w-[100%] mt-8 flex justify-center">
        <div className="w-[85%] flex flex-wrap gap-10">
          <GalleryImages />
          <GalleryImages />
          <GalleryImages />
          <GalleryImages />
          <GalleryImages />
          <GalleryImages />
        </div>
      </div>
    </div>
  );
};

export default Archive;
