import { useState, createContext } from 'react';
import { experiencesData } from '../data/experiences';

// Create Experiences context
export const ExperiencesContext = createContext();

// Create the Experiences context provider
export const ExperiencesProvider = (props) => {
	const [Experiences, setExperiences] = useState(experiencesData);
	const [searchExperience, setSearchExperience] = useState('');
	const [selectExperience, setSelectExperience] = useState('');

	// Search Experiences by Experience title
	const searchExperiencesByTitle = Experiences.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchExperience.toLowerCase())
			? item
			: searchExperience === ''
			? item
			: '';
		return result;
	});

	// Select Experiences by Experience category
	const selectExperiencesByCategory = Experiences.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectExperience);
	});

	return (
		<ExperiencesContext.Provider
			value={{
				Experiences,
				setExperiences,
				searchExperience,
				setSearchExperience,
				searchExperiencesByTitle,
				selectExperience,
				setSelectExperience,
				selectExperiencesByCategory,
			}}
		>
			{props.children}
		</ExperiencesContext.Provider>
	);
};
