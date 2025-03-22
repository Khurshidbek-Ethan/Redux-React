import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import reducer from './redux/reducer.js'
import { legacy_createStore } from 'redux'
import App from './components/app.jsx'

const store = legacy_createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
		,
	</StrictMode>
)
