import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "How to learn to dance",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test One",
    views: "22k",
    timestamp: "2 days ago",
  },
  {
    title: "How to learn to play guitar",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test Two",
    views: "32k",
    timestamp: "23 days ago",
  },
  {
    title: "How to learn to run",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test Three",
    views: "42k",
    timestamp: "22 days ago",
  },
  {
    title: "How to learn to walk",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test Four",
    views: "52k",
    timestamp: "21 days ago",
  },{
    title: "How to learn to dance",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test One",
    views: "22k",
    timestamp: "2 days ago",
  },
  {
    title: "How to learn to play guitar",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test Two",
    views: "32k",
    timestamp: "23 days ago",
  },
  {
    title: "How to learn to run",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test Three",
    views: "42k",
    timestamp: "22 days ago",
  },
  {
    title: "How to learn to walk",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test Four",
    views: "52k",
    timestamp: "21 days ago",
  },{
    title: "How to learn to dance",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test One",
    views: "22k",
    timestamp: "2 days ago",
  },
  {
    title: "How to learn to play guitar",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test Two",
    views: "32k",
    timestamp: "23 days ago",
  },
  {
    title: "How to learn to run",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test Three",
    views: "42k",
    timestamp: "22 days ago",
  },
  {
    title: "How to learn to walk",
    image: "thumb1.png",
    thumbImage: "thumb2.png",
    author: "Test Four",
    views: "52k",
    timestamp: "21 days ago",
  }
];
export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard
            title={video.title}
            image={video.image}
            thumbImage={video.thumbImage}
            author={video.author}
            views={video.views}
            timestamp={video.timestamp}
          ></VideoCard>
        </div>
      ))}
    </div>
  );
};
