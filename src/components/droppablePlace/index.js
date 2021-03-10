import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { getDraggableItemStyle } from '../../helpers/styleFn.js';
import {returnRespectiveHtmlElement} from '../../helpers/generateUiElements';
import './droppable.css'

const DroppablePlace = ({ droppedElements }) => {
  return (
    <Droppable droppableId="droppable">
      {(provided, snapshot) => (
        <div
          className="droppable-wrapper"
          ref={provided.innerRef}
          >
          {/*可選鏈，droppedElements和droppedElements.length為空就取map*/
           droppedElements?.length ? 
           droppedElements?.map((item, index) => (
            <Draggable
              key={item.id}
              draggableId={item.id}
              index={index}>
              {(provided, snapshot) => (
                <div
                  className="droppable-elemant"
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={getDraggableItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                  )}>
                  {returnRespectiveHtmlElement(item.content)}
                </div>
              )}
            </Draggable>
          )):<p className="tour-text">*Drag & Drop some component to start</p>}
        </div>
      )}
    </Droppable>
  )
}

export default DroppablePlace;