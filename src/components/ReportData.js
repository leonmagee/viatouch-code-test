import { useState, useEffect } from 'react';

const ReportData = ({from_date, to_date, grouping, sort}) => {

	const [data, setData] = useState({});

	useEffect(() => {
		fetchViatouchData();
	},[]);

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
				"from_date": "2021-06-01",
				"to_date": "2021-12-31",
				"top_level_grouping": "client_id",
				"sort":"items_sold,d"
			})
		});
		const json = await res.json();
		console.log(json);
		setData(json.report[0]);
	}

	return (
	<div className="content__item">
	<h1>Report Data</h1>
		<div className="report-data">
			<div className="report-data__header">
				<div className="report-data__item tiny">Cost</div>
				<div className="report-data__item">Gross Margin</div>
				<div className="report-data__item">Margin Percent</div>
				<div className="report-data__item">Gross Revenues</div>
				<div className="report-data__item medium">Items Sold</div>
				<div className="report-data__item small">Revenues</div>
				<div className="report-data__item tiny">Taxes</div>
				<div className="report-data__item large">Top Level Group</div>
				<div className="report-data__item">Group Name</div>
				<div className="report-data__item">Trans Count</div>
			</div>
			<div className="report-data__body">
				<div className="report-data__item tiny">${data.cost}</div>
				<div className="report-data__item">${data.gross_margin}</div>
				<div className="report-data__item">{data.gross_margin_percent}%</div>
				<div className="report-data__item">${data.gross_revenues}</div>
				<div className="report-data__item medium">{data.items_sold}</div>
				<div className="report-data__item small">${data.revenues}</div>
				<div className="report-data__item tiny">${data.taxes}</div>
				<div className="report-data__item large"><a href="/">{data.top_level_group}</a></div>
				<div className="report-data__item"><a href="/">{data.top_level_group_name}</a></div>
				<div className="report-data__item">{data.transaction_count}</div>
			</div>
		</div>
	</div>
	);
}

export default ReportData;

							{/* cost: 2.4
gross_margin: 9.35
gross_margin_percent: 79.57
gross_revenues: 12.83
items_sold: 24
revenues: 11.75
taxes: 1.08
top_level_group: "fe000721-8c7c-45eb-ac40-50735ed855a1"
top_level_group_name: "Protothon"
transaction_count: 20 */}
