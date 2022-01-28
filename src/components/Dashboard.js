import { useState } from 'react';
import ReportForm from './ReportForm';
import ReportData from './ReportData';

const Dashboard = () => {

	const [fromDate, setFromDate] = useState('2021-06-01');
	const [toDate, setToDate] = useState('2021-12-31');

	const updateDates = (fromDate, toDate) => {
		setFromDate(fromDate);
		setToDate(toDate);
	}

	return (
		<div className="content">
			<ReportForm updateDates={updateDates} />
			<ReportData from_date={fromDate} to_date={toDate} />
		</div>
	);
}

export default Dashboard;
