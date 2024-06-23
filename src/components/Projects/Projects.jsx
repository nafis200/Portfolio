
import { Fade, Zoom } from 'react-awesome-reveal';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className="section projects-section mx-4 md:mx-10 lg:mx-14 mb-20" id="projects">
            {/* <div className="section projects-section max-w-[370px] md:max-w-[540px] lg:max-w-[1540px] mx-auto mb-20" id="projects"> */}
            <Fade>
                <h2 className="hover:text-blue-600 text-xl text-center md:text-[40px] text-cyan-400 font-bold mb-10"> Projects </h2>
            </Fade>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Zoom>
                    <div className="skill-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300">
                        <h4 className="text-xl font-bold mb-2">Online Survey (Full Stack)</h4>
                        <p className="mb-2"><strong>Live-link:</strong> <a href="https://assignment-12-80409.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Online survey</a></p>
                        <p className="mb-2"><strong>Client-side:</strong> <a href="https://github.com/programming-hero-web-course1/b9a12-client-side-nafis200" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Features:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Implement a secure user authentication system using JWT tokens</li>
                            <li>Role-based access control with multiple roles such as user, pro-user, admin, and surveyor.</li>
                            <li>mplement fine-grained access control to specify who can view, edit, or manage surveys.</li>
                        </ul>
                        <p className="mb-2"><strong>Technology:</strong></p>
                        <p>Front-end: React.js, HTML, CSS, JavaScript, Axios, Tailwind CSS, Firebase</p>
                        <p>Back-end: Node.js, Express.js, MongoDB, JWT</p>
                        <div className="text-center flex justify-center space-x-4 mt-4">
                            <a href="https://assignment-12-80409.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaExternalLinkAlt className="text-2xl" />
                            </a>
                            <a href="https://github.com/programming-hero-web-course1/b9a12-client-side-nafis200" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </Zoom>

                <Zoom>
                    <div className="skill-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300">
                        <h4 className="text-xl font-bold mb-2">Online Group-Study assignment (Full Stack)</h4>
                        <p className="mb-2"><strong>Live-link:</strong> <a href="https://assignment-11-3c42f.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Online group study</a></p>
                        <p className="mb-2"><strong>Client-side:</strong> <a href="https://github.com/nafis200/assignmnet11-client?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Features:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>authentication base web site</li>
                            <li>pagination</li>
                            <li>includes Crud operation
                            apply pagination</li>
                        </ul>
                        <p className="mb-2"><strong>Technology:</strong></p>
                        <p>Front-end: React.js, HTML, CSS, JavaScript, Tailwind CSS, Firebase</p>
                        <p>Back-end: Node.js, Express.js, MongoDB</p>
                        <div className="text-center flex justify-center space-x-4 mt-4">
                            <a href="https://assignment-11-3c42f.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaExternalLinkAlt className="text-2xl" />
                            </a>
                            <a href="https://github.com/nafis200/assignmnet11-client?tab=readme-ov-file" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </Zoom>
                <Zoom>
                    <div className="skill-category bg-base-100 border-2 border-blue-400 hover:border-cyan-300 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-cyan-200 transition-shadow duration-300">
                        <h4 className="text-xl font-bold mb-2">Tourism Spot Management (Full Stack)</h4>
                        <p className="mb-2"><strong>Live-link:</strong> <a href="https://assignment-10-4f92e.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Tourism spot</a></p>
                        <p className="mb-2"><strong>Client-side:</strong> <a href="https://github.com/nafis200/assignmnet10-client" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Repo</a></p>
                        <p className="mb-2"><strong>Features:</strong></p>
                        <ul className="list-disc list-inside mb-2">
                            <li>Add, update place (CRUD)</li>
                            <li>Detailed tourism place Info</li>
                            <li>Applied sort according to cost</li>
                        </ul>
                        <p className="mb-2"><strong>Technology:</strong></p>
                        <p>Front-end: React.js, HTML, CSS, JavaScript, Tailwind CSS, Firebase</p>
                        <p>Back-end: Node.js, Express.js, MongoDB</p>
                        <div className="text-center flex justify-center space-x-4 mt-4">
                            <a href="https://assignment-10-4f92e.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaExternalLinkAlt className="text-2xl" />
                            </a>
                            <a href="https://github.com/nafis200/assignmnet10-client" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Projects;
