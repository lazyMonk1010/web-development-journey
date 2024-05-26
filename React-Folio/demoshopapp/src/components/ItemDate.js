import './ItemDate.css';

function ItemDate(props) {
    const day = props.day;
    const month = props.month;
    const year = props.year; 
    return(<div className='mfg-date'>
        {/* <span>20</span>
        <span> june</span>
        <span> 1998</span> 
        yh hardcoded hai to apn ab iske keywords baneke value place holder krnbge
        */}

        <span>{day}</span>
        <span> {month}</span>
        <span> {year}</span>
    </div>)

}
export default ItemDate;