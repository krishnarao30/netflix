import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.css";
import video1 from "../video/EP.1.v1.1639203279.720p.mp4"

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={video1}
      />
    </div>
  );
}