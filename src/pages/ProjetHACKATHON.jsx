import React from 'react';
import { MathJaxContext } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';

const projectsData = [
    {
        id: 'ProjetHACKATHON',
        title: 'Hackathons : Des Expériences Intenses et Inoubliables',
        description: "Retour sur plusieurs compétitions techniques."
    }
];

const ProjetHACKATHON = () => {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === id);
    const config = {
        loader: { load: ['input/asciimath', 'output/chtml'] },
    };

    if (!project) {
        return <div> Project not found... Id = {id}</div>;
    }

    return (
        <MathJaxContext config={config}>
            <div className="py-4 px-1 max-w-4xl mx-auto bg-white">
                <div className="flex justify-start mb-8">
                    <Link to="/projets" className="inline-block bg-black text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition-colors">
                        ← Back to Projects
                    </Link>
                </div>

                <h1 className="text-4xl font-bold mt-6 mb-8 text-gray-900 text-center">{project.title}</h1>
                
                <section className="mb-8 text-left">
                    <p className="text-gray-700 leading-relaxed text-left justify-left">
                    Prenez quelques dizaines ou centaines d'étudiants, ajoutez-y quelques professionnels plus expérimentés, enfermez-les dans une salle pour un temps court 
                    - souvent entre 24H et 48H - donnez-leur un challenge technique ou un projet ambitieux à réaliser, et voici la recette d’un hackathon réussi.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4 text-left justify-left">
                    Ayant découvert ce type d’événements en école d’ingénieur, j’ai pris goût à ces compétitions intenses qui mélangent créativité, ingéniosité et endurance. 
                    Chaque hackathon est une expérience unique, et j’en retiens toujours une leçon particulière. Voici un résumé de quelques-uns auxquels j’ai participé.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                    </p>
                </section>

                <div className="max-w-md mx-auto p-4 bg-gray-100 border rounded-lg shadow-sm text-left my-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Résultats</h3>
                    <ul className="list-none space-y-2 text-gray-700">
                        <li>🏆 Victoire - OnePoint x TBF Hackathon </li>
                        <li>🏆 Finaliste (4e place sur 26) - Doctolib AI Hackathon</li>
                        <li>🥈 2e place - PowerDot Hackathon</li>
                        <li>➤ 11e place sur 40 - Hi! Paris Hackathon</li>
                        <li>➤ Participation - Direct Assurance Hackathon</li>
                    </ul>
                </div>


                <section className="p-6 bg-white border rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Onepoint & TBF : La Puissance de l'Analogie</h3>
                    <p className="text-gray-700 leading-relaxed text-left mb-3 justify-left">
                        Pour mon cinquième hackathon de l'année, j'ai fait équipe avec Killian Provin, Alexandre Mallez et Aymane HAMDAOUI. Ensemble, nous avons remporté la première place en imaginant "Sauron", un système de vote alliant l'anonymat total des preuves à connaissance nulle (ZKP) et la transparence absolue de la blockchain.
                    </p>
                    
                    <div className="flex justify-center my-6">
                        <img
                            src="/hackathons/onepoint_victoire.webp" // Pensez à ajouter une image pertinente ici
                            alt="Victoire Hackathon Onepoint"
                            className="rounded-lg shadow-lg w-3/5"
                        />
                    </div>

                    <p className="text-gray-700 leading-relaxed mt-3 text-left justify-left">
                        La plus grande difficulté n'était pas technique, mais pédagogique : comment expliquer un concept aussi abstrait qu'une ZKP à un jury en quelques minutes ? La solution nous est venue d'un jeu d'enfant : "Où est Charlie ?".
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-3 text-left justify-left font-semibold italic">
                        "Imaginez que je veuille vous prouver que je sais où est Charlie sans vous révéler sa position. Je prends une immense feuille qui recouvre l'image, et je ne fais qu'un petit trou juste au-dessus de Charlie. Vous pouvez regarder par le trou et vérifier qu'il est bien là, mais vous n'avez aucune idée de sa position sur la page. C'est ça, une ZKP."
                    </p>

                    <div className="flex justify-center my-6">
                        <img
                            src="/hackathons/charlie.webp"
                            alt="Victoire Hackathon Onepoint"
                            className="rounded-lg shadow-lg w-3/5"
                        />
                    </div>

                    <p className="text-gray-700 leading-relaxed mt-3 text-left justify-left">
                        Cette analogie simple a été la clé de notre victoire. La leçon que j'en retiens est que la capacité à vulgariser une idée complexe, à la rendre intuitive, est aussi cruciale que la maîtrise technique elle-même. C'est souvent ce qui fait la différence entre un bon projet et un projet gagnant.
                    </p>
                </section>

                <section className="p-6 bg-white border rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Doctolib AI Hackathon : L'Adrénaline de la Finale</h3>

                    <p className="text-gray-700 leading-relaxed text-left justify-left mb-4">
                    Ce hackathon s’inscrivait dans le cadre de l’AI Summit à Paris, un sommet international réunissant les plus grandes entreprises de la planète. 
                    Organisé par Mistral AI, Scaleway, BackMarket, Sia Partners et Doctolib, il a rassemblé des participants venus de nombreuses nations.
                    Le défi durait une trentaine d’heures et la compétition était rude : 26 équipes, des profils ultra-compétents, un jury impressionnant. 
                    Notre projet a su convaincre, et nous avons accédé à la finale.
                    </p>

                    <div className="flex justify-center mb-4">
                        <img
                            src="/hackathons/doctolib4.webp"
                            alt="Affiche"
                            className="rounded-lg shadow-lg w-3/5"
                        />
                    </div>

                    <p className="text-gray-700 leading-relaxed mt-3 text-left justify-left">
                    Se retrouver devant un jury aussi prestigieux, pitcher notre projet devant 150 personnes et obtenir la 4e place fut un moment marquant. 
                    Ce hackathon m’a fait prendre conscience de l’importance de la présentation et de la valorisation du travail accompli. 
                    Ce n’est pas juste la technique qui compte : savoir expliquer, vendre son idée et captiver l’audience peut faire toute la différence.
                    </p>

                    <div className="flex justify-center gap-4 my-8">
                        <img src="/hackathons/doctolib.webp" alt="Description 1" className="rounded-lg shadow-md w-1/2" />
                        <img src="/hackathons/doctolib3.webp" alt="Description 2" className="rounded-lg shadow-md w-1/2" />
                    </div>

                </section>

                <section className="p-6 bg-white border rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Direct Assurance : L'Apprentissage Express</h3>
                    <p className="text-gray-700 leading-relaxed text-left mb-3 justify-left">
                    Mon premier hackathon, c’est un ami qui m’a convaincu d’y participer. Organisé par Direct Assurance, il était bien plus court que la moyenne : 
                    seulement 5 heures. L’objectif était simple : 3 petits challenges à réaliser en un temps record.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-3 text-left justify-left">
                        On n’y allait pas pour gagner, mais pour voir si on pouvait apprendre aussi vite qu’on le pensait. Et la réponse fut oui. 
                        Ce que je retiens le plus de cette expérience, c’est l’importance de s’adapter rapidement, de plonger dans un sujet inconnu sans peur et de trouver des solutions dans un temps imparti.
                    </p>
                </section>

                <section className="p-6 bg-white border rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Hi! Paris : Le Travail en Équipe Poussé à l'Extrême</h3>
                    <p className="text-gray-700 leading-relaxed text-left mb-3 justify-left">
                    Hi! Paris est le pôle de recherche en intelligence artificielle de l’Institut Polytechnique de Paris (regroupant l’X, Telecom Paris, Ponts Paris, Ensta) et HEC. 
                    Ils organisaient un hackathon de 48 heures non-stop.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-3 text-left justify-left mb-4">
                    On n’a pas dormi, mais on a découvert ce que c’est que de travailler dans une équipe de taille plus importante. Se coordonner, éviter de refaire le travail de l’autre, 
                    faire un git propre, communiquer sans perdre de temps : autant de compétences essentielles que j’ai vraiment perçues ici.
                    J’ai compris que, dans une équipe technique, savoir coder ne suffit pas. Il faut aussi savoir organiser le travail et rendre son code compréhensible aux autres.
                    </p>

                    <div className="flex justify-center mb-2">
                        <img
                            src="/hackathons/hi-paris.png"
                            alt="Affiche"
                            className="rounded-lg w-2/5"
                        />
                    </div>

                </section>

                <section className="p-6 bg-white border rounded-lg shadow-sm mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">PowerDot : Savoir Improviser</h3>
                    <p className="text-gray-700 leading-relaxed text-left justify-left">
                    Ce hackathon, organisé par PowerDot à CentraleSupélec, était plus court et plus orienté business. PowerDot, pour ceux qui ne connaissent pas, 
                    est une entreprise qui déploie des bornes de recharge rapide pour véhicules électriques.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-3 text-left justify-left">
                    L’exercice était particulièrement axé sur le pitch final. C’est d’ailleurs la compétition où j’ai appris l’une des leçons les plus utiles : 
                    savoir improviser. Cinq minutes avant de passer devant le jury, on n’était absolument pas prêts. Il a fallu réagir vite, redistribuer les rôles et surtout rester convaincants.
                    Résultat : une deuxième place sur le podium. Ce hackathon m’a appris à être réactif sous pression et à toujours prévoir un plan B.
                    </p>
                </section>
            </div>
        </MathJaxContext>
    );
};

export default ProjetHACKATHON;
