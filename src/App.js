import "./App.css";
import Video from "./Video";
import tiktokVideo from "./assets/tiktok.mp4";
import tiktokVideo2 from "./assets/tiktok2.mp4";

function App() {
  return (
    <div className="app">
      <div className="app__videos ">
        <Video
          url={tiktokVideo}
          chennal={"@uuuUsman"}
          description={"React M.E.R.N stack tiktok clone"}
          song={"jera nasha"}
          likes={"100"}
          shares={200}
          messages={"300"}
        />
        <Video
          url={tiktokVideo2}
          chennal={"@uuuUsman"}
          description={"React M.E.R.N stack tiktok clone"}
          song={"jera nasha"}
          likes={"100"}
          shares={200}
          messages={"300"}
        />
      </div>
    </div>
  );
}

export default App;
