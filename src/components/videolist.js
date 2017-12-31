import React from 'react';
import Videolistitem from './videolistitem';

const Videolist=(props)=>{

const videoitem=props.videos.map((video)=>{
  return <Videolistitem
  onvideoselect={props.onvideoselect}
  key={video.etag} video={video} />
});

  return(
    <ul className="col-md-4 list-group">
    {videoitem}
    </ul>
  );
}

export default Videolist;
