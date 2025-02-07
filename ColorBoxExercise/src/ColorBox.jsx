import { use, useState } from "react";
import "./ColorBox.css";

function randomCoice(arr) {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function ColorBox({ colors }) {
    const [color, setColor] = useState(randomCoice(colors));
    const changeColor = () => {
        const randomColor = randomCoice(colors);
        setColor(randomColor);
    };
    return (
        <div
            className="ColorBox" style={{ backgroundColor: color }}
            onClick={changeColor}
            style={{ backgroundColor: color }}
        ></div>
    );
}

export default ColorBox;