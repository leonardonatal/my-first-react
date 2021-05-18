import classes from './Card.module.css';
// children receives the content
function Card(props) {
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Card;