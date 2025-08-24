import PropTypes from 'prop-types'

function List(props){
    return(
        <div className="card">
            <p>{props.name}</p>
            <button onClick={props.onClick}>{props.button}</button>
        </div>


    )
}
export default List