import style from "./Youtube.scss";
import { ReactDOM, useState } from "react";
import Modal from "react-modal";
import screenfull from "screenfull";
import ReactPlayer from "react-player";
import CommentBox from "../../component/CommentBox/CommentBox";
import VideoBox from "../../component/VideoBox/VideoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faThumbsUp,
  faThumbsDown,
  faFaceSmile,
} from "@fortawesome/free-regular-svg-icons";
import {
  faVideo,
  faMagnifyingGlass,
  faEllipsis,
  faShare,
  faArrowsDownToLine,
} from "@fortawesome/free-solid-svg-icons";

const customStyles = {
  content: {
    width: "50%",
    height: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "url(https://live.staticflickr.com/5161/5256472478_c8aa02e4e5_h.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};

function Youtube() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  if (screenfull.isEnabled) {
    screenfull.onchange(() => {
      screenfull.exit();
      openModal();
    });
  } else {
    screenfull.onchange(() => {
      closeModal();
    });
  }

  return (
    <>
      <div className="home">
        <div className="hided-component">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <p
              style={{
                width: "fit-content",
                height: "20px",
                padding: "5px 10px",
                color: "white",
                backgroundColor: "red",
                borderRadius: "20px",
              }}
            >
              Bạn đã bị tấn công full screen api
            </p>

            <button onClick={closeModal}>close</button>
          </Modal>
        </div>
        <div className="header">
          <div className="logo">
            <i>
              <FontAwesomeIcon icon={faYoutube} />
            </i>
            <p>Mytube</p>
            <p id="float-text">VN</p>
          </div>
          <div className="search-bar">
            <input type={Text} placeholder="Search"></input>
            <i>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
          </div>
          <div className="user-info">
            <i>
              <FontAwesomeIcon icon={faVideo} />
            </i>
            <i>
              <FontAwesomeIcon icon={faBell} />
            </i>
            <img
              src="https://live.staticflickr.com/4262/35075693942_ba34faa9cf_h.jpg"
              alt="my avatar is a bird"
            />
          </div>
        </div>
        <div className="body">
          <div className="video-home">
            <div className="video-player">
              <ReactPlayer
                url={"https://youtu.be/5WrHZPo-UX8"}
                controls={true}
                width="100%"
                height="400px"
                id="video-target"
              />
            </div>
            <div className="video-info">
              <p id="video-name">Top 5 chú mèo ngốc nghếc</p>
              <div>
                <div className="channel-info">
                  <img
                    src="https://live.staticflickr.com/65535/52729686179_041e835c8b_h.jpg"
                    alt="Toan dep try"
                  />
                  <div className="channel">
                    <div>Toan dep try</div>
                    <div>100M người đăng ký</div>
                  </div>
                  <button>Đăng ký</button>
                </div>
                <div className="video-button">
                  <div>
                    <i>
                      <FontAwesomeIcon icon={faThumbsUp} />
                      99K
                    </i>
                    |
                    <i>
                      <FontAwesomeIcon icon={faThumbsDown} />
                    </i>
                  </div>
                  <div>
                    <i>
                      <FontAwesomeIcon icon={faShare} />
                      Chia sẻ
                    </i>
                  </div>
                  <div>
                    <i>
                      <FontAwesomeIcon icon={faArrowsDownToLine} />
                      Tải xuống
                    </i>
                  </div>
                  <div>
                    <i>
                      <FontAwesomeIcon icon={faEllipsis} />
                    </i>
                  </div>
                </div>
              </div>
              <div className="description">
                <div>
                  <p>100N lượt xem 9 giờ trước</p>
                  <p>#funny #cat #foryourday #hilarious #it-hcmute</p>
                </div>

                <div>
                  Em xin dành những lời khen đến cô giáo Châu vì những nỗ lực
                  không ngừng nghỉ của cô trong việc giúp em vượt qua khó khăn
                  và đạt được thành công. Cô luôn đề cao chất lượng học tập và
                  luôn lắng nghe ý kiến của em. Cô đã cung cấp cho em những kiến
                  thức bổ ích và cô còn là một mẫu cảm hứng cho em. Em cảm ơn cô
                  rất nhiều đã cho em những bài học ấn tượng sâu sắc, để em có
                  thể tiếp thu kiến thức và phát triển kỹ năng một cách tốt nhất
                </div>
              </div>
            </div>
            <div className="video-comment">
              <div className="video-comment-top-sidebar">
                <img
                  src="https://live.staticflickr.com/4262/35075693942_ba34faa9cf_h.jpg"
                  alt="my avatar"
                />
                <div className="comment-input">
                  <input type={Text} placeholder="Viết bình luận..." />
                  <div>
                    <i>
                      <FontAwesomeIcon icon={faFaceSmile} />
                    </i>
                    <button>Hủy</button>
                    <button>Bình luận</button>
                  </div>
                </div>
              </div>
              <div className="comment-list">
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
                <CommentBox />
              </div>
            </div>
          </div>
          <div className="video-sidebar">
            <div className="ads">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgtDDZ_Ss-8UFyQZ2YKgNECmMiaH0oGw-_emUvzrs7pANQg_GAfezNWbbyrDZOOq16mk&usqp=CAU"
                  alt="ads"
                />
              </div>
              <div className="ads-info">
                <img
                  src="https://m.media-amazon.com/images/S/aplus-media/vc/19b2ef3b-e146-427b-8e63-b1ee6ff89fb9._SR285,285_.png"
                  alt=""
                />
                <div>
                  <div>Head & shoulder</div>
                  <div className="ads-ent">
                    <p>Quảng cáo</p>
                    <p>.</p>
                    <p>www.headandshoulder.com</p>
                  </div>
                </div>
                <button>Mua ngay</button>
              </div>
            </div>
            <div className="top-bar">
              <p>Mới nhất</p>
              <p>Nhạc trẻ</p>
              <p>Vui vẻ</p>
              <p>Dành cho bạn</p>
              <p>Mỗi ngày một niềm vui</p>
            </div>
            <div className="video-list">
              <VideoBox />
              <VideoBox />
              <VideoBox />
              <VideoBox />
              <VideoBox />
              <VideoBox />
              <VideoBox />
              <VideoBox />
              <VideoBox />
              <VideoBox />
              <VideoBox />
              <VideoBox />
              <VideoBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Youtube;
