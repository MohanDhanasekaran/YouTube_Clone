import { useEffect, useState } from "react"
import { API_KEY } from "../../data"
import { Link, useParams } from "react-router-dom"
import VideoCard from "../Feed/VideoCard"
const SearchResults = ()=>{

    const [data,setData] = useState([])
    const {query} = useParams()
    useEffect(()=>{
        fetchData()
    },[query])
    const fetchData = async()=>{
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setData(data.items))
      .catch((error) => console.error('Error fetching comment data:', error));
        
    }
    // console.log(data)
    return( <div className="feed">
{data.length!==0&&data.map((item,index)=>(
    <Link key={index} to={`/Video/undefined/${item.id.videoId}`} >
        <VideoCard item={item}/>
    </Link>
))}
    </div>)
}

export default SearchResults