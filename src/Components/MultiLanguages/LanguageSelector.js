import PropTypes from 'prop-types';
import { useContext } from 'react';
import LanguageContext from './LanguageContext';
import translations from './translations';

/**
 * Utility function to generate text dependant on the language
 * @param {React Component props} props destructured just for the contentID
 * @returns
 */
const LanguageSelector = ({ contentID }) => {
	const { language } = useContext(LanguageContext);

	return translations[language][contentID];
};

LanguageSelector.propTypes = {
	contentID: PropTypes.string.isRequired,
}

export default LanguageSelector;
