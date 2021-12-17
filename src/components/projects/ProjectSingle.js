import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			exit={{ opacity: 0 }}
		>
			<Link
				to="/projects/single-project"
				className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"
				aria-label="Single Project"
			>
				<div>
					<img
						src={image}
						className="rounded-t-xl border-none"
						alt="Single Project"
					/>
				</div>
				<div className="text-center px-4 py-6">
					<p className="text-2xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">
						{title}
					</p>
					<span className="text-lg text-ternary-dark dark:text-ternary-light">
						{category}
					</span>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
