import React, { memo } from 'react';

import AudioPlayer from './partials/AudioPlayer';
import { rawMarkup, supportsWebP } from '../../../../utilities';

const File = memo(({ content: { fileType, header, file, caption, overflowedWidth, imageClass, imagePosition, imageTransform, transformedImage } }) => {  
    let fileUrl = file[0].url;
    let fileUrlAltText = file[0].altText;
    let content = "";
    let srcset = "";
    
    if(imageTransform && transformedImage.length && supportsWebP) {
        fileUrl = transformedImage[0].url
        srcset = transformedImage[0].srcset
    }

    switch(fileType) {
        case 'audio':
            content = (
                <div className={`mb-40`}>
                    <AudioPlayer header={header} src={fileUrl} />
                    {caption ? <div dangerouslySetInnerHTML={rawMarkup(caption)} className="caption"></div> : '' }
                </div>
            );
            break;
        case 'pdf':
            content = (
                <div className={`file-wrap mb-40`}>
                    <object data={fileUrl} type="application/pdf" />
                    {caption ? <div dangerouslySetInnerHTML={rawMarkup(caption)} className="caption"></div> : '' }
                </div>
            );
            break;
        default: case 'image':
            content = (
                <div className={`block-img h-auto ${caption ? 'mb-10' : 'mb-40' } ${imageClass ?? ''} ${imagePosition ?? ''}`}>
                    <img src={fileUrl} alt={fileUrlAltText} srcSet={srcset}/>
                    {caption ? <div dangerouslySetInnerHTML={rawMarkup(caption)} className="caption"></div> : '' }
                </div>
            );
            break;
    }

    return (
        <div className={`block-file content-wrap ${overflowedWidth ? 'overflowed-w flex flex-col items-center' : ''}`}>
            {header ? <h2 className="header mb-20">{header}</h2> : ''}
            {content}
        </div>
    );
});

export default File;