import React from 'react';
import VideoListItem from './video_list_detail';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoClick = {props.onVideoSelect}
				key={video.etag} video={video} />
			)
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
}

export default VideoList;