const Counter = () => {
	return (
		<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
			<div className='border border-5 w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column bg-secondary'>
				<h1>
					Counter: <span>0</span>
				</h1>

				<div className='d-flex align-items-center gap-2'>
					<button className='btn btn-success'>Increment</button>
					<button className='btn btn-danger'>Decrement</button>
					<button className='btn btn-info'>Random</button>
				</div>
			</div>
		</div>
	)
}

export default Counter
