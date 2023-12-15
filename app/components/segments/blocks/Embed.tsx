import React, { memo } from 'react';
import { rawMarkup } from '../../../../utilities';

const Embed = memo(({ content: { header, embed, instructions, caption, overflowedWidth } }) => {  
    return (
        <div className={`block-embed content-wrap ${overflowedWidth ? 'overflowed-w flex flex-col items-center' : ''}`}>
            {header ? <h2 className="header mb-20">{header}</h2> : ''}
            {instructions ? <p className="instructions mb-10 text-15">{instructions}</p> : ''}
            <div dangerouslySetInnerHTML={rawMarkup(embed)} className={`embed ${caption ? 'mb-10' : 'mb-40' }`} />
            {caption ?
                (
                    <div dangerouslySetInnerHTML={rawMarkup(caption)} className="caption mb-40"></div>
                )
            : '' }
        </div>
    );
});

export default Embed;