import PropTypes from 'prop-types';
import LanguageSelector from '../MultiLanguages/LanguageSelector';

import './InPageNavbar.scss';

function InPageNavbar({ classPrefix, activeSection, idSuffix }) {
	return (
		<nav className={classPrefix}>
			<ul className={classPrefix + '-list'}>
				<li>
					<a
						className={
							classPrefix +
							'-list-item' +
							(activeSection === 0 ? ' active' : '')
						}
						href={'#starter-' + idSuffix}>
						{<LanguageSelector contentID='starters' />}
					</a>
				</li>
				<li>
					<a
						className={
							classPrefix +
							'-list-item' +
							(activeSection === 1 ? ' active' : '')
						}
						href={'#main-course-' + idSuffix}>
						{<LanguageSelector contentID='mainCourse' />}
					</a>
				</li>
				<li>
					<a
						className={
							classPrefix +
							'-list-item' +
							(activeSection === 2 ? ' active' : '')
						}
						href={'#dessert-' + idSuffix}>
						{<LanguageSelector contentID='dessert' />}
					</a>
				</li>
			</ul>
		</nav>
	);
}

InPageNavbar.propTypes = {
	classPrefix: PropTypes.string.isRequired,
	activeSection: PropTypes.number.isRequired,
	idSuffix: PropTypes.string.isRequired,
}

export default InPageNavbar;
