function ShoppingListItem({ item, quantity, completed }) {
    const styles = {
        color: completed ? "grey" : "black",
        textDecoration: completed ? "line-through" : "none"
    };
    return (
        <li style={styles}>
            {item}-{quantity}
        </li>
    );
}

export default ShoppingListItem;



{/*<li key={i.id}
style={{
    color: i.completed ? "grey" : "black",
    textDecoration: i.completed ? "line-through" : "none",
}}
>
{i.item} - {i.quantity}
</li>*/}