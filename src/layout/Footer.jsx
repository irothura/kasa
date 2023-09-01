import logo from "../assets/img/logo-footer.svg";

export default function Footer() {
	return (
		<footer className="foot-container">
			<img src={logo} />
			<p className="foot-container__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}