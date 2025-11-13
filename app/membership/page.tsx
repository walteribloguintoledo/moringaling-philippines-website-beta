
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MembershipForm } from './_components/membership-form';
import { Users, Award, Leaf, BookOpen, Heart, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const membershipBenefits = [
  {
    icon: Users,
    title: "Community Access",
    description: "Connect with fellow moringa enthusiasts and Filipino farmers nationwide"
  },
  {
    icon: BookOpen,
    title: "Educational Resources", 
    description: "Access exclusive guides, research papers, and cultivation techniques"
  },
  {
    icon: Leaf,
    title: "Priority Support",
    description: "Get expert advice on moringa cultivation and health applications"
  },
  {
    icon: Award,
    title: "Certification Programs",
    description: "Participate in our moringa farming and nutrition certification courses"
  },
  {
    icon: Heart,
    title: "Health Workshops",
    description: "Join exclusive workshops on moringa's health benefits and applications"
  },
  {
    icon: Star,
    title: "Member Events",
    description: "Attend special events, farm visits, and community gatherings"
  }
];

const membershipTypes = [
  {
    type: "Individual",
    description: "Perfect for health enthusiasts, home gardeners, and moringa advocates",
    features: [
      "Access to all educational resources",
      "Community forum participation", 
      "Monthly newsletter",
      "Workshop invitations",
      "Basic cultivation support"
    ],
    ideal: "Health enthusiasts, home gardeners, students"
  },
  {
    type: "Organization",
    description: "Ideal for farms, health centers, schools, and community organizations",
    features: [
      "All individual member benefits",
      "Priority technical support",
      "Bulk seed/seedling discounts",
      "Custom training programs",
      "Partnership opportunities",
      "Research collaboration access"
    ],
    ideal: "Farms, health centers, schools, NGOs"
  }
];

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-purple-800 mb-6">
              Join Our Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Become a member of the Moringaling Philippines Foundation and join thousands 
              of Filipinos dedicated to promoting moringa cultivation and health benefits nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Membership Benefits</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our community and unlock exclusive resources, support, and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-6">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Choose Your Membership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the membership type that best fits your needs and interests
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {membershipTypes.map((membership, index) => (
              <Card key={index} className="shadow-lg border-0 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-800 text-center">
                    {membership.type} Membership
                  </CardTitle>
                  <p className="text-gray-600 text-center">{membership.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Benefits Include:</h4>
                    <ul className="space-y-2">
                      {membership.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Ideal for:</h4>
                    <p className="text-purple-700 text-sm">{membership.ideal}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Apply for Membership</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to begin your membership application
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold text-gray-800">
                Membership Application
              </CardTitle>
            </CardHeader>
            <CardContent>
              <MembershipForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Join Moringaling Philippines Foundation?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Be part of a movement that's transforming Filipino health and agriculture through 
            the power of moringa. Together, we're building a healthier, more sustainable Philippines.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-purple-200">Filipino families supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-purple-200">Farmers trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-purple-200">Communities reached</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
