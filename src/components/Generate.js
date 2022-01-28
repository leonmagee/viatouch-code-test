const Generate = () => {
	return (<div className="content__item">
			<h1>Generate Report</h1>
			<div className="form">
				<div className="form__item">
					<label>Report Type</label>

					<select name="report_type">
						<option value="1">Transactions</option>
						<option value="2">Other</option>
					</select>
				</div>
				<div className="form__item">
					<label>Report Type</label>
					<select name="report_type">
						<option value="1">Transactions</option>
						<option value="2">Other</option>
					</select>
				</div>
				<div className="form__item">
					<label>Report Type</label>
					<select name="report_type">
						<option value="1">Transactions</option>
						<option value="2">Other</option>
					</select>
				</div>
				<div className="form__item">
					<label>Report Type</label>
					<select name="report_type">
						<option value="1">Transactions</option>
						<option value="2">Other</option>
					</select>
				</div>
				<div className="form__item">
					<label>Name of Cardholder</label>
					<input name="cardholder"></input>
				</div>
				<div className="form__item">
					<label>Last Four Digits of Card</label>
					<input name="digits"></input>
				</div>
			</div>
	</div>);
}

export default Generate;
