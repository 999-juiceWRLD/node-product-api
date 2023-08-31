// import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const StatusComp = () => {
    return (
        <div className="alert alert-primary" role="alert">
            Data added — head to <Link to={'/api'}>API</Link>
        </div>
    );
}

// StatusComp.propTypes = {
//     situation: PropTypes.string
// }
