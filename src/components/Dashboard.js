//import { useEffect } from 'react';
import Generate from './Generate';
import ReportData from './ReportData';

const Dashboard = () => {

	// useEffect(() => {
	// 	const data = GetData();
	// 	console.log(data);
	// },[]);

	return (
		<div className="content">
			<Generate />
			<ReportData />
		</div>
	);
}

export default Dashboard;
