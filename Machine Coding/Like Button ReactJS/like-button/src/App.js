import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { CgSpinner } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import spinner from "../src/assets/spinner.gif";
import {useState} from 'react';

function App() {
  const [liked,setLiked] = useState(false);
  const [isFetching,setIsFetching] = useState(false);
  const [error,setError]= useState(null);

  const handleLikeUnlike = async () => {
    setIsFetching(true);
    setError(null);
    setLiked(!liked);

    try {
      const response = await fetch(`https://www.greatfrontend.com/api/questions/like-button`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          action: liked ? "unlike" : "like"
        })
      });
      // Handle the response here
      // console.log(await response.json());
      if(!response.status>=200 && response.status<300){
        setLiked(!liked);
      }else{
        const res = await response.json();
        setError(res.message);
        return;
      }

    } finally{
      setIsFetching(false);
    }
  }
    
  return (
    <div className="App">
    <button disabled={isFetching} className={`likeBtn ${liked ? "liked" :"" }`} onClick={handleLikeUnlike}>
    {isFetching? <img src={spinner} /> : <CiHeart />} {liked ? "Liked" : "Like"}

    </button>
    {error && <div>{error}</div>}

    </div>
  );
}

export default App;
