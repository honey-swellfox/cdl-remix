import React, { useState, forwardRef } from 'react';

import SpotContent from './SpotContent';

const Map = forwardRef(({ spots, imageMap }, ref) => {

    if (spots.length) {
        let firstSpot = Array.isArray(spots[0].spotContent) ? spots[0].spotContent[0] : spots[0].spotContent;
        const [areaContent, setAreaContent] = useState({ spot: firstSpot, areaName: spots[0].areaName, num: 1 });
        
        let areas = spots.map(function(spot, idx) {
            let content = Array.isArray(spot.spotContent) ? spot.spotContent[0] : spot.spotContent;

            switch(content.typeHandle) {
                case 'text':
                    return <area 
                                key={spot.id} 
                                shape={spot.shape} 
                                coords={spot.coords} 
                                title={spot.areaName} 
                                alt={spot.areaName}
                                onClick={() => setAreaContent({ spot: content, areaName: spot.areaName, num:idx+1 })}
                                className="cursor-pointer"
                            />
                case 'video':
                    return '';
                case 'image':
                    return '';
                default:
                    return '';
            } 
        });

        return (
            <>
                <map name={imageMap}>
                    {areas}
                </map>
                <SpotContent areaContent={areaContent} ref={ref} />
            </>
        );
    }

    return '';
});

export default Map;