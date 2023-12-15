import React from 'react';

import { formatTime } from '../../../../utilities';

const TimeStamp = ({ embedUrl, ts, setYoutubeUrl }) => {

    return (
        <li key={`ts${idx}`} className="flex">
            <button className="text-dodgerblue mr-20" onClick={() => setYoutubeUrl(`${embedUrl}&start=${ts.time}&autoplay=1`)}>{formatTime(ts.time)}</button>
            <div>{ts.description}</div>
        </li>
    );
}

export default TimeStamp;