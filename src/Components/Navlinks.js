import { NavLink } from "react-router-dom";
export const Navlinks = () => {
  return (
    <div>
      (
      <ul className="home-wrapper__aside__list">
        <NavLink to="/" className="side-nav-link">
          <li className="pointer">
            <i className="fas fa-home pointer"></i>
            <span className="list-item-title">Home</span>
          </li>
        </NavLink>

        <NavLink to="/watchHistory" className="side-nav-link">
          <li className="pointer">
            <i class="fas fa-history pointer"></i>
            <span className="list-item-title">History</span>
          </li>
        </NavLink>

        <NavLink to="/playlists" className="side-nav-link">
          <li className="pointer">
            <i class="fas fa-list pointer"></i>
            <span className="list-item-title">Playlists</span>
          </li>
        </NavLink>

        <NavLink to="/watchLaterVideos" className="side-nav-link">
          <li className="pointer">
            <i class="fas fa-clock pointer"></i>
            <span className="list-item-title">Watch later</span>
          </li>
        </NavLink>

        <NavLink to="/likedVideos" className="side-nav-link">
          <li className="pointer">
            <i class="fas fa-thumbs-up pointer"></i>
            <span className="list-item-title">Liked videos</span>
          </li>
        </NavLink>
      </ul>
      )
    </div>
  );
};
