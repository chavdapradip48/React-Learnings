import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import CardListing from './components/CardListing';
import Navbar from './components/navbar/Navbar';
import CurrencyConverter from './components/currency-converter/CurrencyConverter';

const App = () => {
	return (
		<>
			<Navbar />
			<Toaster position="top-right"/>
			<Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path="/" element={<CardListing />} />
					<Route path="/users" element={<CardListing />} />
					<Route path="/currency-conveter" element={<CurrencyConverter />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;