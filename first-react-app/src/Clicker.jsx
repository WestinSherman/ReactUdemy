function handleClick() {
    console.log('Button Clicked');
}

function handleHover() {
    console.log('HOVERED!!');
}

function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover} >Click The Button</p>
            <button onMouseOver={handleHover} onClick={handleClick} >Click</button>
        </div>
    )
}

export default Clicker;