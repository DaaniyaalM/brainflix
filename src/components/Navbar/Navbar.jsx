import SearchPic from "../../assets/Icons/search.svg";
import "./Navbar.scss";
function Navbar(props) {
  function searchHandler() {
    console.log("button pressed");
  }
  return (
    <div className="navbar">
      <div className="navbar__searchcontainer">
        <div className="navbar__icon"></div>
        <label className="navbar__magnifying-glass">
          <img src={SearchPic} alt="Search" />
        </label>
        <div onKeyDown={searchHandler} className="navbar__search">
          Search
        </div>
      </div>
      <div className="navbar__dp"></div>
      <div className="navbar__upload"></div>
    </div>
  );
}

export default Navbar;
