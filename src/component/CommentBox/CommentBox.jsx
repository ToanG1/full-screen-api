import style from "./CommentBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
function CommentBox() {
  return (
    <>
      <div className="home">
        <img
          src="https://live.staticflickr.com/65535/52732085360_f1be771c95_c.jpg"
          alt="user comment"
        />
        <div>
          <div className="username">
            Toan dep try so 2<p>18 phút trước</p>
          </div>
          <div className="comment-content">
            Video hài hước quá nhưng nhỏ quá nên phải mở fullscreen
          </div>
          <div className="comment-button">
            <i>
              <FontAwesomeIcon icon={faThumbsUp} />
            </i>
            <i>
              <FontAwesomeIcon icon={faThumbsDown} />
            </i>
            <p>Phản hồi</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default CommentBox;
