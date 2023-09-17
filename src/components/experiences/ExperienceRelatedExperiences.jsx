import { useContext } from 'react';
import SingleExperienceContext from '../../context/SingleExperienceContext';
import { useParams } from "react-router-dom";

const ExperienceRelatedExperiences = () => {
	const { singleExperienceData } = useContext(SingleExperienceContext);
	const { title } = useParams();

	return (
		<div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
			<p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
				{singleExperienceData.get(title).RelatedExperience.title}
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
				{singleExperienceData.get(title).RelatedExperience.Experiences.map((Experience) => {
					return (
						<img
							src={Experience.img}
							className="rounded-xl cursor-pointer"
							alt={Experience.title}
							key={Experience.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ExperienceRelatedExperiences;
