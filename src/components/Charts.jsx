'use client';
import { useState, useEffect } from "react";

import { data } from "autoprefixer";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { type } from "@testing-library/user-event/dist/type";

function Chart(){
	const [products, setProducts] = useState([])


  	useEffect(() => {
    	fetch("https://api.coinlore.net/api/tickers/")
      	.then(res => res.json())
      	.then(data => {
        	setProducts(data.data); 
      	})
      	.catch(err => console.error("Failed to fetch data:", err));
  	}, 	[]);

	return (

		<div className="h-[60vh] w-[500px]">
			<ResponsiveContainer width="100%" height="100%">

				<AreaChart width={500} height={400} data={products}>

					<XAxis></XAxis>
					<YAxis></YAxis>
					<CartesianGrid></CartesianGrid>
					
					
					<Area dataKey="percent_change_24h" type="monotone" stroke="green" fill="transparent"></Area>
					<Area dataKey="percent_change_1h" type="monotone" stroke="blue" fill="transparent"></Area>
					<Area dataKey="percent_change_7d" type="monotone" stroke="red" fill="transparent"></Area>
			
			
				</AreaChart>


			</ResponsiveContainer>

			


		

		</div>

		
		
	)
};

export default Chart;