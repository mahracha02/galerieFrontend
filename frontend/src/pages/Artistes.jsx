import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import photoArtiste from '../assets/photos/logo.jpg';

const Artistes = () => {
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('Tous');

  const [artists] = useState([
    {
      id: 1,
      nom: "Artiste 1",
      pays: "France",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      photo: photoArtiste,
      date_naissance: "1980",
      oeuvres: [
        {
          id: 1,  
          titre: "Oeuvre 1",
          description: "Description de l'oeuvre 1",
          image_principale: "https://via.placeholder.com/150",
          images_secondaires: "https://via.placeholder.com/150",
          technique: "Technique de l'oeuvre 1",
          dimensions: "Dimensions de l'oeuvre 1",
          annee: "2023",
          prix: "1000€",
          remarque: "Remarque sur l'oeuvre 1",
          stock: 7,
        },
        {
          id: 2,
          titre: "Oeuvre 2",
          description: "Description de l'oeuvre 2",
          image_principale: "https://via.placeholder.com/150",
          images_secondaires: "https://via.placeholder.com/150",
          technique: "Technique de l'oeuvre 2",
          dimensions: "Dimensions de l'oeuvre 2",
          annee: "2023",
          prix: "2000€",
          remarque: "Remarque sur l'oeuvre 2",
          stock: 10,
        }
      ]
    },
    {
      id: 2,
      nom: "Artiste 2",
      pays: "Italie",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      photo: photoArtiste,
      date_naissance: "1975",
      oeuvres: [
        {
          id: 1,  
          titre: "Oeuvre 1",
          description: "Description de l'oeuvre 1",
          image_principale: "https://via.placeholder.com/150",
          images_secondaires: "https://via.placeholder.com/150",
          technique: "Technique de l'oeuvre 1",
          dimensions: "Dimensions de l'oeuvre 1",
          annee: "2023",
          prix: "1000€",
          remarque: "Remarque sur l'oeuvre 1",
          stock: 7,
        },
        {
          id: 2,
          titre: "Oeuvre 2",          
          description: "Description de l'oeuvre 2",          
          image_principale: "https://via.placeholder.com/150",
          images_secondaires: "https://via.placeholder.com/150",
          technique: "Technique de l'oeuvre 2",
          dimensions: "Dimensions de l'oeuvre 2",
          annee: "2023",
          prix: "2000€",
          remarque: "Remarque sur l'oeuvre 2",
          stock: 10,
        }
      ]
    },
    {
      id: 3,
      nom: "Artiste 3",
      pays: "Espagne",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      photo: photoArtiste,
      date_naissance: "1990",
      oeuvres: [
        {
          id: 1,  
          titre: "Oeuvre 1",
          description: "Description de l'oeuvre 1",
          image_principale: "https://via.placeholder.com/150",
          images_secondaires: "https://via.placeholder.com/150",
          technique: "Technique de l'oeuvre 1",
          dimensions: "Dimensions de l'oeuvre 1",
          annee: "2023",
          prix: "1000€",
          remarque: "Remarque sur l'oeuvre 1",
          stock: 7,
        },
        {
          id: 2,
          titre: "Oeuvre 2",          
          description: "Description de l'oeuvre 2",          
          image_principale: "https://via.placeholder.com/150",
          images_secondaires: "https://via.placeholder.com/150",
          technique: "Technique de l'oeuvre 2",
          dimensions: "Dimensions de l'oeuvre 2",
          annee: "2023",
          prix: "2000€",
          remarque: "Remarque sur l'oeuvre 2",
          stock: 10,
        }
      ]
    }
  ]); 

  useEffect(() => {
    // Filter artists based on search and country
    const filterArtists = () => {
      let result = artists;

      // Filter by search text (name or country)
      if (search) {
        result = result.filter(artist =>
          artist.nom.toLowerCase().includes(search.toLowerCase()) ||
          artist.pays.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Filter by country
      if (selectedCountry !== 'Tous') {
        result = result.filter(artist => artist.pays === selectedCountry);
      }

      setFilteredArtists(result);
    };

    filterArtists();
  }, [search, selectedCountry, artists]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Nos Artistes</h1>

        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-gray-600">
            La Galerie Pol Lemetais représente des artistes contemporains exceptionnels, 
            chacun apportant une vision unique et une approche distinctive à leur pratique artistique. 
            Découvrez notre sélection d&apos;artistes travaillant dans diverses disciplines.
          </p>
        </div>

        {/* Filtres en ligne */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          {/* Barre de recherche */}
          <input
            type="text"
            placeholder="Rechercher par nom ou pays..."
            className="px-4 py-2 border rounded-lg w-full md:max-w-xs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Filtre par pays */}
          <select
            className="px-4 py-2 border rounded-lg w-full md:max-w-xs"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option value="Tous">Tous les pays</option>
            {[...new Set(artists.map((artist) => artist.pays))]
              .filter(Boolean)
              .map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
          </select>
        </div>

        <div className="space-y-16">
          {/* All Artists Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Artistes
            </h2>

            {filteredArtists.length === 0 ? (
              <div className="text-center py-12 text-gray-600">
                Aucun artiste trouvé.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArtists.map((artist) => (
                  <div key={artist.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="h-64 bg-gray-300">
                      <img 
                        src={artist.photo} 
                        alt={artist.nom} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-800">{artist.nom}</h3>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {artist.pays}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-4">
                        {artist.bio}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">Date de naissance: <b>{artist.date_naissance}</b></p>
                        <motion.a
                          href={`/artistes/${artist.id}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="text-red-600 hover:text-red-700 font-medium"
                        >
                          Voir le profil →
                        </motion.a>   
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Artistes;
