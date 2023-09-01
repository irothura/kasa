import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import Nav from "../components/Nav";

export default function Header() {
	return (
		<header className="headerWrap">
			<Link to="/" className="headerWrap__fig">
				<img className="logo" src={logo} />
			</Link>
			<Nav className="nav-header" />
		</header>
	);
}