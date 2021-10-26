export default function Text({addEmoji}){
    const text = 'I am JavaScript Programing Language.';
    return <div>{addEmoji ? addEmoji(text,'@'): text}</div>

}