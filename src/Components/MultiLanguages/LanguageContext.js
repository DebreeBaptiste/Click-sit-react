import { createContext } from 'react';
import translations from './translations';

const LanguageContext = createContext(translations.french);

export default LanguageContext;
