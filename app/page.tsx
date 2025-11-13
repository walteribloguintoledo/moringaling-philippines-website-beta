
import { HeroSlider } from '@/components/hero-slider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Heart, 
  Users, 
  BookOpen, 
  MessageCircle, 
  HandHeart,
  ChefHat,
  Sprout 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const healthBenefits = [
  {
    icon: Heart,
    title: "Cardiovascular Health",
    description: "Rich in antioxidants that support heart health and reduce inflammation",
  },
  {
    icon: Sprout,
    title: "Nutrient Dense",
    description: "7x more Vitamin C than oranges, 4x more calcium than milk",
  },
  {
    icon: Leaf,
    title: "Natural Detox",
    description: "Helps cleanse the body and boost immune system naturally",
  },
];

const quickLinks = [
  {
    icon: BookOpen,
    title: "Learn About Moringa",
    description: "Discover the health benefits and cultivation of the miracle tree",
    href: "/about",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: ChefHat,
    title: "Filipino Recipes",
    description: "Authentic Filipino dishes featuring moringa ingredients",
    href: "/recipes",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: MessageCircle,
    title: "Community Forums",
    description: "Connect with other moringa enthusiasts and farmers",
    href: "/forums",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: HandHeart,
    title: "Make a Donation",
    description: "Support our mission to promote moringa in the Philippines",
    href: "/donate",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Users,
    title: "Join Membership",
    description: "Become part of our growing community",
    href: "/membership",
    color: "from-teal-500 to-cyan-600",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroSlider />
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Welcome to Moringaling Philippines Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are dedicated to promoting the cultivation and health benefits of moringa (malunggay) 
              throughout the Philippines. Our foundation works with local communities to harness the power 
              of this miracle tree for better health and sustainable agriculture.
            </p>
          </div>

          {/* Health Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {healthBenefits.map((benefit, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Explore Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of Filipinos in our mission to promote health and wellness through moringa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <Link key={index} href={link.href} className="group">
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg group-hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className={`bg-gradient-to-r ${link.color} rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                      <link.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{link.description}</p>
                    <Button variant="outline" className="w-full group-hover:bg-green-50 group-hover:border-green-300">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                The Philippine Miracle Tree
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Moringa oleifera, known locally as malunggay, has been a staple in Filipino cuisine and 
                traditional medicine for generations. This remarkable tree thrives in our tropical climate 
                and volcanic soil, providing exceptional nutritional value.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our foundation works directly with Filipino farmers and communities to promote sustainable 
                cultivation practices while preserving traditional knowledge passed down through generations.
              </p>
              <Link href="/about">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Learn About Our Mission
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://static.abacusaicdn.net/images/6abbfb4c-4050-410f-bec5-5d0de6b61d6a.png"
                  alt="Moringa tree in Philippine landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the Moringa Movement
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Be part of our growing community dedicated to promoting health, wellness, 
            and sustainable agriculture throughout the Philippines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                Become a Member
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" className="bg-green-500 text-white border-green-500 hover:bg-green-700 hover:border-green-700 transition-colors">
                Support Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
