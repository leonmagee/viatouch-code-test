const ReportData = ({from_date, to_date, data}) => {
let report_data = <div></div>;
	if(from_date && to_date) {
		report_data = (
			<div>
		<div className="date-range">
			<span>{from_date}</span> - <span>{to_date}</span>
		</div>

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

	return (
	<div className="content__item">

		<h1>Financial Summary</h1>

		{report_data}
	</div>
	);
}

export default ReportData;
