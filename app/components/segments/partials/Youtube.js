import React from 'react';

const Youtube = ({ youtubeUrl }) => {
    return (
        <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={youtubeUrl}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen=""
            />
    );
}

export default Youtube;