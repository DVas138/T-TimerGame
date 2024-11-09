import {useState, useRef} from "react";

export default function Player() {
    const [user, setUser] = useState(null);
   const inputReference = useRef();
    function handleUserSubmit(){
        setUser(inputReference.current.value);
    }
  return (
    <section id="player">
      <h2>Welcome { user ?? "unknown entity" }</h2>
      <p>
        <input type="text" ref={inputReference}/>
        <button onClick={handleUserSubmit}>Set Name</button>
      </p>
    </section>
  );
}
