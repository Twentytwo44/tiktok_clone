"use client";
import { Video } from "./component/video";
import { Action_bar } from "./component/action_bar";
import { Music } from "./component/music";
import { Description } from "./component/description";
export default function Home() {
  const videoData = [
    {
      urlKey: "https://gifer.com/embed/1cR",
      likeCount: 423,
      commentCount: 300,
      favoriteCount: 764,
      shareCount: 352,
      Musicname: "Hualoan - (Poomthai Promkote)",
      description: "This is a video of a baby boss #babyboss #bossbaby #baby #fyp",
      Name : "Baby.Boss",


    },
    {
      urlKey: "https://gifer.com/embed/I8TU",
      likeCount: 69,
      commentCount: 325,
      favoriteCount: 15,
      shareCount: 2413,
      Musicname: "IRONMAN - (Tony Stark)",
      description: "This is iron man #ironman #marvel #fyp",
      Name : "IRON.Man",

    },
  ];

  return (
    <div className="snap-y snap-mandatory  h-screen w-screen overflow-scroll overflow-x-hidden  bg-zinc-950">
      {videoData.map((video, index) => (
        <div className="snap-center m-20 flex items-center justify-center relative rounded-xl ">
          <div
            key={index}
            className="snap-center relative items-center justify-center"
          >
            <Video url={video.urlKey} />
            <div className="absolute bottom-12 right-3">
              <Action_bar
                likeCount={video.likeCount}
                shareCount={video.shareCount}
                favoriteCount={video.favoriteCount}
                commentCount={video.commentCount}
              />
              
            </div>
            <div className="absolute bottom-[80px] left-6">
              <Description Name={video.Name} description={video.description}/>  
            </div>
            <div className="absolute bottom-3 left-5">
              <Music Musicname={video.Musicname} /> 
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}