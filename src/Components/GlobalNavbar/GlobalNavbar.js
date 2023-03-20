import PropTypes from 'prop-types';
import { useContext } from 'react';
import { samsungBrowserSupport } from '../../samsungBrowserSupport';

import LanguageContext from '../MultiLanguages/LanguageContext';
import './GlobalNavbar.scss';

const GlobalNavbar = ({ classPrefix, loading }) => {

	const { language, toggleLanguage } = useContext(LanguageContext);

	return (
		<nav className={classPrefix + `-root${' loading-' + loading} ${samsungBrowserSupport() ? 'samsungBrowser' : ''}`}>
			<div
				className={
					classPrefix + `-container${' loading-' + loading}`
				}>
				<img
					className={classPrefix + `-logo${' loading-' + loading}`}
					src='../../image/logo.svg'
					alt='table and chairs logo'
				/>
				<button
					className={
						classPrefix + `-langage-button${' loading-' + loading}`
					}
					onClick={toggleLanguage}>
					{language === 'french' ? 'en' : 'fr'}
				</button>
			</div>
		</nav>
	);
};

GlobalNavbar.propTypes = {
	classPrefix: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired
}

export default GlobalNavbar;
