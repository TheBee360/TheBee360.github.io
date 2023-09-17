import { useContext } from 'react';
import SingleExperienceContext from '../../context/SingleExperienceContext';
import { useParams } from "react-router-dom";

const ExperienceInfo = () => {
	const { singleExperienceData } = useContext(SingleExperienceContext);
	const { title } = useParams();
	const renderSwitch = (title, details) => {
		switch(title) {
			case "Dates":
				return <div>📅 {details}</div>
			case "Location":
				return <div>📍 {details}</div>;
			default:
				return <div>{details}</div>

		}
	}

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single Experience client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{singleExperienceData.get(title).ExperienceInfo.ClientHeading}
					</p>
					<ul className="leading-loose">
						{singleExperienceData.get(title).ExperienceInfo.CompanyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={info.id}
									>
										{/* <span>{info.title}: </span> */}
										{renderSwitch(info.title, info.details)}
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single Experience objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleExperienceData.get(title).ExperienceInfo.ObjectivesHeading}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleExperienceData.get(title).ExperienceInfo.ObjectivesDetails}
					</p>
				</div>

				{/* Single Experience technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleExperienceData.get(title).ExperienceInfo.Technologies[0].title}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{singleExperienceData.get(title).ExperienceInfo.Technologies[0].techs.join(
							', '
						)}
					</p>
				</div>

				{/* Single Experience social sharing
				<div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{singleExperienceData.get(title).ExperienceInfo.SocialSharingHeading}
					</p>
					<div className="flex items-center gap-3 mt-5">
						{singleExperienceData.get(title).ExperienceInfo.SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Experience"
										className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div>
				*/}
			</div>

			{/*  Single Experience right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{singleExperienceData.get(title).ExperienceInfo.ExperienceDetailsHeading}
				</p>
				{singleExperienceData.get(title).ExperienceInfo.ExperienceDetails.map((details) => {
					return (
						<p
							key={details.id}
							className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
						>
							{details.details}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default ExperienceInfo;
