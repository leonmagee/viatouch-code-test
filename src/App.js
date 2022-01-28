import './App.scss';
import { Link } from "react-router-dom";

const App = ( {children} ) => {

  return (
    <div className="App">
			<div className="dashboard">
			<header className="dashboard__header">
				<img src="./viatouch-logo-white.png" alt="" />
				<div className="dashboard__header-content">
					<div className="user-profile">LM</div>
				</div>
			</header>
				<div className="dashboard__wrap">
					<div className="dashboard__sidebar">
						<ul>
							<li><Link to="/machines"><i className="fas fa-window-maximize"></i>Machines</Link></li>
							<li><Link to="/locations"><i className="fas fa-map-marker-alt"></i>Locations</Link></li>
							<li><Link to="/products"><i className="fas fa-box"></i>Products</Link></li>
							<li><Link to="/"><i className="fas fa-chart-bar"></i>Reports</Link></li>
							<li><Link to="/media"><i className="fas fa-play-circle"></i>Media</Link></li>
							<li><Link to="/user-management"><i className="fas fa-cog"></i>User Management</Link></li>
							<li><Link to="/logout"><i className="fas fa-sign-out-alt"></i>Logout</Link></li>
						</ul>
						<div className="version">Version 1.6.32</div>
					</div>
					<div className="dashboard__main">
						{children}
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
