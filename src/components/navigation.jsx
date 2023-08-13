export default function Navigation() {
    return (
        <nav>
            <div className="brand">
                <h2>ESPORT<span>NG</span></h2>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="search for games, tournament, players....." />
            </div>
            <div className="nav-links">
                <ul> 
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Streams</a></li>
                    <li><a href="#">Tournaments</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </div>
            <div className="login-btn">
                <button>Login</button>
            </div>
        </nav>
    )
}