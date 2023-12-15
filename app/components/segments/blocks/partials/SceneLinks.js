import React from 'react';

const SceneLinks = ({ links, toggleScene, sceneZIdx }) => {
    if (links && links.length) {
        let circles = links.map(function(link) {
            let coords = link.coords.split(',');

            let hasImage = Array.isArray(link.sceneImage) && link.sceneImage.length ? true : false;

            let btnLink = (
                <button key={link.id} className={`rounded-full text-10  sm:text-12 bg-white hover:bg-blueribbon text-blueribbon hover:text-white shadow-sm`} data-handle={link.sceneHandle} data-parent-handle={link.parentHandle ? link.parentHandle : 'xbasex'} style={{ transform: `translate(${coords[0]}px, ${coords[1]}px)`, width: coords[2]*2, height: coords[2]*2 }} title={link.areaName} onClick={() => toggleScene({ handle: link.sceneHandle, parentHandle: link.parentHandle ? link.parentHandle : 'xbasex', show: true, hasImage  })}>
                    <div style={{ width: coords[2]*2, height: coords[2]*2 }} className="flex items-center justify-center group">
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="group-hover:hidden w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                            <g fill="#0f62fe">
                                <path d="M11.24 10.583c-.317.362-.67.688-1.055.977l4.21 4.21 1.015-1.016-4.17-4.171zM6.105 0c3.366 0 6.104 2.738 6.104 6.105 0 3.366-2.738 6.104-6.104 6.104C2.738 12.21 0 9.471 0 6.105 0 2.738 2.738 0 6.105 0zm0 1.616c-2.475 0-4.49 2.014-4.49 4.489s2.015 4.488 4.49 4.488 4.488-2.013 4.488-4.488c0-2.475-2.013-4.49-4.488-4.49z"/>
                            </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="hidden group-hover:block w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                            <path fill="#fff" d="M11.419 10.763c-.316.362-.67.688-1.054.977l4.21 4.21 1.015-1.016-4.171-4.171zM6.284.18C2.918.18.18 2.918.18 6.284s2.738 6.105 6.104 6.105S12.39 9.65 12.39 6.284C12.389 2.918 9.65.18 6.284.18zm2.873 6.463H6.643v2.514h-.718V6.643H3.411v-.718h2.514V3.411h.718v2.514h2.514v.718z"/>
                        </svg>
                    </>
                    </div>
                </button>
            );

            if (!hasImage) {
                btnLink = (
                    <button key={link.id} className={`rounded-full text-10  sm:text-12 bg-white hover:bg-blueribbon text-blueribbon hover:text-white shadow-sm`} data-handle={link.sceneHandle} data-parent-handle={link.parentHandle ? link.parentHandle : 'xbasex'} style={{ transform: `translate(${coords[0]}px, ${coords[1]}px)`, width: coords[2]*2, height: coords[2]*2 }} title={link.areaName} onMouseEnter={() => toggleScene({ handle: link.sceneHandle, parentHandle: link.parentHandle ? link.parentHandle : 'xbasex', show: true, hasImage  })} onMouseLeave={() => toggleScene({ handle: link.sceneHandle, parentHandle: link.parentHandle ? link.parentHandle : 'xbasex', show: false, hasImage  })}>
                        <div style={{ width: coords[2]*2, height: coords[2]*2 }} className="flex items-center justify-center group">
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" className="group-hover:hidden w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                                    <path fill="#0f62fe" d="M0 .425V1.84h11.322V.425H0zm0 3.538v1.415h16.276V3.963H0zM0 7.5v1.415h16.274V7.501H0z"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="9" viewBox="0 0 17 9" className="hidden group-hover:block w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
                                    <path fill="#fff" d="M0 .425V1.84h11.322V.425H0zm0 3.538v1.415h16.276V3.963H0zM0 7.5v1.415h16.274V7.501H0z"/>
                                </svg>
                            </>
                        </div>
                    </button>
                );
            }

            return btnLink;
        });

        return (
            <div className={`${sceneZIdx} absolute w-full h-full lg:w-800 lg:h-450`}>
            {circles}
            </div>
        );
    }

    return '';
}

export default SceneLinks;