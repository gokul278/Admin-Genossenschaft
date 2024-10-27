import React, { useState } from "react";
import HomeContent from "./02-HomeContent";
import headingcontent from "../../assets/IMG/HOME/Heading Content.png";
import detailscontent from "../../assets/IMG/HOME/Details Content.png";
import fetaurescontent from "../../assets/IMG/HOME/Features Content.png";
import eventscontentimg from "../../assets/IMG/HOME/Events Content.png";
import DetailsContent from "./03-DetailsContent";
import FeaturesContent from "./04-FeaturesContent";
import EventsContent from "./05-EventsContent";

const Home = () => {
  const [homecontent, setHomecontent] = useState(false);
  const homecontentclose = () => {
    setHomecontent(false);
  };

  const [detailsContent, setDetailsContent] = useState(false);
  const detaildcontentclose = () => {
    setDetailsContent(false);
  };

  const [featuresContent, setFeaturesContent] = useState(false);
  const featuresContentclose = () => {
    setFeaturesContent(false);
  };

  const [eventscontent, setEventsContent] = useState(false);
  const eventscontentclose = () => {
    setEventsContent(false);
  };

  return (
    <div className="w-[95%] h-[95vh] flex-col bg-[#fff] rounded-md flex flex-wrap justify-start items-center overflow-y-auto">
      {homecontent ? <HomeContent homecontentclose={homecontentclose} /> : null}
      {detailsContent ? (
        <DetailsContent detaildcontentclose={detaildcontentclose} />
      ) : null}
      {featuresContent ? (
        <FeaturesContent featuresContentclose={featuresContentclose} />
      ) : null}
      {eventscontent ? (
        <EventsContent eventscontentclose={eventscontentclose} />
      ) : null}

      <div className=" w-[80%] flex flex-wrap justify-start items-center gap-10 my-10">
        <div
          onClick={() => {
            setHomecontent(true);
          }}
          style={{
            background: `url(${headingcontent})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[300px] h-[200px] bg-black/90 rounded-lg shadow-lg cursor-pointer flex justify-center items-end px-5 py-5"
        >
          <p className="font-mont text-[20px] font-bold bg-white text-[#000] px-2 rounded">
            Heading Content
          </p>
        </div>

        <div
          onClick={() => {
            setDetailsContent(true);
          }}
          style={{
            background: `url(${detailscontent})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[300px] h-[200px] bg-black rounded-lg shadow-lg cursor-pointer flex justify-center items-end px-5 py-5"
        >
          <p className="font-mont text-[20px] font-bold bg-white text-[#000] px-2 rounded">
            Details Content
          </p>
        </div>

        <div
          onClick={() => {
            setFeaturesContent(true);
          }}
          style={{
            background: `url(${fetaurescontent})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[300px] h-[200px] bg-black rounded-lg shadow-lg cursor-pointer flex justify-center items-end px-5 py-5"
        >
          <p className="font-mont text-[20px] font-bold bg-white text-[#000] px-2 rounded">
            Features Content
          </p>
        </div>

        <div
          onClick={() => {
            setEventsContent(true);
          }}
          style={{
            background: `url(${eventscontentimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="w-[300px] h-[200px] bg-black rounded-lg shadow-lg cursor-pointer flex justify-center items-end px-5 py-5"
        >
          <p className="font-mont text-[20px] font-bold bg-white text-[#000] px-2 rounded">
            Events Content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
