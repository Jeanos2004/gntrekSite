'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Filter, Search, Star, Clock, Users, Mountain, Calendar } from 'lucide-react';

export default function CartePage() {
  const [selectedTrail, setSelectedTrail] = useState(null);
  const [filters, setFilters] = useState({
    difficulty: 'all',
    duration: 'all',
    distance: 'all'
  });

  const trails = [
    {
      id: 1,
      name: 'Sentier des Crêtes',
      difficulty: 'Facile',
      duration: '2h30',
      distance: '8.5 km',
      elevation: '450m',
      rating: 4.8,
      participants: 12,
      location: 'Mont Blanc',
      coordinates: { lat: 45.8326, lng: 6.8652 },
      description: 'Magnifique randonnée avec vue panoramique sur les Alpes',
      image: '/images/trail-1.jpg',
      nextDate: '2024-02-15'
    },
    {
      id: 2,
      name: 'Chemin des Alpages',
      difficulty: 'Moyen',
      duration: '4h15',
      distance: '12.3 km',
      elevation: '780m',
      rating: 4.6,
      participants: 8,
      location: 'Vercors',
      coordinates: { lat: 44.9667, lng: 5.5333 },
      description: 'Traversée des alpages avec vue sur les falaises',
      image: '/images/trail-2.jpg',
      nextDate: '2024-02-18'
    },
    {
      id: 3,
      name: 'Boucle des Lacs',
      difficulty: 'Difficile',
      duration: '6h00',
      distance: '18.7 km',
      elevation: '1200m',
      rating: 4.9,
      participants: 6,
      location: 'Écrins',
      coordinates: { lat: 44.9167, lng: 6.3333 },
      description: 'Randonnée alpine avec passage par plusieurs lacs',
      image: '/images/trail-3.jpg',
      nextDate: '2024-02-22'
    }
  ];

  const difficulties = [
    { value: 'all', label: 'Toutes', color: 'gray' },
    { value: 'easy', label: 'Facile', color: 'green' },
    { value: 'medium', label: 'Moyen', color: 'yellow' },
    { value: 'hard', label: 'Difficile', color: 'red' }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background avec effet parallaxe */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/mountain-bg.jpg')",
            transform: "scale(1.1)",
            filter: "blur(0px)",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/15 rounded-full"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: Math.random() * 6 + 6,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 container mx-auto px-4 py-8 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Carte <span className="text-gradient">Interactive</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              Découvrez nos randonnées et planifiez votre prochaine aventure
            </motion.p>
          </div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass p-6 rounded-2xl shadow-2xl mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher une randonnée..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-4">
                <select
                  value={filters.difficulty}
                  onChange={(e) => setFilters({ ...filters, difficulty: e.target.value })}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  {difficulties.map((diff) => (
                    <option key={diff.value} value={diff.value} className="bg-slate-800">
                      {diff.label}
                    </option>
                  ))}
                </select>

                <button className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filtres
                </button>
              </div>
            </div>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="glass p-6 rounded-2xl shadow-2xl mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Carte des Randonnées</h2>
              <div className="flex items-center gap-2 text-gray-300">
                <Navigation className="w-5 h-5" />
                <span>Navigation GPS disponible</span>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-96 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl border border-white/10 overflow-hidden">
              <div className="absolute inset-0 bg-[url('/images/map-bg.jpg')] bg-cover bg-center opacity-30"></div>
              
              {/* Trail Markers */}
              {trails.map((trail, index) => (
                <motion.div
                  key={trail.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                  className="absolute cursor-pointer group"
                  style={{
                    left: `${20 + (index * 25)}%`,
                    top: `${30 + (index * 15)}%`,
                  }}
                  onClick={() => setSelectedTrail(trail)}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {trail.name}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Map Controls */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all flex items-center justify-center">
                  <Navigation className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Trail List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {trails.map((trail, index) => (
              <motion.div
                key={trail.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="glass p-6 rounded-2xl shadow-2xl hover-lift cursor-pointer"
                onClick={() => setSelectedTrail(trail)}
              >
                {/* Trail Image */}
                <div className="relative h-48 mb-4 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <div className="absolute inset-0 bg-[url('/images/trail-bg.jpg')] bg-cover bg-center opacity-60"></div>
                  <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {trail.difficulty}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{trail.rating}</span>
                  </div>
                </div>

                {/* Trail Info */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white">{trail.name}</h3>
                  <p className="text-gray-300 text-sm">{trail.description}</p>
                  
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{trail.location}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="flex items-center gap-1 text-gray-300">
                      <Clock className="w-4 h-4" />
                      <span>{trail.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-300">
                      <Mountain className="w-4 h-4" />
                      <span>{trail.distance}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-300">
                      <Users className="w-4 h-4" />
                      <span>{trail.participants}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>Prochaine: {new Date(trail.nextDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                      Réserver
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Trail Detail Modal */}
      {selectedTrail && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTrail(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass p-8 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">{selectedTrail.name}</h2>
              <p className="text-gray-300">{selectedTrail.description}</p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-white">{selectedTrail.duration}</div>
                  <div className="text-gray-400 text-sm">Durée</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-white">{selectedTrail.distance}</div>
                  <div className="text-gray-400 text-sm">Distance</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                Réserver cette randonnée
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
} 