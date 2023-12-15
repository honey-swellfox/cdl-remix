import React from 'react';
import _map from 'lodash/map';
import { rawMarkup } from '../../../../utilities';

const KeyCards = ({ content }) => {    
    let keyCards = '';
    const{ header, overflowedWidth } = content;

    let cards = Array.isArray(content.keyCards) ? content.keyCards : content.keyCards.data;

    if (cards && cards.length) {
        keyCards = cards.map(card => {
            return (
                <div key={card.id} className="border border-alto p-15 sm:p-30 mb-20">
                    <h2 className="uppercase text-blueribbon text-24 mb-25">{card.cardName}</h2>
                    { card.description ?
                    <div dangerouslySetInnerHTML={rawMarkup(card.description)} className={`text-15`} />
                    : '' }
                </div>
            );
        });
    }

    return (
        <div className="block-keycards mb-40">
            {header ? 
            (
                <div className="flex justify-center">
                    <h2 className={`text-left w-full ${overflowedWidth ? 'lg:w-full+100' : ''} header mb-20 flex-shrink-0`}>{header}</h2> 
                </div>
            )
            : ''}
            <div className="flex justify-center">
                <div className={`w-full ${overflowedWidth ? 'lg:w-full+100' : ''} flex-shrink-0`}>
                {keyCards}
                </div>
            </div>
        </div>
    );
}

export default KeyCards;