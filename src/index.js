import React from 'react';

//-----router-----//
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//-----redux-----//
import { Provider } from 'react-redux';
import store from 'store/store';

//-----widgets-----//
import App from 'App';

import 'assets/global-styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
);
