import { useEffect,useState } from "react"
import Chart from "./Charts"




const URL = "https://api.coinlore.net/api/tickers/"


function Dashboard (){

	return (

		<div className="bg-gray-800 h-[110vh]">

			<div className="flex justify-between gap-[1vw] h-[40vh]">
				<TotalCoins />
				<StarredCoins />
				<CreatedCoins />
			</div>
			<Chart/>


		</div>
	)

}

function TotalCoins(){

	const [coins, setCoins]= useState([])

	
	useEffect(()=>{
		fetch (URL)
		.then(res=>res.json())
		.then(data=>{

			console.log(data.length);
				setCoins(data.data);
		})
		.catch(error=>{
			console.error('error')
		})
	}, []);

 
	return (
		<div className="bg-black text-green-500 w-1/3 rounded-[10px] mt-[20px] ml-[10px] text-center">

			<h2 className="">Total Number of coins</h2>
			<p className="text-[200px] font-bold cursor-default">
				{coins.length}
			</p>
		</div>
	)
}

function StarredCoins(){
	const [starred, setStarred] = useState([])

	useEffect(()=>{
		fetch("https://my-json-server.typicode.com/lewys-miugo/my-coin-app/starred")
		.then(res=>res.json())
		.then (data=>{
			setStarred(data)
		})
		.catch(error=>{
			console.error("error")
		})

	},[])


	return (
		<div className="bg-black text-blue-500 w-1/3 rounded-[10px] mt-[20px] text-center">

			<h2 className="">Coins Starred</h2>
			<p className="text-[200px] font-bold cursor-default">
				{starred.length}
			</p>


		</div>
	)
}

function CreatedCoins(){
	const [created, setCreated] = useState([])

	useEffect(()=>{
		fetch("https://my-json-server.typicode.com/lewys-miugo/my-coin-app/coins")
		.then(res=>res.json())
		.then (data=>{
			setCreated(data)
		})
		.catch(error=>{
			console.error("error")
		})

	},[])



	return (
		<div className="bg-black text-red-500 w-1/3 rounded-[10px] mt-[20px] mr-[10px] text-center">

			<h2>Coins Created</h2>
			<p className="text-[200px] font-bold cursor-default">
				{created.length}
			</p>

		</div>
	)
}

export default Dashboard