import { Link } from "react-router-dom";

const Navbar = props => {

   
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid bg-dark py-3 text-light">
            <a className="navbar-brand text-light">Navbar</a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="nav-link text-light"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item text-light">
                  <Link className="nav-link text-light" to="/contact">
                    Conatct
                  </Link>
                </li>
                <li className="nav-item text-light">
                  <Link className="nav-link text-light" to="/cart">
                    Shopping Cart
                  </Link>
                </li>
              </ul>
            </div>

            <span className="btn btn-warning text-light">
              {props.productCount}
            </span>
          </div>
        </nav>
      </>
    );
}
 
export default Navbar;
