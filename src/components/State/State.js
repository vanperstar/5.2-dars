
import './State.css'

function State() {
    return (
        <div className="state">
            <form className="state-form">
                <label className="state-form-label">
                <input className="state-form-input" type="search" placeholder="Search for a country" />
                </label>
            </form>
            <select className="select">
                <option value="Filter">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
)
}

export default State