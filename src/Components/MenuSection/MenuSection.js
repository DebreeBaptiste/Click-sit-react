import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import DishCard from '../DishCard/DishCard.js';
import './MenuSection.scss';

function MenuSection({
	classPrefix,
	idPrefix,
	title,
	dishesData,
	activeSection,
	whenInView,
	onClick,
	language,
	withDivider,
	samsunBrowser
}) {

	const sectionRef = useRef(null);

	useEffect(() => {

		const options = {
			root: (samsunBrowser() ? null : document.querySelector('#root')),
			rootMargin: `-50px 0px 100px 0px`,
			threshold: [0, 0.09, 0.89, 1]
		};
		const intersectionHandler = (entries) => {

			entries.forEach((entry) => {

				if (
					entry.isIntersecting && entry.boundingClientRect.top < entry.rootBounds.top

				) {
					whenInView();
				}
			});
		};


		const sectionObserver = new IntersectionObserver(
			(entries) => intersectionHandler(entries),
			options
		);
		sectionObserver.observe(sectionRef.current);

		return () => {
			sectionObserver.unobserve(sectionRef.current);
		}
	}, [activeSection]);

	return (
		<>
			<section className={classPrefix + '-root'} ref={sectionRef}>
				<h3 className='main-title' id={idPrefix + '-title'}>
					{title}
				</h3>
				<div className={classPrefix + '-container'}>
					<div className='dishcard-root'>
						{dishesData.map((dish, index) => {
							return (
								<DishCard
									key={dish.id}
									data={dish}
									index={index}
									onClick={onClick}
									language={language}
								/>
							);
						})}
					</div>
				</div>
			</section>
			{withDivider && <hr className='divider' />}
		</>
	);
}

MenuSection.propTypes = {
	classPrefix: PropTypes.string.isRequired,
	idPrefix: PropTypes.string.isRequired,
	language: PropTypes.string.isRequired,
	withDivider: PropTypes.bool.isRequired,
	title: PropTypes.any.isRequired,
	activeSection: PropTypes.number,
	whenInView: PropTypes.func.isRequired,
	onClick: PropTypes.func.isRequired,
	samsunBrowser: PropTypes.func.isRequired,
	dishesData: PropTypes.arrayOf(

		PropTypes.shape({
			id: PropTypes.number.isRequired,
			price: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,

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
		}).isRequired
	).isRequired,


}

export default MenuSection;
