const AboutClientSingle = ({ title, image, place, category }) => {
	return (
		<>
			<div className="text-center px-6 py-8">
				<img
					src={image}
					className="mx-auto w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
					alt={title}
				/>
				<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
					{place}
				</p>
				<span className="text-lg text-ternary-dark dark:text-ternary-light">
					{category}
				</span>
			</div>
		</>
	);
};

export default AboutClientSingle;
