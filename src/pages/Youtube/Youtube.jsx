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
              B???n ???? b??? t???n c??ng full screen api
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
              <p id="video-name">Top 5 ch?? m??o ng???c ngh???c</p>
              <div>
                <div className="channel-info">
                  <img
                    src="https://live.staticflickr.com/65535/52729686179_041e835c8b_h.jpg"
                    alt="Toan dep try"
                  />
                  <div className="channel">
                    <div>Toan dep try</div>
                    <div>100M ng?????i ????ng k??</div>
                  </div>
                  <button>????ng k??</button>
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
                      Chia s???
                    </i>
                  </div>
                  <div>
                    <i>
                      <FontAwesomeIcon icon={faArrowsDownToLine} />
                      T???i xu???ng
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
                  <p>100N l?????t xem 9 gi??? tr?????c</p>
                  <p>#funny #cat #foryourday #hilarious #it-hcmute</p>
                </div>

                <div>
                  Em xin d??nh nh???ng l???i khen ?????n c?? gi??o Ch??u v?? nh???ng n??? l???c
                  kh??ng ng???ng ngh??? c???a c?? trong vi???c gi??p em v?????t qua kh?? kh??n
                  v?? ?????t ???????c th??nh c??ng. C?? lu??n ????? cao ch???t l?????ng h???c t???p v??
                  lu??n l???ng nghe ?? ki???n c???a em. C?? ???? cung c???p cho em nh???ng ki???n
                  th???c b??? ??ch v?? c?? c??n l?? m???t m???u c???m h???ng cho em. Em c???m ??n c??
                  r???t nhi???u ???? cho em nh???ng b??i h???c ???n t?????ng s??u s???c, ????? em c??
                  th??? ti???p thu ki???n th???c v?? ph??t tri???n k??? n??ng m???t c??ch t???t nh???t
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
                  <input type={Text} placeholder="Vi???t b??nh lu???n..." />
                  <div>
                    <i>
                      <FontAwesomeIcon icon={faFaceSmile} />
                    </i>
                    <button>H???y</button>
                    <button>B??nh lu???n</button>
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
                    <p>Qu???ng c??o</p>
                    <p>.</p>
                    <p>www.headandshoulder.com</p>
                  </div>
                </div>
                <button>Mua ngay</button>
              </div>
            </div>
            <div className="top-bar">
              <p>M???i nh???t</p>
              <p>Nh???c tr???</p>
              <p>Vui v???</p>
              <p>D??nh cho b???n</p>
              <p>M???i ng??y m???t ni???m vui</p>
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
