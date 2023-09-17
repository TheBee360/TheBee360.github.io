import React from "react";
import 'flowbite';
import TimelineItem from "./TimelineItem";
import { Link } from 'react-router-dom';
import Button from './Button';

import NASAImage from '../../images/nasa-experience-PhotoRoom.png';
import AWSImage from '../../images/aws-experience.jpg';
import AlexaImage from '../../images/alexa-experience.jpg';
import AristaImage from '../../images/arista-experience.jpg';
import InsaneInkImage from '../../images/insaneink-experience.jpg';

const Timeline = () => {
    return (
        <section className="py-5 sm:py-10 font-general-medium text-2xl sm:text-4xl">
            <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
                <li class="mb-10 ml-6">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <TimelineItem
                        title={"NASA Ames Research Center"}
                        position={"Machine Learning Intern"}
                        dates={"September 2023 - December 2023"}
                        info={"Harnessing the power of machine learning (ML) and data from the James Webb Space Telescope (JWST) to predict atmospheric features of exoplanets, with the goal of potentially finding signs of life beyond our planet."}
                        img={NASAImage}
                        isCurrent={true}
                        isMore={false}
                    />
                </li>

                <li class="mb-10 ml-6 h-25px">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <TimelineItem
                        title={"Alexa"}
                        position={"Software Engineer Intern"}
                        dates={"June 2023 - September 2023"}
                        info={"Leveraged systems design and backend engineering to improve machine learning (ML) workflow and device arbitration in a multi-device environment for millions of Alexa customers."}
                        img={AlexaImage}
                        isCurrent={false}
                        isMore={false}
                    />
                </li>

                <li class="mb-10 ml-6">            
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </span>
                    <TimelineItem
                        title={"Arista Networks"}
                        position={"Software Engineer Intern"}
                        dates={"April 2023 - June 2023"}
                        info={"Used software-defined networking (SDN) to improve the performance and support of Arista's EOS routing engine, enabling it to scale and meet the demands of the world's biggest cloud data centers."}
                        img={AristaImage}
                        isCurrent={false}
                        isMore={false}
                    />
                </li>
            </ol>
            <div className="mt-8 sm:mt-10 flex justify-center">
					<Link
						to="/experiences"
						className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
						aria-label="More Projects"
					>
						<Button title="Check out more" />
					</Link>
				</div>
        </section>
    )
}

export default Timeline;