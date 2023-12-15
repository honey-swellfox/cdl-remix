import React from 'react';

const SpotLinks = ({ spots, handleClickSpot, selectedSpot }) => {
    if (spots.length) {
        let circles = spots.map(function (spot, idx) {
            
            let coords = ['34', '34'];
            if (spot.coords) {
                coords = spot.coords.split(',');
            }

            return (
                <button key={spot.id} className={`rounded-full text-10  sm:text-12 hover:bg-blueribbon  hover:text-white shadow-sm ${selectedSpot.id == spot.id ? 'bg-blueribbon text-white' : 'bg-white text-blueribbon'}`} style={{ transform: `translate(${coords[0]}px, ${coords[1]}px)`, width: coords[2]*2, height: coords[2]*2 }} title={spot.areaName} onClick={() => handleClickSpot({ spot, num: idx + 1 })}><span className="align-text-top">{idx + 1}</span></button>
            );
        });

        return (
            <div className="z-40 absolute w-full h-full lg:w-500 lg:h-281">
                {circles}
            </div>
        );
    }

    return '';
}

export default SpotLinks;