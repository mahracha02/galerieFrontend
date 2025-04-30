import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import photo from '../assets/photos/logo.jpg';
import imageOeuvre from '../assets/photos/expoBruno.jpg';  

const DetailsArtiste = () => {
  const { id } = useParams();

  
  

  const [artiste] = useState({
    id: id,
    nom: "Artiste " + id,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: photo,
    date_naissance: "01/01/2000",
    pays: "France",
    oeuvres: [
      {
        id: 1,
        titre: "Oeuvre 1",
        description: "Description de l'oeuvre 1",
        image_principale: imageOeuvre,
        images_secondaires: "https://via.placeholder.com/150",
        technique: "Technique de l'oeuvre 1",
        dimensions: "Dimensions de l'oeuvre 1",
        annee: "2023",
        prix: "1000€",
        remarques: "Remarques sur l'oeuvre 1",
        stock : 7,
      },
      {
        id: 2,
        titre: "Oeuvre 2",
        description: "Description de l'oeuvre 2",
        image_principale: imageOeuvre,
        images_secondaires: "https://via.placeholder.com/150",
        technique: "Technique de l'oeuvre 2",
        dimensions: "Dimensions de l'oeuvre 2",
        annee: "2023",
        prix: "2000€",
        remarques: "Remarques sur l'oeuvre 2",
        stock : 10,
      },
      {
        id: 3,
        titre: "Oeuvre 3",
        description: "Description de l'oeuvre 3",
        image_principale: imageOeuvre,
        images_secondaires: "https://via.placeholder.com/150",
        technique: "Technique de l'oeuvre 3",  
        dimensions: "Dimensions de l'oeuvre 3",
        annee: "2023",
        prix: "3000€",
        remarques: "Remarques sur l'oeuvre 3",
        stock : 5,
      },
    ],
  });


  if (!artiste) {
    return <div className="text-center text-xl text-gray-500">Artiste non trouvé</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 bg-white rounded-lg shadow-xl mt-12 mb-12">
      <div className="flex flex-col items-center md:flex-row gap-6">
        {/* Photo de l'artiste */}
        <div className="w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0">
          <img
            src={artiste.photo || '/photos/default-artist.jpg'}
            alt={artiste.nom}
            className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-indigo-500"
          />
        </div>

        {/* Détails de l'artiste */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{artiste.nom}</h1>
          <p className="text-lg text-gray-600 mb-4 max-w-3xl">{artiste.bio}</p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <span className="text-sm font-semibold text-indigo-600">Né(e) : {artiste.date_naissance}</span>
            <span className="text-sm font-semibold text-indigo-600">Pays : {artiste.pays}</span>
          </div>
        </div>
      </div>

      {/* Galerie d'œuvres */}
      <div className="mt-10">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Œuvres de l&apos;artiste</h2>

        {/* Vérification si des œuvres sont disponibles */}
        {artiste.oeuvres.length === 0 ? (
          <div className="text-center text-lg text-gray-600 bg-gray-100 p-6 rounded-lg shadow-lg">
            <p>Aucune œuvre disponible pour cet artiste pour le moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {artiste.oeuvres.map((oeuvre, index) => (
              <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
                <img
                  src={oeuvre.image_principale || '/photos/default-artwork.jpg'}
                  alt={oeuvre.titre}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <h3 className="text-white text-lg font-semibold">{oeuvre.titre}</h3>
                </div>
                {/* Bouton "Se renseigner" */}
                <div className="absolute top-0 right-0 p-3">
                  <button 
                    onClick={() => window.location.href = `/oeuvres/${oeuvre.id}`} 
                    className="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all duration-300 ease-in-out">
                    Se renseigner
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default DetailsArtiste;
