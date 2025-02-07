function handleClick() {
    console.log('Button Clicked');
}

function handleHover() {
    console.log('HOVERED!!');
}

export default function Clicker() {
    return (
        <div>
            <p onMouseOver={handleHover} >Click The Button</p>
            <button onMouseOver={handleHover} onClick={handleClick} >Click</button>
            <button
                onClick={() =>
                    console.log('CLICKED THE INLINE ARROW FUNCTION VERSION')
                }
            >
                Inline Function (CLICK ME!)
            </button>
        </div >
    )
}