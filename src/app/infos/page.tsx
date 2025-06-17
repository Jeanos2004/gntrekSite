'use client';

import { motion } from 'framer-motion';
import { Info, Shield, Users, MapPin, Phone, Mail, Clock, Star, Award, Heart, Mountain, Compass } from 'lucide-react';

export default function InfosPage() {
  const stats = [
    { icon: Mountain, value: '150+', label: 'Randonnées', color: 'text-blue-400' },
    { icon: Users, value: '2000+', label: 'Membres', color: 'text-purple-400' },
    { icon: Star, value: '4.9', label: 'Note moyenne', color: 'text-yellow-400' },
    { icon: Award, value: '5', label: 'Années d\'expérience', color: 'text-green-400' }
  ];

  const team = [
    {
      name: 'Marie Dubois',
      role: 'Fondatrice & Guide',
      image: '/images/team-1.jpg',
      description: 'Passionnée de montagne depuis 15 ans, Marie a créé GNTREK pour partager sa passion avec le plus grand nombre.',
      specialties: ['Alpinisme', 'Ski de randonnée', 'Secourisme']
    },
    {
      name: 'Thomas Martin',
      role: 'Guide Senior',
      image: '/images/team-2.jpg',
      description: 'Guide de haute montagne diplômé, Thomas accompagne les randonnées les plus techniques.',
      specialties: ['Escalade', 'Haute montagne', 'Formation']
    },
    {
      name: 'Sophie Laurent',
      role: 'Guide & Photographe',
      image: '/images/team-3.jpg',
      description: 'Photographe professionnelle et guide, Sophie capture les plus beaux moments de vos aventures.',
      specialties: ['Photographie', 'Randonnées familiales', 'Nature']
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'Votre sécurité est notre priorité absolue. Tous nos guides sont diplômés et expérimentés.',
      color: 'text-green-400'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous partageons notre passion pour la montagne avec authenticité et enthousiasme.',
      color: 'text-red-400'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Rejoignez une communauté de passionnés et créez des liens durables.',
      color: 'text-blue-400'
    },
    {
      icon: Compass,
      title: 'Aventure',
      description: 'Découvrez des sentiers uniques et vivez des expériences inoubliables.',
      color: 'text-purple-400'
    }
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
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 4,
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
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              À propos de <span className="text-gradient">GNTREK</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Découvrez notre histoire, notre équipe et nos valeurs qui font de GNTREK la référence en matière de randonnées guidées
            </motion.p>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass p-6 rounded-2xl text-center hover-lift"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="glass p-8 rounded-2xl shadow-2xl mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Notre Histoire</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Fondée en 2019 par Marie Dubois, GNTREK est née d'une passion profonde pour la montagne et d'un désir de partager cette passion avec le plus grand nombre.
                  </p>
                  <p>
                    Ce qui a commencé comme un petit groupe d'amis explorant les sentiers des Alpes s'est transformé en une communauté florissante de plus de 2000 membres passionnés.
                  </p>
                  <p>
                    Aujourd'hui, nous organisons plus de 150 randonnées par an, guidées par des professionnels expérimentés et diplômés, toujours dans le respect de la nature et de la sécurité.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/images/story-bg.jpg')] bg-cover bg-center opacity-40"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="glass p-6 rounded-2xl text-center hover-lift"
                >
                  <value.icon className={`w-12 h-12 mx-auto mb-4 ${value.color}`} />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">Notre Équipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                  className="glass p-6 rounded-2xl text-center hover-lift"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 overflow-hidden">
                    <div className="w-full h-full bg-[url('/images/avatar-bg.jpg')] bg-cover bg-center opacity-60"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="glass p-8 rounded-2xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Contactez-nous</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <h3 className="text-lg font-semibold text-white mb-2">Téléphone</h3>
                <p className="text-gray-300">+33 1 23 45 67 89</p>
                <p className="text-gray-400 text-sm">Lun-Ven 9h-18h</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">contact@gntrek.fr</p>
                <p className="text-gray-400 text-sm">Réponse sous 24h</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-green-400" />
                <h3 className="text-lg font-semibold text-white mb-2">Adresse</h3>
                <p className="text-gray-300">123 Rue de la Montagne</p>
                <p className="text-gray-400 text-sm">75001 Paris, France</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 