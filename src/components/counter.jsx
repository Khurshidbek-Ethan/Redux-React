// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as actions from '../redux/actions'
// const Counter = ({ counter, inc, decr, rnd }) => {
// 	return (
// 		<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
// 			<div className='border border-5 w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column bg-secondary'>
// 				<h1>
// 					Counter: <span>{counter}</span>
// 				</h1>

// 				<div className='d-flex align-items-center gap-2'>
// 					<button className='btn btn-success' onClick={inc}>
// 						Increment
// 					</button>
// 					<button className='btn btn-danger' onClick={decr}>
// 						Decrement
// 					</button>
// 					<button className='btn btn-info' onClick={rnd}>
// 						Random
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// const mapStateToProps = state => {
// 	return {
// 		counter: state.count,
// 	}
// }

// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators(actions, dispatch)
// 	// const { inc, decr, rnd } = bindActionCreators(actions, dispatch)
// 	// return {
// 	// 	inc,
// 	// 	decr,
// 	// 	rnd,
// 	// 	// inc: () => dispatch({ type: 'INC' }),
// 	// 	// decr: () => dispatch({ type: 'DECR' }),
// 	// 	// rnd: () => {
// 	// 	// 	const randomValue = Math.floor(Math.random() * 100)
// 	// 	// 	dispatch({ type: 'RND', payload: randomValue })
// 	// 	// },
// 	// }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

/////////////////////////   redux and react intagratsiya hooks   ///////////////////////////////////////

import { useDispatch, useSelector } from 'react-redux'
import { inc, decr, rnd } from '../redux/actions'

const Counter = () => {
	// reducerni ichidagi statetimizni qaytarib beradi
	const { count } = useSelector(state => state)

	// reducerlarni ozgartiradigon dispatch
	const dispatch = useDispatch()

	return (
		<div className='w-full vh-100 bg-dark text-white d-flex justify-content-center align-items-center'>
			<div className='border border-5 w-50 p-5 rounded border-success border-opacity-50 d-flex align-items-center flex-column bg-secondary'>
				<h1>
					Counter: <span>{count}</span>
				</h1>

				<div className='d-flex align-items-center gap-2'>
					<button
						className='btn btn-success'
						onClick={() => dispatch(inc())}
					>
						Increment
					</button>
					<button
						className='btn btn-danger'
						onClick={() => dispatch(decr())}
					>
						Decrement
					</button>
					<button
						className='btn btn-info'
						onClick={() => dispatch(rnd())}
					>
						Random
					</button>
				</div>
			</div>
		</div>
	)
}

export default Counter
