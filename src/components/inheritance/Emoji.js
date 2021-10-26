import React from "react";

export default class Emoji extends React.Component{
   addEmoji = (test, emoji) =>`${emoji} ${test} ${emoji}`;
   
    render(override){
        let text = 'I am the Emoji Component';
        if(override) text = override;

        return <div>{text}</div>

    }

}