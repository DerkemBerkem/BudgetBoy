import { v4 as uuid } from "uuid";
import { useState } from "react";


export default function EmojiClicker() {
 const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "⭐️" }]);
 const addEmoji = () => {
   setEmojis((oldEmojis) => {
     return [...oldEmojis, { id: uuid(), emoji: "🥵" }];
   });
 };

 const deleteEmoji = (id) => {
    setEmojis((oldEmojis) => {
        return oldEmojis.filter((e) => e.id !== id)
    })
 }
 return (
    <div>
     {emojis.map((e) => {
       return <span onClick={() => deleteEmoji(e.id)} key={e.id}>{e.emoji}</span>;
     })}
     <div>
        <button onClick={addEmoji}>Add emoji</button>
     </div>
   </div>
 );
}
