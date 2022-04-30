import { useState } from "react";
import "./todo.css";

function TodoInput({ listchange }) {
  const [text, setText] = useState("");
  return (
    <div className="inputdiv">
        
            <h2 id="learn-react">Learn react <span class="dot"></span></h2>
            <h2 id="learn-list">Learn lists <span class="dot dot1"></span></h2>
            <h2 id="learn-list">Learn State <span class="dot dot2"></span> </h2>
        
      <input
        className="inputtodo"
        type="text"
        placeholder="Write something....."
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            listchange(e.target.value);
          }
        }}
      />
      <button
        className="todobutton"
        onClick={() => {
          listchange(text);
        }}
      >
        +
      </button>
    </div>
  );
}
export { TodoInput };
