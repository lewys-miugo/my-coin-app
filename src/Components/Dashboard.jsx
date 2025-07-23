const URL = "https://api.coinlore.net/api/tickers/"

function Dashboard (){

	return (

		<div className="bg-gray-800 h-[45vh]">

			<div className="flex justify-between gap-[1vw] h-[40vh]">
				<TotalCoins />
				<StaredCoins />
				<CreatedCoins />
			</div>
			<Chart />


		</div>
	)

}

function TotalCoins(){
	return (
		<div className="bg-black text-green-500 w-1/3 rounded-[10px] mt-[20px] ml-[10px]">

			<h2 className="">Total Number of coins</h2>

		</div>
	)
}

function StaredCoins(){
	return (
		<div className="bg-black text-blue-500 w-1/3 rounded-[10px] mt-[20px]">

			<h2>Coins Stared</h2>

		</div>
	)
}

function CreatedCoins(){
	return (
		<div className="bg-black text-red-500 w-1/3 rounded-[10px] mt-[20px] mr-[10px]">

			<h2>Coins Created</h2>

		</div>
	)
}
function Chart(){
	return (
		<div>
			graphs and charts
		</div>
	)
} 
export default Dashboard