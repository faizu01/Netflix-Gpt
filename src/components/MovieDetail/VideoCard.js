export const VideoCard = ({ video }) => {
  // console.log(video);
  return (
    <div className="text-white px-2">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.key}?si=Eq_D3FvKBa8PDoiN`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoCard;
