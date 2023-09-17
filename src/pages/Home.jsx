import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import ExperiencesGrid from '../components/experiences/ExperiencesGrid';
import { ExperiencesProvider } from '../context/ExperiencesContext';
import Button from '../components/reusable/Button';

import Timeline from '../components/reusable/Timeline';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>

			<div className="py-5 sm:py-10 mt-5 sm:mt-10">
				<p className="text-center font-general-medium text-2xl sm:text-4xl mt-5 text-ternary-dark dark:text-ternary-light">
					Experience
				</p>
				<p className="font-general-medium text-2xl sm:text-4xl mt-1 text-ternary-dark dark:text-ternary-light">2023</p>
				<Timeline />
			</div>

			<ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider>

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
