import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateTime from 'date-and-time';
import format from "date-fns/format";

const ReportForm = ({ updateDates }) => {

	const [fromDateInput, setFromDateInput] = useState('');
	const [toDateInput, setToDateInput] = useState('');

	const processSubmit = e => {
		e.preventDefault();
		const fromDate = format(fromDateInput, "yyyy-MM-dd", { awareOfUnicodeTokens: true });
		const toDate = format(toDateInput, "yyyy-MM-dd", { awareOfUnicodeTokens: true });

		updateDates(fromDate, toDate);
	}

	const curr = new Date();
	const today = DateTime.format(curr, 'YYYY-MM-DD');

	const curr2 = new Date();
	const first = curr2.getDate() -1;
	const yesterday = new Date(curr2.setDate(first));
	const oneDayAgo = DateTime.format(yesterday, 'YYYY-MM-DD');

	const curr3 = new Date();
	const second = curr3.getDate() -2;
	const twoDays = new Date(curr3.setDate(second));
	const twoDaysAgo = DateTime.format(twoDays, 'YYYY-MM-DD');


	const weekFirst = curr.getDate() - curr.getDay() -1;
	const startDate = new Date(curr.setDate(weekFirst));
	const oneWeekAgo = DateTime.format(startDate, 'YYYY-MM-DD');
	const yearFirst = curr.getDate() - 365;
	const yearStartDate = new Date(curr.setDate(yearFirst));
	const oneYearAgo = DateTime.format(yearStartDate, 'YYYY-MM-DD');
	const monthFirst = (curr.getMonth() - 1) > 0 ? (curr.getMonth() - 1) : 11;
	const monthStartDate = new Date(curr.setMonth(monthFirst));
	const oneMonthAgo = DateTime.format(monthStartDate, 'YYYY-MM-DD');

	return (<div className="content__item">
			<h1>Generate Report</h1>
			<form className="form" onSubmit={processSubmit}>
				<div className="form__inner">
					<div className="form__item">
						<label>Report Type</label>
						<select name="report_type">
							<option value="1">Financial Summary</option>
						</select>
					</div>
					<div className="form__item">
						<label>From Date</label>
					  <DatePicker dateFormat="yyyy-MM-dd" selected={fromDateInput} onChange={(date) => setFromDateInput(date)} />
					</div>
					<div className="form__item">
						<label>To Date</label>
					  <DatePicker dateFormat="yyyy-MM-dd" selected={toDateInput} onChange={(date) => setToDateInput(date)} />
					</div>
				</div>
				<button className="primary">Create Report</button>
				<div className="quick-select-options">
					<div><h3>Quick Select Options</h3></div>
					<span onClick={() => updateDates(twoDaysAgo, oneDayAgo)}>Yesterday</span>
					<span onClick={() => updateDates(oneDayAgo, today)}>Today</span>
					<span onClick={() => updateDates(oneWeekAgo, today)}>1 Week</span>
					<span onClick={() => updateDates(oneMonthAgo, today)}>1 Month</span>
					<span onClick={() => updateDates(oneYearAgo, today)}>1 Year</span>
				</div>
			</form>
	</div>);
}

export default ReportForm;
