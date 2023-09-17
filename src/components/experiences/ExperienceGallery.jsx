import { useContext } from 'react';
import SingleExperienceContext from '../../context/SingleExperienceContext';
import { useParams } from "react-router-dom";

const ExperienceGallery = () => {
	const { singleExperienceData } = useContext(SingleExperienceContext);
	const { title } = useParams();

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleExperienceData.get(title).ExperienceImages.map((Experience) => {
				return (
					<div className="mb-10 sm:mb-0" key={Experience.id}>
						<img
							src={Experience.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={Experience.title}
							key={Experience.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ExperienceGallery;
