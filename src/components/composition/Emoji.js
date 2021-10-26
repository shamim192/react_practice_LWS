import React from "react";

export default class Emoji extends React.Component{
   addEmoji = (test, emoji) =>`${emoji} ${test} ${emoji}`;
   
    render(){
       return this.props.children({addEmoji: this.addEmoji});
    }

}