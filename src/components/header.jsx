import header0 from "../images/header0.png";
import header1 from "../images/header1.png";
import header2 from "../images/header2.png";

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <div className="header-text">
        <h2>Earn Money Playing Video<span>Games</span></h2>
        <p>
          Participate and get involved in games tournaments with amazing pool
          prizes to be won. Play your favorite and win Big, Bring your teammates
          and register today.
        </p>
        </div>
        <div className="call-to-action">
          <button className="register-btn">Register Now</button>
          <button className="watch-btn">Watch Live</button>
        </div>
      </div>
      <div className="header-right">
        <img className="header0" src={header0} alt="header image 1" />
        <img className="header1" src={header1} alt="header image 2" />
        <img className="header2" src={header2} alt="header image 3" />
      </div>
    </header>
  );
}
