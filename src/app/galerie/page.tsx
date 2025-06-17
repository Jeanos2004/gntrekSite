'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, Calendar, Users, Heart, Share2, Download, X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  location: string;
  date: string;
  likes: number;
  photographer: string;
  description: string;
}

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Toutes', count: 24 },
    { id: 'landscapes', label: 'Paysages', count: 8 },
    { id: 'people', label: 'Personnes', count: 6 },
    { id: 'wildlife', label: 'Faune', count: 4 },
    { id: 'sunset', label: 'Couchers de soleil', count: 6 }
  ];

  const images: GalleryImage[] = [
    {
      id: 1,
      src: '/images/gallery-1.jpg',
      alt: 'Vue panoramique des Alpes',
      category: 'landscapes',
      location: 'Mont Blanc',
      date: '2024-01-15',
      likes: 156,
      photographer: 'Marie Dubois',
      description: 'Magnifique vue depuis le sommet du Mont Blanc au lever du soleil'
    },
    {
      id: 2,
      src: '/images/gallery-2.jpg',
      alt: 'Groupe de randonneurs',
      category: 'people',
      location: 'Vercors',
      date: '2024-01-20',
      likes: 89,
      photographer: 'Thomas Martin',
      description: 'Notre groupe lors d\'une randonnée dans le Vercors'
    },
    {
      id: 3,
      src: '/images/gallery-3.jpg',
      alt: 'Chamois dans les alpages',
      category: 'wildlife',
      location: 'Écrins',
      date: '2024-01-25',
      likes: 234,
      photographer: 'Sophie Laurent',
      description: 'Rencontre inattendue avec un chamois dans les alpages'
    },
    {
      id: 4,
      src: '/images/gallery-4.jpg',
      alt: 'Coucher de soleil sur les montagnes',
      category: 'sunset',
      location: 'Alpes-Maritimes',
      date: '2024-01-30',
      likes: 198,
      photographer: 'Marie Dubois',
      description: 'Spectacle magique du coucher de soleil sur les sommets'
    },
    {
      id: 5,
      src: '/images/gallery-5.jpg',
      alt: 'Lac de montagne',
      category: 'landscapes',
      location: 'Lac d\'Annecy',
      date: '2024-02-05',
      likes: 167,
      photographer: 'Thomas Martin',
      description: 'Le lac d\'Annecy sous un ciel d\'azur'
    },
    {
      id: 6,
      src: '/images/gallery-6.jpg',
      alt: 'Randonneur au sommet',
      category: 'people',
      location: 'Chamonix',
      date: '2024-02-10',
      likes: 145,
      photographer: 'Sophie Laurent',
      description: 'Un randonneur savoure sa victoire au sommet'
    },
    {
      id: 7,
      src: '/images/gallery-7.jpg',
      alt: 'Aigle royal en vol',
      category: 'wildlife',
      location: 'Mercantour',
      date: '2024-02-12',
      likes: 312,
      photographer: 'Marie Dubois',
      description: 'Majestueux aigle royal survolant les cimes'
    },
    {
      id: 8,
      src: '/images/gallery-8.jpg',
      alt: 'Aurore boréale',
      category: 'sunset',
      location: 'Norvège',
      date: '2024-02-15',
      likes: 456,
      photographer: 'Thomas Martin',
      description: 'Aurore boréale lors de notre expédition nordique'
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/15 rounded-full"
            animate={{
              x: [0, 35, 0],
              y: [0, -35, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: Math.random() * 7 + 7,
              repeat: Infinity,
              delay: Math.random() * 3,
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
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Galerie <span className="text-gradient">Photos</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300"
            >
              Découvrez les plus beaux moments de nos aventures en montagne
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass p-6 rounded-2xl shadow-2xl mb-8"
          >
            <div className="flex flex-wrap gap-4 justify-center">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {filter.label} ({filter.count})
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="group relative glass rounded-2xl overflow-hidden hover-lift cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-purple-600/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/gallery-bg.jpg')] bg-cover bg-center opacity-60 group-hover:scale-110 transition-transform duration-500"></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold mb-1">{image.alt}</h3>
                      <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{image.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-gray-300 text-sm">
                          <Heart className="w-4 h-4" />
                          <span>{image.likes}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-black/60 text-white text-xs rounded-full">
                      {filters.find(f => f.id === image.category)?.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Charger plus de photos
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="relative aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                <div className="absolute inset-0 bg-[url('/images/gallery-bg.jpg')] bg-cover bg-center"></div>
              </div>

              {/* Image Info */}
              <div className="glass p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.alt}</h2>
                    <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedImage.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Camera className="w-4 h-4" />
                    <span>{selectedImage.photographer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Heart className="w-4 h-4" />
                    <span>{selectedImage.likes} j'aime</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 