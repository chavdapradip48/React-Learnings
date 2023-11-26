import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.css';

import CardListing from './components/CardListing';
import Navbar from './components/navbar/Navbar';
import CurrencyConverter from './components/currency-converter/CurrencyConverter';
import { MiniContext } from './components/mini-context/MiniContext';
import { UserDarkLightMode } from './components/user-dark-light-mode/UserDarkLightMode';

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
					<Route path="/mini-context" element={<MiniContext />} />
					<Route path="/user-dark-light-mode" element={<UserDarkLightMode />} />
					
				</Routes>
			</Suspense>
		</>
	);
};

export default App;