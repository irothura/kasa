import { useParams, Navigate } from "react-router-dom";
import Slider from "../components/Slider";
import Collapse from "../components/Collapse";
import Rate from "../components/Rate";
import Tag from "../components/Tag";
import Host from "../components/Host";

import logements from "../assets/datas/logements.json";

export default function Product() {
	const { id } = useParams();
	const logement = logements.find((logement) => logement.id === id);
	const slidePics = logement && logement.pictures;
	const tags = logement && logement.tags;
	const equipments = logement && logement.equipments;
	const equip =
		logement &&
		equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));
	return (
		<> {
			logement ? (
				<div key={id} className="fiche-container">
					<Slider slides={slidePics} />
					<section className="hostInfo-container">
						<div className="title-tags-container">
							<div className="title-container redFont">
								<h1>{logement.title}</h1>
								<h3>{logement.location}</h3>
							</div>
							<div className="tags-container">
								{tags.map((tag) => (
									<Tag key={tag} tag={tag} />
								))}
							</div>
						</div>
						<div className="rate-host-container">
							<div className="host-container redFont">
								{<Host
									hostName={logement.host.name}
									hostPic={logement.host.picture}
								/>}
							</div>
							<div className="rate-container">
								<Rate score={logement.rating} />
							</div>
						</div>
					</section>
					<div className="collapse-fiche-container">
						<Collapse
							aboutTitle="Description"
							aboutText={logement.description}
						/>
						<Collapse aboutTitle="Équipements" aboutText={equip} />
					</div>
				</div>
			) : <Navigate replace to="/404" />
		}

		</>
	)

}