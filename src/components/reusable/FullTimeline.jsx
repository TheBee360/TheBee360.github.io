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

const FullTimeLine = () => {
    return (
        <div className="container mx-auto">
            <p className="text-center font-general-medium text-2xl sm:text-4xl mt-5 text-ternary-dark dark:text-ternary-light">
                Experience
            </p>

            <p className="font-general-medium text-2xl sm:text-4xl mt-1 text-ternary-dark dark:text-ternary-light">
                2023
            </p>
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
                            info={"Harnessing the power of machine learning (ML) and data from the James Webb Space Telescope (JWST) to predict atmospheric features of exoplanets, with the goal of potentially finding life beyond our planet."}
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
            </section>

            <p className="font-general-medium text-2xl sm:text-4xl mt-1 text-ternary-dark dark:text-ternary-light">
                2022
            </p>
            <section className="py-5 sm:py-10 font-general-medium text-2xl sm:text-4xl">
                <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li class="mb-10 ml-6">            
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <TimelineItem
                            title={"Amazon Web Services"}
                            position={"Software Engineer Intern"}
                            dates={"June 2022 - September 2022"}
                            info={"Streamlined browser performance analysis with cloud computing and full-stack development, enhancing the user experience for millions of people on Amazon Silk."}
                            img={AWSImage}
                            isCurrent={false}
                            isMore={false}
                        />
                    </li>
                </ol>
            </section>

            <p className="font-general-medium text-2xl sm:text-4xl mt-1 text-ternary-dark dark:text-ternary-light">
                2020
            </p>
            <section className="py-5 sm:py-10 font-general-medium text-2xl sm:text-4xl">
                <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li class="mb-10 ml-6">            
                        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </span>
                        <TimelineItem
                            title={"Insane Ink"}
                            position={"Webmaster"}
                            dates={"September 2019 - June 2020"}
                            info={"Made various improvements to the Insane Ink website to improve site navigation, usage, and apparel visibility."}
                            img={InsaneInkImage}
                            isCurrent={false}
                            isMore={false}
                        />
                    </li>
                </ol>
            </section>
        </div>
    )
}

export default FullTimeLine;