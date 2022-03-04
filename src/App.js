import ScrollToTop from './ScrollToTop';

// I installed the scroll-to-top library incase you wanna try it out also. Feel free to uncomment the code below
// import ScrollToTop from 'react-scroll-to-top';

function App() {
	return (
		<div className="App">
			{/* Ensure to import the scroll-to-top component to the App.js file */}
			<ScrollToTop />
			<div className="section section1"></div>
			<div className="section section2"></div>
			<div className="section section3"></div>
			<div className="section section4"></div>
			<div className="section section5"></div>
		</div>
	);
}

export default App;
