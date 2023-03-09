import style from "./VideoBox.scss";

function VideoBox() {
  return (
    <>
      <div className="sidebar-video-home">
        <img
          src="https://live.staticflickr.com/65535/52731749819_006595a453_h.jpg"
          alt="videos"
        />
        <div className="video-info">
          <div className="video-name">
            Nhạc hot 2023 nghe là ghiền nhe các bạn hehehe
          </div>
          <div className="channel-name">New music 4U</div>
          <div className="video-info">
            <p>42N lượt xem</p>
            <p>.</p>
            <p>3 tháng trước</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default VideoBox;
