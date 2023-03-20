import { useEffect, useState } from 'react';

import LanguageContext from './Components/MultiLanguages/LanguageContext';
import LanguageSelector from './Components/MultiLanguages/LanguageSelector';

import GlobalNavbar from './Components/GlobalNavbar/GlobalNavbar';
import Header from './Components/Header/Header.js';
import InPageNavbar from './Components/InPageNavbar/InPageNavbar.js';
import MenuSection from './Components/MenuSection/MenuSection.js';
import Footer from './Components/Footer/Footer.js';
import DishModal from './Components/DishModal/DishModal.js';

import { startersData, mainCourseData, dessertData } from './data';

import './global.scss';
import { samsungBrowserSupport } from './samsungBrowserSupport';

const App = () => {



	// FETCHING DATA SIMULATION FROM DB
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	});

	// LOGIC ON LANGUAGE BUTTON
	const [language, setLanguage] = useState('french');
	const toggleLanguage = () => {
		setLanguage((language) => (language === 'french' ? 'english' : 'french'));
	};

	// LOGIC ON ACTIVE SECTION
	const [activeSection, setActiveSection] = useState(0);

	// LOGIC TO OPEN/CLOSE DISHMODAL
	const [modalOpen, setModalOpen] = useState(false);
	const [dishCardData, setDishCardData] = useState('');

	const modalCloseHandler = () => {
		setModalOpen(false);
	};

	const modalOpenHandler = ({ french, english }) => {
		setModalOpen(true);
		setDishCardData({ french, english });
	};

	// FOR SAMSUNG INTERNET BROWSER BEHAVIOR
	samsungBrowserSupport(modalOpen);

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			<GlobalNavbar classPrefix='global-navbar' loading={loading} />
			<Header />


			<InPageNavbar
				classPrefix='inpage-navbar'
				idSuffix='title'
				activeSection={activeSection}
			/>
			<main className='main-root' >
				{loading === false ? (
					<>
						<MenuSection
							classPrefix='starter'
							idPrefix='starter'
							title={<LanguageSelector contentID='starters' />}
							dishesData={startersData}
							activeSection={activeSection}
							whenInView={() => setActiveSection(0)}
							onClick={modalOpenHandler}
							language={language}
							withDivider={true}
							samsunBrowser={samsungBrowserSupport}
						/>
						<MenuSection
							classPrefix='main-course'
							idPrefix='main-course'
							title={<LanguageSelector contentID='mainCourse' />}
							dishesData={mainCourseData}
							whenInView={() => setActiveSection(1)}
							onClick={modalOpenHandler}
							language={language}
							withDivider={true}
							samsunBrowser={samsungBrowserSupport}
						/>
						<MenuSection
							classPrefix='dessert'
							idPrefix='dessert'
							title={<LanguageSelector contentID='dessert' />}
							dishesData={dessertData}
							whenInView={() => setActiveSection(2)}
							onClick={modalOpenHandler}
							language={language}
							withDivider={false}
							samsunBrowser={samsungBrowserSupport}
						/>
					</>
				) : (
					''
				)}
			</main>
			<Footer
				footerText={
					'Copyright © ' +
					new Date().getFullYear() +
					', Click&Sit. All Rights Reserved.'
				}
			/>
			<DishModal
				modalOpen={modalOpen}
				modalClose={modalCloseHandler}
				dishCardData={dishCardData}
				language={language}
			/>
		</LanguageContext.Provider>
	);
};

export default App;
