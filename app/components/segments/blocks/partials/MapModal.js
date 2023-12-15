import React, { useState, useEffect, useRef, forwardRef } from 'react';
import _debounce from 'lodash/debounce';

import MapLinks from './MapLinks2';

const MapModal = forwardRef(({ selectedMap }, ref) => {
    // console.log('selectedMap', selectedMap)
    const [imgUrl, setImgUrl] = useState('');
    const [maps, setMaps] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const imageRef = useRef();    

    useEffect(() => {
        if (selectedMap) {
            let mapImage = selectedMap.map.mapImage;
            let mapContent = Array.isArray(selectedMap.map.mapContent) ? selectedMap.map.mapContent : selectedMap.map.mapContent.data;
            setMaps(mapContent);
            setImgUrl(mapImage && mapImage.length ? mapImage[0].url : '');
        }  
    }, [selectedMap]);

    useEffect(() => {
        const image = imageRef.current;

        if (image && image.complete) {
            handleImageLoaded();
        }

        window.addEventListener('resize', debouncedHandleResize);

        return () => {
            window.removeEventListener('resize', debouncedHandleResize);
        }
    });

    function handleImageLoaded() {
        if (!isLoaded) {
            setIsLoaded(true);
            debouncedHandleResize();
        }
    }

    const debouncedHandleResize = _debounce(function handleResize() {
        const image = imageRef.current;
        const naturalWidth = image.naturalWidth;
        const naturalHeight = image.naturalHeight;
        const dimensions = image.getBoundingClientRect();
        let w = dimensions.width;
        let h = dimensions.height;

        if (!w || !h) {
            let temp = new Image();
            temp.src = image.src;

            if (!w) {
                w = temp.width;
            }
                
            if (!h) {
                h = temp.height;
            }
        }

        let wPercent = w/100;
        let hPercent = h/100;
        let spots = [];

        if (selectedMap) {
            let mapContent = Array.isArray(selectedMap.map.mapContent) ? selectedMap.map.mapContent : selectedMap.map.mapContent.data;
            // setMaps(mapContent)

            for(let i=0; i < mapContent.length; i++) {
                if (mapContent[i].coords) {
                    let coords = mapContent[i].coords.split(',');
                    let coordsPercent = new Array(coords.length);

                    // console.log('coords', coords)

                    for (let j=0; j < coordsPercent.length; j++) {
                        if (j % 2 === 0) {
                            coordsPercent[j] = parseInt(((coords[j]/naturalWidth)*100)*wPercent);
                        } else {
                            coordsPercent[j] = parseInt(((coords[j]/naturalHeight)*100)*hPercent);
                        }
                    }

                    spots[i] = {
                        ...mapContent[i],
                        coords: coordsPercent.toString()
                    };
                }
            }
        }

        console.log('spots', spots)

        setMaps(spots);
    }, 500);

    let content = '';

    if (selectedMap) {
        let mapContent = Array.isArray(selectedMap.map.mapContent) ? selectedMap.map.mapContent : selectedMap.map.mapContent.data;

        // console.log('imgUrl', imgUrl)

        // console.log(mapContent) 

        if (mapContent.length == 1 && mapContent[0].typeHandle == 'text') {
            content = (
                <div className="absolute text-left w-full z-40 p-10 bg-porcelain-50 bottom-0 text-24">{mapContent[0].text}</div>
            );
        }

        if (mapContent.length > 1) {
            content = <MapLinks maps={maps} />
        }
    }

    return (
        <div className="map-modalx container mx-auto flex justify-center items-centerx opacity-0 z-50 shadow-2xl absolute left-0 right-0 flex-wrap bg-white w-fullx h-450x" ref={ref}>
            <>
                {imgUrl ? 
                    <div className="h-auto w-auto absolute flex-shrink-0 z-30"><img src={imgUrl} className="h-full w-full border-0 z-30 relative" ref={imageRef} />{content}</div>
                : ''}
            </>
        </div>
    );

});

export default MapModal;