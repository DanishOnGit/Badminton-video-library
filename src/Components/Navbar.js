import { NavLink } from "react-router-dom";
export function Navbar() {
  return (
    <div>
      <nav className="nav-wrapper-3">
        <div className="logoAndList-wrapper">
          <NavLink to="/" className="side-nav-link">
            <div className="brand">One-View</div>
          </NavLink>
        </div>

        {/* <div>
          <ul className="list-items-flex list-non-bullet">
            <li>
              <Link to="wishlist">
                <button className="btn-icon btn-icon-hover">
                  <i className="far fa-heart"></i>
                </button>
              </Link>
            </li>
            <li>
              <Link to="cart">
                <button className="btn-icon btn-icon-hover relative-positioned">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </Link>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
}
