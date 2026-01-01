import React from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
    {
        id: 'ProjetPANEL',
        title: 'Table Ronde : \"Les Métiers de la Data\"',
        description: 'Animation d\'une table ronde sur les métiers de la Data à Télécom Paris devant 220 étudiants',
    }
];

const ProjetPANEL = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);
    const config = {
        loader: { load: ['input/asciimath', 'output/chtml'] },
    };

    // Vérifier si le projet existe
    if (!project) {
        return <div> Project not found... Id = {id}</div>;
    }

    return (
        <MathJaxContext config={config}>
            <div className="py-4 px-1 max-w-4xl mx-auto bg-white">
                {/* Bouton de retour */}
                <div className="flex justify-start mb-8">
                    <Link
                        to="/projets"
                        className="inline-block bg-black text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition-colors"
                    >
                        ← Back to Projects
                    </Link>
                </div>

                <h1 className="text-4xl font-bold mt-6 mb-8 text-gray-900 justify-center">{project.title}</h1>
                
                <section className="mb-8 text-left">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Le 1 Octobre 2024, j’ai eu l’opportunité d’animer une table ronde à Télécom Paris sur les métiers
                        de la Data, en compagnie de <a href="https://laclauc.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Charlotte Laclau</a>,
                        devant 220 étudiants. Nous avons échangé avec des experts venant de grands groupes comme <strong>Chanel</strong>, 
                        <strong>Ubisoft</strong>, <strong>IBM</strong>, et <strong>BNP Paribas</strong>.
                    </p>
                </section>

                <section className="mb-8 text-left">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Les Intervenants</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="text-center">
                            <img src="/data_panel/etien.jpeg" alt="Remy ETIEN" className="w-32 h-32 mx-auto rounded-full border-2 border-gray-300 shadow-sm"/>
                            <a href="https://www.linkedin.com/in/remy-etien-8b180/" target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-blue-600 hover:underline mt-4">
                                Remy ETIEN</a>
                            <p className="text-gray-700 mt-2 text-sm">
                                Head of Data - Global Corporate (<strong>CHANEL</strong>)
                            </p>
                        </div>

                        <div className="text-center">
                            <img src="/data_panel/safar.jpeg" alt="Victor SAFAR" className="w-32 h-32 mx-auto rounded-full border-2 border-gray-300 shadow-sm"/>
                            <a href="https://www.linkedin.com/in/victor-safar-9207b1177/" target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-blue-600 hover:underline mt-4">
                                Victor SAFAR</a>
                            <p className="text-gray-700 mt-2 text-sm">
                                Team Lead Data Strategy & Data Science (<strong>Ubisoft</strong>)
                            </p>
                        </div>

                        <div className="text-center">
                            <img src="/data_panel/layachi.jpeg" alt="Mohamed LAYACHI" className="w-32 h-32 mx-auto rounded-full border-2 border-gray-300 shadow-sm"/>
                            <a href="https://www.linkedin.com/in/mohamed-layachi-14a19335/" target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-blue-600 hover:underline mt-4">
                                Mohamed LAYACHI</a>
                            <p className="text-gray-700 mt-2 text-sm">
                                Associate Partner (<strong>IBM</strong>)
                            </p>
                        </div>

                        <div className="text-center">
                            <img src="/data_panel/truchetet.jpeg" alt="Antoine Truchetet" className="w-32 h-32 mx-auto rounded-full border-2 border-gray-300 shadow-sm"/>
                            <a href="https://www.linkedin.com/in/antoine-truchetet-82880b4/" target="_blank" rel="noopener noreferrer" className="block text-lg font-semibold text-blue-600 hover:underline mt-4">
                                Antoine Truchetet </a>
                            <p className="text-gray-700 mt-2 text-sm">
                                Data Engineer and Project Manager (<strong>BNP Paribas</strong>)
                            </p>
                        </div>
                    </div>
                </section>


                <p className="text-lg text-gray-700 mb-8 text-center italic">
                Mais quel était l’intêret de cette discussion pour le public ? A qui s’adressait elle ? De quoi avons nous parlé ?
                </p>

                <p className="text-lg text-gray-700 mb-3 text-justify">
                Le <strong>cycle de tables rondes</strong> se compose d’une série d’une <strong>dizaine</strong> d’évènements, répartis sur l’année, ayant pour vocation à aborder 
                les différents secteurs de débouchés potentiels d’une grande école d’ingénieurs. <br /> IA, conseil, cybersécurité … chacun de ces thèmes 
                fait l’object d’une table ronde. L’audience est ainsi constituée d’élèves ingénieurs en majorité, curieux de découvrir un thème, 
                qu’ils connaissent pour certains, et qui occupera surement les premières années de leur vie professionelle.
                </p>

                <section className="p-6 bg-white border rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <span className="text-blue-500 mr-2">🎯</span> Objectifs de l'animation
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-left">
                        Les métiers de la DATA constituent un thème vaste. Rester en surface risque de désintéresser les experts, 
                        mais approfondir pourrait exclure les moins initiés. En tant qu’animateur, il était essentiel de :
                    </p>
                    <ul className="list-none pl-6 mt-4 space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">➔</span>
                            <p className='text-left'>Captiver un public varié, des novices aux experts. Il nous a fallu pour cela trouver un juste milieu, 
                                un terrain d'entente qui tienne compte des intérêts de chacun. </p>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-500 mr-3">➔</span>
                            <p className='text-left'>Proposer une discussion favorisant l'échange entre les intervenants, tout en cadrant les débats pour maintenir l'intérêt du public. 
                            </p>
                        </li>
                    </ul>
                </section>


                <p className="text-lg text-gray-700 mb-3 text-justify">
                C’est pourquoi nous avons fait le choix, avec Charlotte Laclau, de <strong>prendre la parole pour quelques minutes au début de la discussion</strong>, et de faire une rapide mise au point technique sur le sujet. 
                Définir les termes de base, un petit historique du domaine car <em>on ne peut savoir ou on va si on ne sait d’ou on vient</em>, et une présentation rapide des enjeux majeurs actuels. <br /> <br />
                <strong>L’objectif :</strong> donner un socle commun à tout auditeur, et permettre aux intervenants d’entrer plus rapidement et avec séreinité dans les détails techniques d’interet.
                </p>

                <div className="flex justify-center mb-2">
                    <img
                        src="/data_panel/image2.JPG"
                        alt="Table Ronde"
                        className="rounded-lg shadow-lg max-w-f"
                    />
                </div>
                <p className="text-gray-500 italic text-center mb-6">De gauche à droite : Remy Etien, Antoine Truchetet, Charlotte Laclau, moi-même, Mohamed Layachi et Victor Safar.</p>


                <section className="p-6 bg-white border rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                        <span className="text-blue-500 mr-2">🗂️</span> Les Thèmes Abordés
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6 text-left">
                        La table ronde s’est ainsi articulée autour de trois grands thèmes pour structurer les échanges :
                    </p>
                    <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-4 text-left">
                        <li>
                            <strong>Introduction théorique au sujet :</strong> Une mise en perspective des bases et enjeux actuels.
                        </li>
                        <li>
                            <strong>Les divers métiers de la Data au sein des 4 entreprises présentes :</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Présentation des parcours et fonctions des intervenants.</li>
                                <li>Clarification des rôles : data scientist, data engineer, etc.</li>
                                <li>
                                    Compétences techniques et non techniques mobilisées dans ces métiers.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Impact de la Data sur les entreprises :</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Exemples concrets où les données transforment les processus internes.</li>
                                <li>Optimisation des opérations grâce à l’analyse des données.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Évolution future des métiers et la place de l’IA :</strong>
                            <ul className="list-disc pl-6 mt-2 space-y-2">
                                <li>Métiers et compétences en forte croissance dans le secteur.</li>
                                <li>Intégration des outils d’intelligence artificielle et leur impact.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Clôture :</strong> Une session de questions-réponses avec le public.
                        </li>
                    </ol>
                </section>


                <p className="text-lg text-gray-700 mb-3 text-justify">
                Cette table ronde fut un franc succès, avec une participation active du public et un échange très enrichissant pour toutes les parties présentes.
                </p>

                <p className="text-lg text-gray-700 mb-3 text-justify">
                    <strong>Je tiens à remercier chaleuresement</strong> Céline Hervieu, Marco Boubille, Sylvain Lamblot et toute l’équipe des relations entreprises de Télécom pour l’opportunité. <br />
                    <strong>Un grand merci aux intervenants</strong> pour leur gentillesse et leur professionalisme.
                </p>

                <p className="text-black font-bold text-2xl mt-10 text-justify flex items-center justify-center">
                    <span className="mr-2 text-2xl">⭐</span> Fin.
                </p>

            </div>
        </MathJaxContext>
    );
};

export default ProjetPANEL;