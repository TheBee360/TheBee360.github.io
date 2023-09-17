// Import Project Data
import projectData from './projectData.json';

// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';

// NASA
import NasaImage1 from '../images/NASA/jameswebb-image.png';
import NasaImage2 from '../images/NASA/nasa-ames.png';
import NasaImage3 from '../images/NASA/exoplanet-png.png';


// Alexa
import AlexaImage1 from '../images/Alexa/alexa-multidevice.png';
import AlexaImage2 from '../images/Alexa/iot.png';
import AlexaImage3 from '../images/Alexa/alexa-echo.png';

// Arista Networks
import AristaImage1 from '../images/Arista_Networks/networking.png';
import AristaImage2 from '../images/Arista_Networks/arista-hq.png';
import AristaImage3 from '../images/Arista_Networks/routing.png';

// AWS
import AWSImage1 from '../images/AWS/aws-silk-logo.png';
import AWSImage2 from '../images/AWS/amazon-silk-browser.png';
import AWSImage3 from '../images/AWS/aws-cloud.png';

// Insane Ink

// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

const imageMapConstruct = () => {
	const images = new Map();

	images.set('../images/ui-project-1.jpg', Image1);
	images.set('../images/web-project-2.jpg', Image2);
	images.set('../images/mobile-project-2.jpg', Image3);

	// NASA Images
	images.set('../images/NASA/jameswebb-image.png', NasaImage1);
	images.set('../images/NASA/nasa-ames.png', NasaImage2);
	images.set('../images/NASA/exoplanet-png.png', NasaImage3);

	// Alexa Images
	images.set('../images/Alexa/alexa-multidevice.png', AlexaImage1);
	images.set('../images/Alexa/iot.png', AlexaImage2);
	images.set('../images/Alexa/alexa-echo.png', AlexaImage3);

	// Arista Networks Images
	images.set('../images/Arista_Networks/networking.png', AristaImage1);
	images.set('../images/Arista_Networks/arista-hq.png', AristaImage2);
	images.set('../images/Arista_Networks/routing.png', AristaImage3);

	// Amazon Web Services Images
	images.set('../images/AWS/aws-silk-logo.png', AWSImage1);
	images.set('../images/AWS/amazon-silk-browser.png', AWSImage2);
	images.set('../images/AWS/aws-cloud.png', AWSImage3);

	// Insane Ink Images

	return images;
}

const imageMap = imageMapConstruct();

export const singleProjectData = new Map(projectData.map((data, index) => [
		data["title"], {
			ProjectHeader: {
					title: data["title"],
					publishDate: data["publishDate"],
					tags: data["tags"],
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Kabul Project Management UI',
					img: imageMap.get(data["image"][0]),
				},
				{
					id: 2,
					title: 'Kabul Project Management UI',
					img: imageMap.get(data["image"][1]),
				},
				{
					id: 3,
					title: 'Kabul Project Management UI',
					img: imageMap.get(data["image"][2]),
				},
			],
			ProjectInfo: {
				ClientHeading: 'Project Details',
				CompanyInfo: [
					{
						id: 1,
						title: 'Position',
						details: data["position"],
					},
					{
						id: 2,
						title: 'Dates',
						details: data["dates"],
					},
				],
				ObjectivesHeading: 'Objective',
				ObjectivesDetails: data["objective"],
				Technologies: [
					{
						title: 'Tools & Technologies',
						techs: data["technologies"],
					},
				],
				ProjectDetailsHeading: 'Summary',
				ProjectDetails: [
					{
						id: 1,
						details: data["summary"][0],
					},
					{
						id: 2,
						details: data["summary"][1],
					},
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'Twitter',
						icon: <FiTwitter />,
						url: 'https://twitter.com/realstoman',
					},
					{
						id: 2,
						name: 'Instagram',
						icon: <FiInstagram />,
						url: 'https://instagram.com/realstoman',
					},
					{
						id: 3,
						name: 'Facebook',
						icon: <FiFacebook />,
						url: 'https://facebook.com/',
					},
					{
						id: 4,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/',
					},
					{
						id: 5,
						name: 'Youtube',
						icon: <FiYoutube />,
						url: 'https://www.youtube.com/c/StomanStudio',
					},
				],
			},
			RelatedProject: {
				title: 'Related Projects',
				Projects: [
					{
						id: 1,
						title: 'Mobile UI',
						img: Image4,
					},
					{
						id: 2,
						title: 'Web Application',
						img: Image5,
					},
					{
						id: 3,
						title: 'UI Design',
						img: Image6,
					},
					{
						id: 4,
						title: 'Kabul Mobile App UI',
						img: Image3,
					},
				],
			},
		}]));
