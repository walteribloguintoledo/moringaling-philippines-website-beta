
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Leaf, Users, Target, Heart, Sprout, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const mission = {
  title: "Our Mission",
  description: "To promote the cultivation, consumption, and health benefits of moringa (malunggay) throughout the Philippines, empowering local communities with sustainable agriculture practices and improved nutrition.",
  icon: Target,
};

const vision = {
  title: "Our Vision", 
  description: "A healthier Philippines where every Filipino family has access to the nutritional benefits of moringa, contributing to food security and community wellness nationwide.",
  icon: Globe,
};

const values = [
  {
    title: "Community Empowerment",
    description: "Supporting Filipino farmers and local communities through education and resources",
    icon: Users,
  },
  {
    title: "Sustainable Agriculture",
    description: "Promoting environmentally responsible farming practices that benefit both people and planet",
    icon: Sprout,
  },
  {
    title: "Health & Wellness",
    description: "Advancing public health through natural nutrition and traditional Filipino wisdom",
    icon: Heart,
  },
];

const benefits = [
  "7x more Vitamin C than oranges",
  "4x more calcium than milk", 
  "4x more Vitamin A than carrots",
  "3x more potassium than bananas",
  "2x more protein than yogurt",
  "Rich in iron, fighting anemia",
  "Contains all 9 essential amino acids",
  "High in antioxidants and anti-inflammatory compounds"
];

const impact = [
  {
    number: "10,000+",
    label: "Filipino families supported"
  },
  {
    number: "500+", 
    label: "Farmers trained in cultivation"
  },
  {
    number: "50+",
    label: "Communities reached across the Philippines"
  },
  {
    number: "1M+",
    label: "Moringa trees planted"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-green-800 mb-6">
              About Moringaling Philippines Foundation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated to promoting moringa cultivation and health benefits throughout the Philippines, 
              empowering communities with the miracle tree's extraordinary potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-green-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <mission.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-green-800">{mission.title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{mission.description}</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <vision.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-800">{vision.title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{vision.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work in promoting moringa cultivation across the Philippines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Moringa in the Philippines */}
      <section className="py-16 bg-white" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Moringa in Philippine Culture
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Moringa oleifera, known locally as malunggay, has been deeply rooted in Filipino culture 
                for centuries. Found in nearly every Filipino backyard, this remarkable tree has sustained 
                families through generations with its exceptional nutritional profile.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In traditional Filipino cuisine, malunggay leaves are featured in iconic dishes like 
                tinola and ginataang dishes, providing not just flavor but incredible health benefits. 
                The tree thrives in our tropical climate and volcanic soil, making it perfectly suited 
                for Philippine agriculture.
              </p>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Nutritional Powerhouse:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <Leaf className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://static.abacusaicdn.net/images/9e09f3bf-2ddc-4d4e-84eb-022b8a03af77.png"
                  alt="Traditional Filipino kitchen with moringa ingredients"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://static.abacusaicdn.net/images/d0bd68aa-7936-43e7-b4c4-f82135040796.png"
                  alt="Fresh moringa leaves in Philippine rural setting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Through community partnerships and dedicated outreach, we're making a real difference 
              in Filipino communities across the archipelago
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-green-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Leadership (Placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to advancing moringa cultivation and health awareness in the Philippines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. Maria Santos", role: "Executive Director", bio: "Agricultural scientist specializing in tropical crops and sustainable farming" },
              { name: "Jose Dela Cruz", role: "Program Manager", bio: "Community development expert with 15 years experience in rural Philippines" },
              { name: "Dr. Ana Reyes", role: "Nutrition Advisor", bio: "Licensed nutritionist advocating for natural health solutions in Filipino communities" },
            ].map((member, index) => (
              <Card key={index} className="bg-white shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
