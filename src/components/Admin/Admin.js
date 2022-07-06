
import StateList from "../StateList/StateList";
import CardList from "../CardList/CardList";
import './Admin.css'

function Admin(){
    return <>
    <div className="container">
            <StateList/>
        <div className="admin">
            <CardList/>
        </div>
    </div>
    </>
}

export default Admin