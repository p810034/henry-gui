import React from 'react';

export const returnRespectiveHtmlElement = (type) => {
    switch (type) {
        case "button":
            return <button>I'm button</button>
        case "input":
            return <input defaultValue="i'm input" />
        case "textarea":
            return <textarea defaultValue="i'm text area" />
        default:
            return <></>
    }
}

export const generatedElements = (type, id) => {
    let uiElement = {};
    uiElement.id = `${200 + id}`;
    uiElement.content = type;
  
    return uiElement;
  
}