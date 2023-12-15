import React, { useRef } from 'react';
import gsap from 'gsap';

import { rawMarkup } from '../../../../utilities';

const Accordion = ({ content }) => {
    const{ header, instructions } = content;
    let termsRef = useRef(null);
    let definitionsRef = useRef(null);
    let accordion = '';

    let termsAndDefinitions = Array.isArray(content.termsAndDefinitions) ? content.termsAndDefinitions : content.termsAndDefinitions.data;

    function handleAccordion(termId) {
        let term = termsRef.current[termId];
        let definition = definitionsRef.current[termId];
        let btnDown = term.querySelector('.btn-down');
        let btnUp = term.querySelector('.btn-up');

        if (definitionsRef) {
            if (gsap.getProperty(definition, "height") < 1) {
                gsap.to(definition, 0.3, { autoAlpha: 1, height: 'auto', ease: 'back.out(1.7)' }, 0);
                term.classList.add('font-medium');
                btnDown.classList.add('hidden');
                btnUp.classList.remove('hidden');
            } else {
                gsap.to(definition, 0.3, { autoAlpha: 0, height: 0, ease: 'expo.out' }, 0);
                term.classList.remove('font-medium');
                btnDown.classList.remove('hidden');
                btnUp.classList.add('hidden');
            }
        }
    }

    function addRef(type, termId, element) {
        if (type == 'term') {
            termsRef.current = {
                ...termsRef.current,
                [termId]: element
            }
        }

        if (type == 'definition') {
            definitionsRef.current = {
                ...definitionsRef.current,
                [termId]: element
            }
        }
    }

    if(termsAndDefinitions && termsAndDefinitions.length) {
        accordion = termsAndDefinitions.map(term => {
            return (
                <div key={term.id}>
                    <button className={`bg-white-80 text-13 xs:text-14 ${term.term.length > 80 ? 'leading-tight sm:text-15' : 'sm:text-17'} ${term.term.length > 90 ? '' : 'md:text-17'} w-full text-left text-codgray border-t border-alto h-40 px-15 flex justify-between items-center`} onClick={() => handleAccordion(term.id)} ref={t => addRef("term", term.id, t)}>
                        <span>{term.term}</span>
                        <>
                            <svg width="10" height="6" viewBox="0 0 10 6" className="btn-down">
                                <path fill="none" fillRule="evenodd" stroke="#161616" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M0 0L4 4 0 8" transform="rotate(90 4 5)"/>
                            </svg>
                            <svg width="12" height="8" viewBox="0 0 12 8" className="btn-up hidden">
                                <path fill="none" fillRule="evenodd" stroke="#161616" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M0 0L4 4 0 8" transform="rotate(270 5 2)"/>
                            </svg>
                        </>
                    </button>
                    <div dangerouslySetInnerHTML={rawMarkup(term.definition)} className="opacity-0 invisible h-0 px-15 overflow-hidden" ref={def => addRef("definition", term.id, def)}/>
                </div>
            );
        });
    }

    return (
        <div className="block-accordion mb-40">
            {header ? <h2 className="header mb-20">{header}</h2> : ''}
            {instructions ? <p className="instructions text-15">{instructions}</p> : ''}
            {accordion}
        </div>
    )
}

export default Accordion;