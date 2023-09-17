import { Link } from "react-router-dom";

const TimelineItem = ({ title, dates, position, info, img, isCurrent, isMore }) => {
    return (
        <div className="grid-container grid grid-cols-5">
            <div className="col-span-1 max-w-10 ml-4">
                <Link to={`/experiences/single-experience/${title}`}>
                    <img class="object-contain rounded-lg shadow-xl dark:shadow-gray-800" src={img} alt="Image" />
                </Link>
            </div>
            <div className="col-span-3 ml-4">
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                    
                    { (isCurrent === true) ?
                        <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                            Current
                        </span>
                    : ""}
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-900 dark:text-white">
                    {position}
                </time>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {dates}
                </time>
                <p class="text-base mb-1 font-normal text-gray-500 dark:text-gray-400">
                    {info}
                </p>
                { (isMore === true) ?
                    <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        <svg class="w-3.5 h-3.5 mr-2.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                            <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"/>
                            <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"/>
                        </svg>
                        Read More
                    </a>  
                : ""}
            </div>
        </div>
    )
}

export default TimelineItem;
