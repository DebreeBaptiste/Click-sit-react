import PropTypes from 'prop-types'
import { useRef, useEffect, useState } from 'react';
import LanguageSelector from '../MultiLanguages/LanguageSelector.js';

import './DishModal.scss';

function DishModal({ modalOpen, modalClose, dishCardData, language, }) {

	// ACTION TO LOCK/UNLOCK SCROLL ON PAGE
	useEffect(() => {
		const rootElement = document.querySelector('#root');
		if (modalOpen === true) {
			rootElement.classList.add('open-true');

		} else {

			rootElement.classList.remove('open-true');
		}

	}, [modalOpen]);

	// ACTION TO CLOSE DISHMODAL

	const DishModalCloseHandler = () => {
		modalClose();
		clickIngredientsHandler();
	};

	// LOGIC ON DISHMODAL NAVBAR ITEM

	const ingredientsRef = useRef(null);
	const clickIngredientsHandler = () => ingredientsRef.current.scrollIntoView();

	const allergensRef = useRef(null);
	const clickAlergensHandler = () => allergensRef.current.scrollIntoView();

	// LOGIC ON DISHMODAL NAVBAR DASH

	const [activeTab, setActiveTab] = useState(0);

	const [dashDimension, setDashDimension] = useState({});

	const navIngredientsItemRef = useRef(null);
	const navAllergensItemRef = useRef(null);

	useEffect(() => {
		const setActiveTabDashDimension = () => {
			if (activeTab === 0) {
				setDashDimension({
					offsetWidth: navIngredientsItemRef.current.offsetWidth,
					offsetLeft: navIngredientsItemRef.current.offsetLeft,
				});
			}
			if (activeTab === 1) {
				setDashDimension({
					offsetWidth: navAllergensItemRef.current.offsetWidth,
					offsetLeft: navAllergensItemRef.current.offsetLeft,
				});
			}
		};
		setActiveTabDashDimension();

		const handleResize = () => {
			setActiveTabDashDimension();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [activeTab]);

	const textContainerRef = useRef(null);

	useEffect(() => {
		const intersectionHandler = function (entries, tab) {
			entries.forEach((entry) => {
				if (entry.intersectionRatio > 0.5) {
					setActiveTab(tab);
				}
			});
		};

		const options = {
			root: textContainerRef.current,
			rootMargin: '0px',
			threshold: [0.49, 0.5, 0.51],
		};
		const ingredientsObserver = new IntersectionObserver(
			(entries) => intersectionHandler(entries, 0),
			options
		);
		const allergensObserver = new IntersectionObserver(
			(entries) => intersectionHandler(entries, 1),
			options
		);

		ingredientsObserver.observe(ingredientsRef.current);
		allergensObserver.observe(allergensRef.current);

		return () => {
			ingredientsObserver.unobserve(ingredientsRef.current);
			allergensObserver.unobserve(allergensRef.current);
		};
	}, []);

	// DISHMODAL RENDER
	return (
		<div
			className={`dishmodal-root${' open-' + modalOpen}`}
			onClick={DishModalCloseHandler}>
			<div
				className={`dishmodal-box${' open-' + modalOpen}`}
				onClick={(e) => e.stopPropagation()}>
				<div className='dishmodal-container'>
					<div className='dishmodal-header'>
						<h4 className='dishmodal-title'>
							{modalOpen === true
								? dishCardData[language].title
								: ''}
						</h4>
						<img
							className='dishmodal-button'
							src='../../icon/dishmodal-button.svg'
							alt='modal closing button'
							onClick={DishModalCloseHandler}
						/>
					</div>
					<hr className='dishmodal-divider-navtop'></hr>
					<div className='dishmodal-nav'>
						<span
							className='dishmodal-nav-item'
							id='dishmodal-nav-item-ingredients'
							ref={navIngredientsItemRef}
							onClick={clickIngredientsHandler}>
							{<LanguageSelector contentID='ingredients' />}
						</span>
						<span
							className='dishmodal-nav-item'
							id='dishmodal-nav-item-allergens'
							ref={navAllergensItemRef}
							onClick={clickAlergensHandler}>
							{<LanguageSelector contentID='allergens' />}
						</span>
						<div
							className='dishmodal-nav-dash'
							style={{
								transform:
									'translateX(' +
									dashDimension.offsetLeft +
									'px)' +
									'scaleX(' +
									dashDimension.offsetWidth +
									')',
								opacity: '1',
							}}></div>
					</div>
					<hr className='dishmodal-divider-navbottom'></hr>
					<div className='dishmodal-text-container' ref={textContainerRef}>
						<div className='dishmodal-text-item' ref={ingredientsRef}>
							<p className='dishmodal-ingredients'>
								{modalOpen === true
									? dishCardData[language].ingredients
									: ''}
							</p>
						</div>
						<div className='dishmodal-text-item' ref={allergensRef}>
							<p className='dishmodal-allergens'>
								{modalOpen === true
									? dishCardData[language].allergens
									: ''}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

DishModal.propTypes = {
	modalOpen: PropTypes.bool.isRequired,
	modalClose: PropTypes.func.isRequired,
	language: PropTypes.string.isRequired,

	dishCardData: PropTypes.oneOfType([PropTypes.shape({
		french: PropTypes.shape({
			title: PropTypes.string.isRequired,
			ingredients: PropTypes.string.isRequired,
			allergens: PropTypes.string.isRequired,
		}).isRequired,
		english: PropTypes.shape({
			title: PropTypes.string.isRequired,
			ingredients:
				PropTypes.string.isRequired,
			allergens: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
	PropTypes.string.isRequired]).isRequired,

}

export default DishModal;
