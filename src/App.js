import './App.scss';
import Dashboard from './components/Dashboard';

function App() {

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
							<li><a href="/"><i className="fas fa-window-maximize"></i>Machines</a></li>
							<li><a href="/"><i className="fas fa-map-marker-alt"></i>Locations</a></li>
							<li><a href="/"><i className="fas fa-box"></i>Products</a></li>
							<li><a href="/"><i className="fas fa-chart-bar"></i>Reports</a></li>
							<li><a href="/"><i className="fas fa-play-circle"></i>Media</a></li>
							<li><a href="/"><i className="fas fa-cog"></i>User Mangement</a></li>
							<li><a href="/"><i className="fas fa-sign-out-alt"></i>Logout</a></li>
						</ul>
						<div className="version">Version 1.6.32</div>
					</div>
					<div className="dashboard__main">
					<Dashboard />
					</div>
				</div>
			</div>
    </div>
  );
}

export default App;
