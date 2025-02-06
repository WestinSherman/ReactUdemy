function handleClick() {
    console.log('Button Clicked');
}

function Clicker() {
    return (
        <div>
            <p>Click The Button</p>
            <button onClick={handleClick} >Click</button>
        </div>
    )
}

export default Clicker;