'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Mountain, Compass, Map, Users, Calendar, ArrowRight, Star, Wind, Clock, Ruler, TrendingUp, ChevronRight, MapPin, Trophy, Heart } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Stars, Float, Text3D, Center } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";

// Composant 3D pour l'arrière-plan
function MountainScene() {
  return (
    <Canvas className="absolute inset-0">
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5, 20]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#4a90e2" />
      
      <Stars 
        radius={100} 
        depth={50} 
        count={3000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.5}
      />
      
      <Float 
        speed={1} 
        rotationIntensity={0.1} 
        floatIntensity={0.2}
      >
        <Center>
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
            <meshPhysicalMaterial
              color="#ffffff"
              metalness={0.8}
              roughness={0.2}
              clearcoat={1}
              clearcoatRoughness={0.2}
              envMapIntensity={1}
            />
          </mesh>
        </Center>
      </Float>

      <Float 
        speed={1.5} 
        rotationIntensity={0.2} 
        floatIntensity={0.3}
        position={[3, 0, 0]}
      >
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshPhysicalMaterial
            color="#4a90e2"
            metalness={0.6}
            roughness={0.3}
            clearcoat={1}
            clearcoatRoughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
      </Float>

      <Float 
        speed={2} 
        rotationIntensity={0.3} 
        floatIntensity={0.4}
        position={[-3, 0, 0]}
      >
        <mesh>
          <octahedronGeometry args={[0.5]} />
          <meshPhysicalMaterial
            color="#e24a90"
            metalness={0.7}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.2}
            envMapIntensity={1}
          />
        </mesh>
      </Float>
    </Canvas>
  );
}

// Composant pour l'effet de parallaxe
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      className="absolute inset-0"
      style={{ y, scale, opacity }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
    </motion.div>
  );
}

// Composant pour les cartes animées
function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
      className="card-hover glass rounded-2xl p-8 transform transition-all duration-500 hover:scale-105"
    >
      {children}
    </motion.div>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Animation GSAP pour le titre
  const titleRef = useRef(null);
  useEffect(() => {
    gsap.from(titleRef.current, {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: "power4.out",
      delay: 0.5
    });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Barre de progression */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section avec Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')",
              transform: "scale(1.1)",
              filter: "blur(0px)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Découvrez le Mont Gangan
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                Une aventure inoubliable au cœur de la nature guinéenne
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                variant="primary" 
                size="lg"
                className="hover-lift group"
                asChild
              >
                <Link href="/inscription" className="flex items-center justify-center gap-2">
                  S'inscrire maintenant
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass hover-lift"
                asChild
              >
                <Link href="/infos" className="flex items-center justify-center gap-2">
                  En savoir plus
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/50 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Section Statistiques */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "500+", label: "Randonneurs" },
              { icon: Mountain, value: "12", label: "Randonnées" },
              { icon: Trophy, value: "98%", label: "Satisfaction" },
              { icon: Heart, value: "100%", label: "Sécurité" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-blue-500" />
                </div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Prochaine Randonnée */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass hover-lift">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold text-white">Prochaine Randonnée</CardTitle>
                    <CardDescription className="text-gray-200 mt-2">
                      Rejoignez-nous pour une aventure inoubliable
                    </CardDescription>
                  </div>
                  <Calendar className="w-10 h-10 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Date</p>
                        <p className="text-xl text-white">15 Avril 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Heure de départ</p>
                        <p className="text-xl text-white">6h00</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-pink-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Point de rendez-vous</p>
                        <p className="text-xl text-white">Parking du Mont Gangan</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Durée estimée</p>
                        <p className="text-xl text-white">6-7 heures</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Ruler className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Distance</p>
                        <p className="text-xl text-white">12 km</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-pink-500" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Difficulté</p>
                        <p className="text-xl text-white">Moyenne</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="hover-lift group"
                    asChild
                  >
                    <Link href="/inscription" className="flex items-center justify-center gap-2">
                      S'inscrire maintenant
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Ce qu'en disent nos randonneurs
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Découvrez les expériences de nos participants
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amadou Diallo",
                role: "Randonneur",
                image: "/images/testimonial-1.jpg",
                content: "Une expérience inoubliable ! Les guides sont professionnels et le parcours est magnifique.",
                rating: 5
              },
              {
                name: "Fatoumata Camara",
                role: "Photographe",
                image: "/images/testimonial-2.jpg",
                content: "Les vues sont à couper le souffle. Je recommande vivement cette randonnée.",
                rating: 5
              },
              {
                name: "Mamadou Bah",
                role: "Aventurier",
                image: "/images/testimonial-3.jpg",
                content: "Une organisation parfaite et des moments de partage inoubliables.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-200">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Prêt pour l'aventure ?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Rejoignez-nous pour une expérience inoubliable au Mont Gangan
            </p>
            <Button 
              variant="primary" 
              size="lg"
              className="hover-lift group"
              asChild
            >
              <Link href="/inscription" className="flex items-center justify-center gap-2">
                S'inscrire maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Sentiers exceptionnels",
    description: "Des parcours soigneusement sélectionnés pour tous les niveaux, offrant des vues panoramiques spectaculaires."
  },
  {
    title: "Guides experts",
    description: "Notre équipe de guides passionnés vous accompagne en toute sécurité tout au long de votre randonnée."
  },
  {
    title: "Navigation GPS",
    description: "Accédez à nos cartes interactives et suivez votre progression en temps réel grâce à notre application mobile."
  }
];

