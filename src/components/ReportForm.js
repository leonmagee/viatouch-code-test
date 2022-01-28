import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ReportForm = ({ updateDates }) => {

	const [fromDateInput, setFromDateInput] = useState('');
	const [toDateInput, setToDateInput] = useState('');

	const processSubmit = e => {
		e.preventDefault();
		updateDates(fromDateInput, toDateInput);
	}

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
					<a href="/">Yesterday</a>
					<a href="/">Today</a>
					<a href="/">1 Week</a>
					<a href="/">6 Months</a>
					<a href="/">1 Year</a>
				</div>
			</form>
	</div>);
}

export default ReportForm;
