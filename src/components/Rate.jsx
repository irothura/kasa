import emptyStar from "../assets/img/emptyStar.svg";
import fullStar from "../assets/img/star-rate.svg";

export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-comp">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={fullStar}
					/>
				) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<img
						key={level.toString()}
						className="star"
						src={emptyStar}
					/>
				)
			)}
		</div>
	);
}