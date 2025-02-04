////My Version:
//export default function Slots({ val1, val2, val3 }) {
//    const matching = val1 === val2 && val2 === val3;
//    if (matching) {
//        return (
//            <div>
//                <div className="slot">
//                    <h1>You Win!</h1>
//                    <div>{val1}</div>
//                    <div>{val2}</div>
//                    <div>{val3}</div>

//                </div>
//            </div>
//        )
//    } else {
//        return (
//            <div>
//                <div className="slot">
//                    <h1>You Lose!</h1>
//                    <div>{val1}</div>
//                    <div>{val2}</div>
//                    <div>{val3}</div>
//                </div>
//            </div>
//        )
//    }
//}

//Colt Steeles version:

export default function Slots({ val1, val2, val3 }) {
    const matching = val1 === val2 && val2 === val3;
    return (
        <div>
            <h1>{val1}{val2}{val3}</h1>
            <h1 style={{ color: matching ? "green" : "red" }}>{matching ? "You win!" : "You Lose!"}</h1>
            {matching && <h3>Congrats</h3>}
        </div >
    )

}