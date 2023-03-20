import PropTypes from 'prop-types';
import './DishCard.scss';

function DishCard({ onClick, data, language, index }) {
	const clickHandler = () => {
		onClick(data);
	};

	return (
		<div
			className='dishcard'
			id={'discard-' + index}
			onClick={clickHandler}>
			<img
				className='dishcard-image'
				src={data.image}
				alt={data.alt}
			/>
			<div className='dishcard-content'>
				<h3 className='dishcard-title'>{data[language].title}</h3>
				<p className='dishcard-price'>{data.price}</p>
				<p className='dishcard-ingredients'>
					{data[language].ingredients}
				</p>
			</div>
		</div>
	);
}

DishCard.propTypes = {
	onClick: PropTypes.func.isRequired,
	language: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	data: PropTypes.shape({
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
}

export default DishCard;
