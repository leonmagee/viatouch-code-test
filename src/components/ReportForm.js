import { useState } from 'react';
//import $  from 'jquery';
//import * from 'jquery-datetimepicker';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';



const ReportForm = ({ updateDates }) => {

	// $.datetimepicker.setLocale("en");
	// $("#from_date, #to_date").datetimepicker(
	// 	{
	// 		timepicker: false,
	// 		format: "M d, Y",
	// 	}
	// );

	const [fromDateInput, setFromDateInput] = useState('');
	const [toDateInput, setToDateInput] = useState('');

	const [startDate, setStartDate] = useState(new Date());

	const processSubmit = e => {
		e.preventDefault();
		console.log('working??? new???');
		updateDates(fromDateInput, toDateInput);
		//updateDates('2021-12-01', '2021-12-31');
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
						<input name="from_date" value={fromDateInput} onChange={e => setFromDateInput(e.target.value)}></input>
					</div>
					<div className="form__item">
						<label>To Date</label>
						<input name="to_date" value={toDateInput} onChange={e => setToDateInput(e.target.value)}></input>
					</div>
					    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

				</div>
				<button className="primary">Create Report</button>
			</form>
	</div>);
}

export default ReportForm;
