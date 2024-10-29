import React from "react";
import { Button } from "primereact/button";
import imagecontent from "../../assets/IMG/HOME/Heading Content.png"

const GalleryImages = () => {
  return (
    <div className="w-[200px] flex flex-col">
      <img
        src={imagecontent}
        className="w-[200px] h-[200px] object-cover rounded"
        alt="imagecontent"
      />
      <Button className="mt-3" label="Delete" severity="danger" />
    </div>
  );
};

export default GalleryImages;
