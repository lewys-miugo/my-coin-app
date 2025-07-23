function Dashboard (){

	return (

		<div className="bg-blue">

			<h1 className='text-gray-500'>working</h1>
			<div className="flex justify-between">
				<TotalCoins />
				<StaredCoins />
				<CreatedCoins />
			</div>


		</div>
	)

}

function TotalCoins(){
	return (
		<div>

			<h2>Total Number of coins</h2>

		</div>
	)
}

function StaredCoins(){
	return (
		<div>

			<h2>Coins Stared</h2>

		</div>
	)
}

function CreatedCoins(){
	return (
		<div>
			<h2>Coins Created</h2>
		</div>
	)
}

export default Dashboard