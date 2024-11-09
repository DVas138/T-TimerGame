import {useRef, useState} from "react";
import ResultModal from "./ResultModal.jsx";

export default function Timer({title, target}) {
    const [time, setTime] = useState(target * 1000);
    const timerRef = useRef(0);
    const modalRef = useRef();
let active = (time > 0 && time < target * 1000)

    if(time <= 0){
        clearInterval(timerRef.current)
        modalRef.current.open();
    }
    function handleTimer() {
        timerRef.current = setInterval(() => {
            setTime(pervTime => pervTime - 10)
        }, 10);
    }

    function handleTimerReset(){
        setTime(target * 1000);
    }
    function handleStop() {
        clearInterval(timerRef.current);
        modalRef.current.open();

    }

    return (
        <>
            <ResultModal ref={modalRef} timeReamining={time} target={target} onClose={handleTimerReset}/>
            <section className={"challenge"}>
                {/*{timerEnd ? <p>You Lost</p> : ""}*/}
                <h2>
                    {title}
                </h2>
                <p className={"challenge-time"}>
                    {target} second{target > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={!active ? handleTimer : handleStop}>
                        {active ? "Stop" : "Start"} Timer
                    </button>
                </p>
                <p className={active ? "active" : null}>{active ? "Time is running" : "Inactive"}</p>
            </section>
        </>

    )
}