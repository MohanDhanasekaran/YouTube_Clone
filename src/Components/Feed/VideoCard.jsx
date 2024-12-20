import React from 'react'
import { value_converter } from '../../data'
import moment from 'moment/moment'
const VideoCard = (props) => {
    const {item} = props
  return (
    <div className='card'>
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <h2>{item.snippet.title}</h2>
      <h3>{item.snippet.channelTitle}</h3>
      {item.statistics&&<p>{value_converter(item.statistics.viewCount)} views &bull - {moment(item.snippet.publishedAt).fromNow()}</p>}
    </div>
  )
}

export default VideoCard