import React, { useState, useEffect } from 'react';
import gsap, { TweenMax, Back, Draggable } from 'gsap/all';

const DragAndDropExercise = ({ content }) => {
    const { header, instructions, draggableItems: draggableItemsData } = content;
    let groupsData = Array.isArray(content.groups) ? content.groups : content.groups.data;
    const totalTargets = groupsData.length;
    
    const [totalHits, setTotalHits] = useState(0);

    let staggers = null;
    let board = null;
    let dropTargets = null;
    let dragItems = null;

    if (typeof document !== "undefined") {
        staggers = document.querySelectorAll('.stagger');
        board = document.querySelector('.board');
        dropTargets = document.querySelectorAll('.target');
        dragItems = document.querySelectorAll('.drag-item');

        // console.log(dragItems)
        gsap.registerPlugin(Draggable);

        // TweenMax.set(staggers, { scale: 0, opacity: 0 });
    }
    
    useEffect(() => {
        // console.log('staggers', staggers)
        if (staggers) {
            // console.log('staggers')

            TweenMax.staggerTo(
                staggers,
                0.2,
                { opacity: 1, scale: 1, ease: Back.easeOut, force3D: true },
                0.1,
                initDraggableItem
            );
        }
    });

    function initDraggableItem() {
        if (dragItems) {
            Draggable.create(dragItems, {
                bounds: board,
                edgeResistance: 0.65,
                onPress: function() {
                    const boundingRect = this.target.getBoundingClientRect();
                    this.startX = this.x;
                    this.startY = this.y;
                    // this.startX = boundingRect.x;
                    // this.startY = boundingRect.y;
                    this.offsetTop = this.startY - boundingRect.top;
                    this.offsetLeft = this.startX - boundingRect.left;
                    // console.log(this.target.getBoundingClientRect(), this.x)
                //   this.offsetTop = this.startY - $(this.target).position().top;
                //   this.offsetLeft = this.startX - $(this.target).position().left;
                // console.log(this.offsetLeft, this.offsetTop)
                },
                onDragEnd: function() {
                    let dragId = this.target.id + "-drop";
                    let self = this;
                    // console.log('dragId',dragId, this.target)

                    dropTargets.forEach(target => {
                        let targetId = target.id;
                        let pos = target.getBoundingClientRect();
                        let diffTop = self.offsetTop + pos.top;
                        let diffLeft = self.offsetLeft + pos.left;
                        // console.log(targetId, pos, diffTop, diffLeft)

                        if (targetId === dragId) {
                            TweenMax.to(self.target, 0.5, { x: self.startX, y: self.startY });
                        }
                    });
                }
            });
        }
    }

    // console.log('groups', groupsData)
    // console.log('draggableItems', draggableItemsData)

    let draggableItems = draggableItemsData.map(function (item, idx) {
        // let key = item.item.toLowerCase().replace(' ', '') + idx;
        // console.log('item', item)
        
        return (
            <div key={`${item.groupHandle}-idx`} id={item.groupHandle} className="drag-item border border-regentgray stagger">
                <button className="border border-roman">{item.item}</button>
            </div>
        );
    });

    let groups = groupsData.map(function (groupData) {
        let group = groupData.group.map(function(item, idx) {
            let key = item.item.toLowerCase().replace(' ', '') + idx;
           

            return <button key={key} className="border border-roman">{item.item}</button>
        });

        // console.log('groupData', groupData)

        let id = groupData.groupHandle + '-drop';

        return (
            <div key={groupData.id} id={id} className="border border-regentgray w-full target stagger">
                {group}
            </div>
        );
    });

    return (
        <div className="mb-40">
            <h2 className="text-18 font-medium">{header}</h2>
            <p>{instructions}</p>
            <div className="board flex border border-regentgray p-20">
                <div className="draggable-items w-1/5">
                    {draggableItems}
                </div>
                <div className="draggable-items w-4/5">
                    {groups}   
                </div>
            </div>
        </div>
    );
}

export default DragAndDropExercise;