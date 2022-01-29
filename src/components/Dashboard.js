import { useState, useEffect } from 'react';
import ReportForm from './ReportForm';
import ReportData from './ReportData';

const Dashboard = () => {

	const [fromDate, setFromDate] = useState('');
	const [toDate, setToDate] = useState('');
	const [data, setData] = useState({});

	const updateDates = (fromDate, toDate) => {
		setFromDate(fromDate);
		setToDate(toDate);
	}

	useEffect(() => {
		fetchViatouchData();
	},[toDate, fromDate]);

	const fetchViatouchData = async () => {
		const url = 'https://viatouchmedia-test.apigee.net/loyalty/reports/sales';
		const auth = 'Bearer YCXW1zkNJvg4T6aKK9W6sQx2bNrQ';
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': auth,
			},
			body: JSON.stringify({
				"from_date":fromDate,
				"to_date":toDate,
				"top_level_grouping":"client_id",
				"sort":"items_sold,d"
			})
		});
		const json = await res.json();
		if(json && json.report && json.report.length) {
			setData(json.report[0]);
		}
	}

	return (
		<div className="content">
			<ReportForm updateDates={updateDates} />
			<ReportData from_date={fromDate} to_date={toDate} data={data} />
		</div>
	);
}

export default Dashboard;
