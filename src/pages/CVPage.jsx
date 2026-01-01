import React from 'react';
import { FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';

const CVPage = () => {
    return (
        <div className="py-12 px-2 max-w-5xl mx-auto bg-white">
            {/* Bouton de téléchargement du CV */}
            <div className="text-right mb-8">
                <a
                    href="/CV_MLG.pdf"
                    download
                    className="inline-flex items-center text-white bg-red-700 font-medium py-2 px-6 rounded hover:bg-red-900 transition-colors"
                >
                    <FaDownload className="mr-2" />
                    Download CV
                </a>
            </div>

            {/* En-tête */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 text-center">Maël Le Guillouzic</h1>
                <p className="text-lg text-gray-600 mt-2 text-center">
                    Master's student in AI and Applied Mathematics specializing in the application of deep learning to physical systems.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    <FaEnvelope className="inline mr-2" />
                    <a href="mailto:mael.leguillouzic@telecom-paris.fr" className="hover:underline">mael.leguillouzic@telecom-paris.fr</a>
                </p>
                <p className="text-sm text-gray-500">
                    <FaPhone className="inline mr-2" />
                    <a href="tel:+33783893979" className="hover:underline">+33 7 83 89 39 79</a>
                </p>
            </div>

            {/* Section Professional Summary */}
            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 text-left pb-2 border-b border-gray-300">Professional Summary</h2>
                <p className="text-gray-700 text-justify mt-4">
                Master's student in AI and Applied Mathematics specializing in the application of deep learning to physical
                systems. Research experience in AI-driven ocean forecasting and atmospheric modeling. Seeking graduate
                programs bridging deep learning and computational physics.
                </p>
            </section>

            {/* Section Education */}
            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 text-left pb-2 border-b border-gray-300">Education</h2>
                
                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">Télécom Paris</h3>
                        <p className="text-sm text-gray-500 italic">2022 - Present</p>
                    </div>
                    <p className="text-sm text-gray-500 italic text-left">Paris, France</p>
                    <ul className="space-y-2 text-gray-700 mt-2">
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Master's in AI, Applied Mathematics, and Computer Science.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Coursework: Deep Learning, Image & Signal Processing, Language Theory, Data Science, Statistics</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">#2 Engineering School in France (2023 ranking).</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-6">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">Preparatory Classes for Grandes Écoles (CPGE)</h3>
                        <p className="text-sm text-gray-500 italic">2019 - 2022</p>
                    </div>
                    <p className="text-sm text-gray-500 italic text-left">Janson-de-Sailly, Paris</p>
                    <ul className="space-y-2 text-gray-700 mt-2">
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Intensive two-year program in advanced mathematics, physics, and engineering sciences.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Top 4% nationwide ranking in competitive entrance examinations.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Section Professional Experience */}
            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 text-left pb-2 border-b border-gray-300">Professional Experience</h2>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">Incoming Research Intern</h3>
                        <p className="text-sm text-gray-500 italic">Starting March 2026</p>
                    </div>
                    <p className="text-sm text-gray-500 italic text-left">CNRS – École Polytechnique (LMD), Paris, France</p>
                    <ul className="space-y-2 text-gray-700 mt-2">
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Building neural surrogate models to accelerate computationally expensive atmospheric chemistry simulations, reducing inference time from hours to seconds for operational air quality prediction</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">Research Intern</h3>
                        <p className="text-sm text-gray-500 italic">Sept 2025 – Feb 2026</p>
                    </div>
                    <p className="text-sm text-gray-500 italic text-left">Danish Meteorological Institute (DMI), Copenhagen, Denmark</p>
                    <ul className="space-y-2 text-gray-700 mt-2">
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Lead author on a manuscript in preparation on AI-based predictive models for sea surface temperature and polar ice concentration forecasting using Multi-resolution architecture (4DVarNet)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Exploration of generative AI approaches to quantify the uncertainties of the forecasts made</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Section Leadership Experience */}
            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 text-left pb-2 border-b border-gray-300">Leadership Experience</h2>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">President, Télécom Paris Student Union</h3>
                        <p className="text-sm text-gray-500 italic">April 2023 - June 2024</p>
                    </div>
                    <p className="text-sm text-gray-500 italic text-left">Palaiseau, France</p>
                    <ul className="space-y-2 text-gray-700 mt-2">
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Led a team of 26 to manage an annual budget of $400,000 and all aspects of student life for 1,600 students</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Implemented initiatives to prevent alcohol-related risks, harassment, and sexual violence</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Served as the primary liaison between the student body and school administration</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">Treasurer, Télécom Voile (Sailing Club)</h3>
                        <p className="text-sm text-gray-500 italic">June 2023 - September 2024</p>
                    </div>
                    <p className="text-sm text-gray-500 italic text-left">Perros-Guirec, France</p>
                    <ul className="space-y-2 text-gray-700 mt-2">
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Managed an annual budget of €7,000 for the school's sailing association</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Leveraged 3 years of sailing instruction experience to enhance club activities</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 text-left pb-2 border-b border-gray-300">Notable Academic Projects</h2>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">SimCLR and BarlowTwins Implementation</h3>
                        <p className="text-sm text-gray-500 italic">2024</p>
                    </div>
                    <ul className="space-y-2 text-gray-700 mt-2">
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">IMAGE track project. Implementation of Google Deepmind's foundation paper of Self-Supervised Learning (Geoffrey Hinton et al.). Improvement with BarlowTwins (Yann Le cun et al.).</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">Cardiac Pathology Detection</h3>
                        <p className="text-sm text-gray-500 italic">2024</p>
                    </div>
                    <ul className="space-y-2 text-gray-700 mt-2">
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Finished 6/75 of our internal school challenge (kaggle) for cardiac pathology detection using deep learning.</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800 text-left">Deepfake Detection using Convolutional Neural Networks</h3>
                        <p className="text-sm text-gray-500 italic">2023</p>
                    </div>
                    <ul className="space-y-2 text-gray-700 mt-2">
                        <li className="flex items-start">
                            <span className="mr-3 mt-2 w-1 h-1 bg-gray-500 rounded-full flex-shrink-0"></span>
                            <span className="text-justify">Generated synthetic faces using fine-tuned diffusion models (Stable Diffusion + LoRAs) and developed CNN-based detector (ResNet-18) achieving high accuracy on real vs. generated face classification.</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Section Technical Skills */}
            <section>
                <h2 className="text-xl font-bold text-gray-800 text-left pb-2 border-b border-gray-300 mb-4">Technical Skills & Additional Informations</h2>
                <p className="text-gray-700 text-justify mb-2">
                    <strong>Areas of Expertise:</strong> Mathematics, Deep Learning, Image Processing, Signal Processing, Data Science.
                </p>
                <p className="text-gray-700 text-justify mb-2">
                    <strong>Languages:</strong> French (Native), English (Professional working proficiency), German (Elementary proficiency).
                </p>
                <p className="text-gray-700 text-justify mb-2">
                    <strong>Interests:</strong> Geopolitics (actively follow international relations and policy developments), Competitive sports (participate in sailing competitions, french national running competitions and ski competitions).
                </p>
            </section>
        </div>
    );
};

export default CVPage;