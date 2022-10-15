import Users from "./Components/users/Users";
import "./styles.css";
import data from "./utils/data.json";
import VideoPlayer from "./Components/video/Video";
export default function App() {
  return (
    <div className="App">
      <VideoPlayer />
      <Users />
    </div>
  );
}
