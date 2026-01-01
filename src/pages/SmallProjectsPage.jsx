import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const smallProjects = [
    {
        id: 'tp-ml-1',
        title: 'TP Machine Learning - Régression Logistique',
        description: 'Implémentation de la régression logistique de A à Z sur un jeu de données simple.',
        image: '/placeholder-image.webp',
        link: '/reports/tp-ml-1.html',
        tags: ['Machine Learning', 'Python', 'Numpy']
    },
    {
        id: 'tp-signal-1',
        title: 'TP Traitement du Signal - Filtrage',
        description: 'Conception et application de filtres numériques (passe-bas, passe-haut) sur des signaux audio.',
        image: '/placeholder-image.webp',
        link: '/reports/tp-signal-1.pdf',
        tags: ['Traitement du Signal', 'Python', 'SciPy']
    },
    {
        id: 'mini-projet-web',
        title: 'Mini-Projet Web - To-Do List',
        description: 'Création d\'une application web simple de type "To-Do List" avec React.',
        image: '/placeholder-image.webp', // Remplacez par le chemin de votre image
        link: 'https://github.com/votre-pseudo/todo-list-repo',
        tags: ['React', 'JavaScript', 'HTML/CSS']
    },
    // ... Ajoutez autant de projets que vous le souhaitez ici
];

const SmallProjectsPage = () => {
    return (
        <div className="py-8 px-4 max-w-4xl mx-auto bg-white">
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">Travaux Académiques</h1>
            <p className="text-center text-gray-600 mb-12">
                Collection de travaux pratiques, exercices et projets de plus petite envergure réalisés durant mon cursus.
            </p>

            <div className="space-y-6">
                {smallProjects.map(project => (
                    <a 
                        key={project.id} 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300 group overflow-hidden"
                    >
                        <div className="flex items-center gap-5">
                            {/* Image du projet */}
                            <div className="w-48 h-32 flex-shrink-0">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Contenu texte */}
                            <div className="py-4 pr-5 flex-grow">
                                <div className="flex justify-between items-start">
                                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">{project.title}</h2>
                                    <ExternalLink className="text-gray-400 group-hover:text-blue-600 transition-colors mt-1 flex-shrink-0 ml-4" size={20} />
                                </div>
                                <p className="mt-1 text-gray-700 text-sm">{project.description}</p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium bg-gray-200 text-gray-800 px-2 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link to="/projets" className="inline-block bg-black text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-gray-800 transition-colors">
                    ← Retour aux projets principaux
                </Link>
            </div>
        </div>
    );
};

export default SmallProjectsPage;