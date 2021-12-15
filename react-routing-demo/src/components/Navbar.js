import { Link, Outlet } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <h1>Navbar!</h1>
            <Link to="/first">First!</Link> 
            {" | "}
            <Link to="/second">Second!</Link>
            <hr />
            <Outlet />
        </>
    );
}