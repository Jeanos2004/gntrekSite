'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Settings, 
  BarChart3, 
  UserPlus, 
  FileText, 
  Shield, 
  Bell,
  Edit,
  Trash2,
  Eye,
  Download,
  Filter,
  Search
} from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedUser, setSelectedUser] = useState(null);

  const stats = [
    { icon: Users, value: '2,847', label: 'Membres actifs', change: '+12%', color: 'text-blue-400' },
    { icon: Calendar, value: '156', label: 'Randonnées ce mois', change: '+8%', color: 'text-green-400' },
    { icon: TrendingUp, value: '€45,230', label: 'Revenus', change: '+23%', color: 'text-purple-400' },
    { icon: MapPin, value: '89%', label: 'Satisfaction', change: '+5%', color: 'text-yellow-400' }
  ];

  const recentUsers = [
    { id: 1, name: 'Marie Dubois', email: 'marie@example.com', status: 'active', joinDate: '2024-02-15', avatar: 'MD' },
    { id: 2, name: 'Thomas Martin', email: 'thomas@example.com', status: 'pending', joinDate: '2024-02-14', avatar: 'TM' },
    { id: 3, name: 'Sophie Laurent', email: 'sophie@example.com', status: 'active', joinDate: '2024-02-13', avatar: 'SL' },
    { id: 4, name: 'Jean Dupont', email: 'jean@example.com', status: 'inactive', joinDate: '2024-02-12', avatar: 'JD' }
  ];

  const upcomingHikes = [
    { id: 1, name: 'Sentier des Crêtes', date: '2024-02-20', participants: 12, maxParticipants: 15, status: 'confirmed' },
    { id: 2, name: 'Chemin des Alpages', date: '2024-02-25', participants: 8, maxParticipants: 12, status: 'pending' },
    { id: 3, name: 'Boucle des Lacs', date: '2024-03-01', participants: 6, maxParticipants: 10, status: 'confirmed' }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Tableau de bord', icon: BarChart3 },
    { id: 'users', label: 'Utilisateurs', icon: Users },
    { id: 'hikes', label: 'Randonnées', icon: MapPin },
    { id: 'reports', label: 'Rapports', icon: FileText },
    { id: 'settings', label: 'Paramètres', icon: Settings }
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
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            animate={{
              x: [0, 25, 0],
              y: [0, -25, 0],
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl font-bold text-white"
              >
                Administration <span className="text-gradient">GNTREK</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-300"
              >
                Gérez votre plateforme de randonnées
              </motion.p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                A
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass p-6 rounded-2xl hover-lift"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="glass p-2 rounded-2xl mb-8"
          >
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Recent Users */}
            <div className="lg:col-span-2">
              <div className="glass p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Utilisateurs Récents</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                    <UserPlus className="w-4 h-4" />
                    Ajouter
                  </button>
                </div>

                <div className="space-y-4">
                  {recentUsers.map((user, index) => (
                    <motion.div
                      key={user.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {user.avatar}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{user.name}</h3>
                          <p className="text-gray-300 text-sm">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          user.status === 'active' ? 'bg-green-500/20 text-green-400' :
                          user.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {user.status}
                        </span>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Hikes */}
            <div>
              <div className="glass p-6 rounded-2xl">
                <h2 className="text-xl font-bold text-white mb-6">Randonnées à venir</h2>
                <div className="space-y-4">
                  {upcomingHikes.map((hike, index) => (
                    <motion.div
                      key={hike.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                      className="p-4 bg-white/5 rounded-xl"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold">{hike.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          hike.status === 'confirmed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {hike.status}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{new Date(hike.date).toLocaleDateString('fr-FR')}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">
                          {hike.participants}/{hike.maxParticipants} participants
                        </span>
                        <div className="flex gap-1">
                          <button className="p-1 text-gray-400 hover:text-white transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-gray-400 hover:text-white transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass p-6 rounded-2xl mt-6">
                <h2 className="text-xl font-bold text-white mb-6">Actions Rapides</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors">
                    <Calendar className="w-5 h-5" />
                    Créer une randonnée
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors">
                    <FileText className="w-5 h-5" />
                    Générer un rapport
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors">
                    <Download className="w-5 h-5" />
                    Exporter les données
                  </button>
                  <button className="w-full flex items-center gap-3 p-3 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors">
                    <Shield className="w-5 h-5" />
                    Gérer les permissions
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 