import React from "react";
import TextInput from "../../Components/Inputs/TextInput";
import eventscontent from "../../assets/IMG/HOME/Events Content.png";
import TextareaInput from "../../Components/Inputs/TextareaInput";
import FileInput from "../../Components/Inputs/FileInput";

const EventsContent = ({ eventscontentclose }) => {
  return (
    <div className="w-[100%] h-screen top-0 left-0 bg-black/80 blur-[0.2px]  flex justify-center items-center fixed z-50">
      <div className="w-[90%] h-[90vh] bg-white rounded">
        <div className="w-[100%] h-[8vh] flex ">
          <div className="w-[95%] h-[8vh] flex justify-center">
            <p className="w-[95%] h-[8vh] flex justify-start items-center font-mont font-bold text-[18px]">
              Events Content
            </p>
          </div>
          <div className="w-[5%] h-[8vh] flex justify-center items-center">
            <button
              onClick={() => {
                eventscontentclose();
              }}
            >
              <i className="text-[20px] fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <hr />
        <div className="w-[100%] mt-[1vh] flex flex-col h-[79vh] gap-y-8 overflow-y-auto p-10">
          <div className="w-[100%] h-[50vh]">
            <img
              className="w-[100%] h-[90%] object-cover rounded-lg"
              src={eventscontent}
              alt="headingcontent"
            />
          </div>
          <div>
            <h1 className="font-mont font-bold text-[20px]">Event - 1</h1>
          </div>
          <div className="flex gap-x-10 justify-center items-center">
            <FileInput label="Upload a Event - 1" />
            <button className="bg-black h-12 text-[#fff] px-10 rounded font-mont font-bold">
              Save
            </button>
          </div>
          <div>
            <TextInput label="Heading ( Event - 1 )" />
          </div>
          <div>
            <TextareaInput rows={3} label="Content ( Event - 1 )" />
          </div>

          <div>
            <h1 className="font-mont font-bold text-[20px]">Event - 2</h1>
          </div>
          <div className="flex gap-x-10 justify-center items-center">
            <FileInput label="Upload a Event - 2" />
            <button className="bg-black h-12 text-[#fff] px-10 rounded font-mont font-bold">
              Save
            </button>
          </div>
          <div>
            <TextInput label="Heading ( Event - 2 )" />
          </div>
          <div>
            <TextareaInput rows={3} label="Content ( Event - 2 )" />
          </div>

          <div>
            <h1 className="font-mont font-bold text-[20px]">Event - 3</h1>
          </div>
          <div className="flex gap-x-10 justify-center items-center">
            <FileInput label="Upload a Event - 3" />
            <button className="bg-black h-12 text-[#fff] px-10 rounded font-mont font-bold">
              Save
            </button>
          </div>
          <div>
            <TextInput label="Heading ( Event - 3 )" />
          </div>
          <div>
            <TextareaInput rows={3} label="Content ( Event - 3 )" />
          </div>

          <div>
            <h1 className="font-mont font-bold text-[20px]">Event - 4</h1>
          </div>
          <div className="flex gap-x-10 justify-center items-center">
            <FileInput label="Upload a Event - 4" />
            <button className="bg-black h-12 text-[#fff] px-10 rounded font-mont font-bold">
              Save
            </button>
          </div>
          <div>
            <TextInput label="Heading ( Event - 4 )" />
          </div>
          <div>
            <TextareaInput rows={3} label="Content ( Event - 4 )" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsContent;
