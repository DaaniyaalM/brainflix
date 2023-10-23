import SearchPic from "../../assets/Icons/search.svg";
import LogoPic from "../../assets/Logo/BrainFlix-logo.svg";
import "./Navbar.scss";

function Navbar(props) {
  function searchHandler() {
    console.log("button pressed");
  }
  return (
    <div className="navbar">
      <div className="navbar__main-icon">
        <img src={LogoPic} alt="Logo" />
      </div>
      <div className="navbar__row">
        <div className="navbar__search-container">
          <div className="navbar__icon"></div>
          <label className="navbar__magnifying-glass">
            <img src={SearchPic} alt="Search" />
          </label>
          <input
            type="search"
            placeholder="Search"
            onKeyDown={searchHandler}
            className="navbar__search"
          ></input>
        </div>
        <div className="profile-picture"></div>
      </div>
      <button className="navbar__upload"></button>
    </div>
  );
}

export default Navbar;
