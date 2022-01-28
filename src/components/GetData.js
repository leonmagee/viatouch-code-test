import { useEffect } from 'react';

const GetData = () => {

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
				"from_date": "2021-12-01",
				"to_date": "2021-12-31",
				"top_level_grouping": "client_id",
				"sort":"items_sold,d"
			})
		});
		const json = await res.json();
		return json;
	}
}

export default GetData;
