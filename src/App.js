import { useState, useEffect } from "react";
import Player from "./components/Player";
function App() {
  const [songs]=useState([
    {
      title: "Alone",
      artist: "Alan Walker",
      img_src: "./images/Alone.jpg",
      src: "./music/Alone.mp3"
    },
    {
      title: "Attention",
      artist: "Charlie Puth",
      img_src: "./images/attention.jpg",
      src: "./music/Attention.mp3"
    },
    {
      title: "Beautiful People",
      artist: "Ed Sheeran (ft. Khalid)",
      img_src: "./images/bp.jpg",
      src: "./music/Beautiful-People.mp3"
    },
    {
      title: "Lose Yourself",
      artist: "Eminem",
      img_src: "./images/ly.webp",
      src: "./music/Lose-Yourself.mp3"
    }
  ]);
  
  const [currentSongIndex, setCurrentSongIndex]= useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex +1 );

  useEffect(() => {
    setNextSongIndex(()=>{
      if (currentSongIndex +1 >songs.length-1){
        return 0;
      } else {
        return currentSongIndex +1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
