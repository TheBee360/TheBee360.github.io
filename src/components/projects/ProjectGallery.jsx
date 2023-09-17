import { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { useParams } from "react-router-dom";

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const { title } = useParams();

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData.get(title).ProjectImages.map((Project) => {
				return (
					<div className="mb-10 sm:mb-0" key={Project.id}>
						<img
							src={Project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={Project.title}
							key={Project.id}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectGallery;
