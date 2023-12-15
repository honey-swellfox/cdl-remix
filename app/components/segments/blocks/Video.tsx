import React from 'react';

import VideoPlayer from '../../../../modules/video-player/VideoPlayer';

const Video = ({ content, entry }) => {
	return (
		<>
			{content.header ? (
				<h2 className="header mb-20">{content.header}</h2>
			) : (
				''
			)}
			<VideoPlayer content={content} entry={entry} />
		</>
	);
};

export default Video;
