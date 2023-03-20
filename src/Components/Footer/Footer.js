import PropTypes from 'prop-types'
import './Footer.scss';

function Footer({ footerText }) {
	return (
		<footer className='footer'>
			<div className='footer-content'>
				<p className='footer-text'>{footerText}</p>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	footerText: PropTypes.string.isRequired
}

export default Footer;
