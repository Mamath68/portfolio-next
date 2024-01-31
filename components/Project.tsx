import React from 'react';
import ProjectCard from './Helper/ProjectCard';

const Project = () => {
    return (
        <div id="project" className="pt-[7rem] pb-[5rem] bg-gray-900">
            <div className="text-center">
                <p className="heading__mini">Mes projets récents</p>
                <h1 className="heading__primary">
                    Mes meilleurs <span className="text-yellow-300">Projets</span>
                </h1>
            </div>
            <ProjectCard
                title="The Simpsons V1"
                description="Un site static en HTML-CSS sur les Simpsons"
                code="https://github.com/Mamath68/Simpsons-V1"
                demo="https://simpsons-v1.netlify.app/"
                tech1="HTML"
                tech2="CSS"
                image="/images/simpson.png"
            />
            <ProjectCard
                title="The Simpsons V2"
                description="Une seconde version du site sur les Simpsons"
                code="https://github.com/Mamath68/Simpsons-V2"
                demo="https://simpson-v2.netlify.app/"
                tech1="HTML"
                tech2="CSS"
                image="/images/simpson.png"
            />
            <ProjectCard
                title="Landing Page"
                description="Un One-Page en html-css et javascript"
                code="https://github.com/Mamath68/Landing-Page"
                demo="https://landing-page-ms.netlify.app/"
                tech1="HTML"
                tech2="CSS"
                tech3="JavaScript"
                image="/images/landingPage.jpg"
            />
            <ProjectCard
                title="Yu-Gi-Oh! App"
                description="Il s'agit de mon projet de fin de formation. c'est un site sur l'univers de yugioh, utilisant l'api YGOProdeck afin de récupérer les données des cartes du jeu, et d'avoir le détail total des cartes. ce projet est également un forum. Il a été codé avec un framework maison distribué par le centre de formation. "
                code="https://github.com/Mamath68/ProjetElan2023"
                tech1="HTML"
                tech2="CSS"
                tech3="PHP"
                tech4="API Yu-gi-oh"
                tech5="Bootstrap"
                tech6="BDD mysql"
                image="/images/yugioh.jpeg"
            />
            <ProjectCard
                title="Cinema POO"
                description="Une Application fait avec PHP présentant une liste de film, leurs acteurs et realisateurs, ainsi que les rôles joué par chaque acteurs. mais pas que, vous trouverez également chaque films(ou presque) joué par chaques acteurs, leurs informations personnelles. Il en sera de même pour chaque réalisateurs, vous trouverez les films qu'ils ont réalisé. Il sera également possible d'ajouter un nouveau film, de lui attitrer un acteurs et un realisateur. 
                De même que pour le projet Yu-Gi-Oh!, il est codé en framework maison."
                code="https://github.com/Mamath68/Cinema_POO/tree/version-Framework"
                tech1="HTML"
                tech2="CSS"
                tech3="Bootstrap"
                tech4="PHP"
                tech5="BDD Mysql"
                image="/images/cinema.jpg"
            />
            <ProjectCard
                title="DOM JS App"
                description="Une Application en HTML-CSS et Javascript pour travailler le DOM en Javascript. il s'agit d'un jeu de cub, couplé a un chronomètre, si vous cliquez sur le cub 1, le chronometre demarre, mais uniquement sur le cub 1, et si vous arrivez jusqu'a la fin, c'est à dire 10, le chronometre s'arrete. un jeu simple et interressant."
                code="https://github.com/Mamath68/D.O.M_JS"
                demo="https://d-o-m-js.netlify.app/"
                tech1="HTML"
                tech2="CSS"
                tech3="JavaScript"
                tech4="Bootstrap"
                image="/images/domjs.jpg"
            />
            <ProjectCard
                title="Première Appli PHP"
                description="C'est une base de E-commerce fait en php."
                code="https://github.com/Mamath68/Appli_PHP"
                tech1="HTML"
                tech2="CSS"
                tech3="PHP"
                tech4="Bootstrap"
                image="/images/appliphp.jpeg"
            />
        </div>
    )
}

export default Project