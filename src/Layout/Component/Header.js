import { Link } from "react-router-dom";

function Header(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.description}</p>
            <Link className="mr-1" to={`/home`}>Home</Link> |
            <Link className="ml-2" to={`/customerList`}>Add Customer</Link> |
            {
                sessionStorage.getItem('currentUser') != null ?
                    (<Link className="ml-2" to={`/logout`}>Logout</Link>) : null
            }
        </div>
    )
}
export default Header;