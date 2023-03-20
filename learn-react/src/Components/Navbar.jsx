import { NavLink } from "react-router-dom";
const Navbar = props => {

   
    return (
      <>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary sticky-top myStyles"
          data-bs-theme="dark"
        >
          <div className="container-fluid  py-3 ">
            <NavLink className="navbar-brand ">Navbar</NavLink>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link " to="/contact">
                    Conatct
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link " to="/cart">
                    Shopping Cart
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link " to="/menu">
                    Menu
                  </NavLink>
                </li>
              </ul>
            </div>

            <span className="btn btn-warning ">{props.productCount}</span>
          </div>
        </nav>
      </>
    );
}
 
export default Navbar;
