import './Header.scss';

function Header() {
	return (
		<header className='header'>
			<section className='header-main'>
				<div className='header-main-image'></div>
				<h1 className='header-main-title'>La Maison Forestière</h1>
			</section>

			<section className='header-location'>
				<h2 className='header-location-title'>La Maison Forestière</h2>
				<p className='header-location-phone'>tel :0123456789</p>
				<p className='header-location-text'>
					18 Rue des poissonniers, 93200 Saint-Ouen
				</p>
			</section>
		</header>
	);
}

export default Header;
