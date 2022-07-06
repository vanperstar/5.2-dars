
import './Card.css'

function Card (props) {
    console.log(props);
    return (
        <div className="card">
            <img className="card-img-top" src="https://picsum.photos/200/200" alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <dl>
                <dt>Population:</dt>
                <dd>{props.population}</dd>
                </dl>
                <dl>
                <dt>Region:</dt>
                <dd>{props.region}</dd>
                </dl>
                <dl>
                <dt>Capital:</dt>
                <dd>{props.capital}</dd>
                </dl>
            </div>
        </div>
    )
}

export default Card