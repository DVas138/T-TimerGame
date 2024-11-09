import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from 'react-dom';

export default forwardRef(function ResultModal({onClose,target, timeReamining}, ref){
    const dialogRef = useRef();
    const userLost = timeReamining <=0;
    const remaining = (timeReamining/ 1000).toFixed(2);
    useImperativeHandle(ref, () => ({
        open() {
            dialogRef.current.showModal();
        }
    }))
    return createPortal(<dialog ref={dialogRef} className={"result-modal"} >
        <h2>
            You {userLost ? "won" : "lost"}
        </h2>
        <p>Target time: {target}</p>
        <p>Your time left was: {remaining}</p>
        <form method="dialog" onSubmit={onClose}>
            <button>Close</button>
        </form>
    </dialog>, document.querySelector("#modal"))
})

// export default ResultModal;