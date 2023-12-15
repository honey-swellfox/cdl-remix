import React from 'react';
import _map from 'lodash/map';
import DialogCard from './partials/DialogCard';
import FlashCard from './partials/FlashCard';

const DialogCards = ({ content }) => {    
    let dialogCards = '';
    let flashCards = '';
    const{ header, instructions } = content;

    let cards = Array.isArray(content.dialogCards) ? content.dialogCards : content.dialogCards.data;
    let newCards = Array.isArray(content.flashCards) ? content.flashCards : content.flashCards.data;

    if (cards && cards.length) {
        dialogCards = cards.map(card => {
            return <DialogCard key={card.id} card={card} />
        });
    }

    if (newCards && newCards.length) {
        flashCards = newCards.map(card => {
            return <FlashCard key={card.id} card={card} />
        });
    }

    return (
        <div className="block-cards mb-40">
            {header ? <h2 className="header mb-20">{header}</h2> : ''}
            {instructions ? <p className="instructions text-15 mb-15">{instructions}</p> : ''}
            <div className={`grid sm:grid-cols-2 grid-cols-1 col-gap-30 row-gap-20`}>
            {dialogCards}
            {flashCards}
            </div>
        </div>
    );
}

export default DialogCards;