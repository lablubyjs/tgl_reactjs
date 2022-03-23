import React from 'react';

import ContainerRoutes from '@routes/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
	return (
		<main>
			<ContainerRoutes />
			<ToastContainer />
		</main>
	);
}

export default App;
