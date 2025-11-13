
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DonationForm } from './_components/donation-form';
import { Heart, Shield, Users, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const impactAreas = [
  {
    icon: Users,
    title: "Community Education",
    description: "Training programs for Filipino farmers on sustainable moringa cultivation",
    amount: "₱5,000"
  },
  {
    icon: Leaf,
    title: "Seeds & Seedlings",
    description: "Providing moringa seeds and young plants to rural communities",
    amount: "₱2,500"
  },
  {
    icon: Heart,
    title: "Health Awareness",
    description: "Educational campaigns about moringa's nutritional benefits",
    amount: "₱3,500"
  },
  {
    icon: Shield,
    title: "Research & Development",
    description: "Supporting studies on moringa's health applications in the Philippines",
    amount: "₱7,500"
  }
];

const donationLevels = [
  {
    amount: "₱500",
    title: "Seedling Supporter",
    description: "Provides 20 moringa seedlings to a rural family"
  },
  {
    amount: "₱1,500",
    title: "Health Advocate",
    description: "Funds nutritional education for 10 families"
  },
  {
    amount: "₱3,000",
    title: "Community Builder",
    description: "Supports a complete farming training workshop"
  },
  {
    amount: "₱5,000",
    title: "Mission Champion",
    description: "Sponsors a community health awareness program"
  }
];

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-green-800 mb-6">
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Help us promote moringa cultivation and health benefits throughout the Philippines. 
              Your donation directly impacts Filipino communities and supports sustainable agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how your donation makes a direct difference in Filipino communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactAreas.map((area, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow border-0">
                <CardContent className="p-6">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <area.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{area.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{area.description}</p>
                  <div className="text-lg font-bold text-green-600">{area.amount}</div>
                  <div className="text-xs text-gray-500">average program cost</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Donation Levels */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Donation Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donationLevels.map((level, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-green-600 mb-2">{level.amount}</div>
                    <div className="text-lg font-semibold text-gray-800 mb-2">{level.title}</div>
                    <p className="text-sm text-gray-600">{level.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Make a Donation</h2>
            <p className="text-lg text-gray-600">
              Choose your donation amount and preferred payment method below
            </p>
          </div>

          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold text-gray-800">
                Donation Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DonationForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Secure & Transparent</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your donations are handled securely and used directly for our mission programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Payments</h3>
                <p className="text-gray-600">
                  All donations are processed through trusted Philippine payment systems
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Direct Impact</h3>
                <p className="text-gray-600">
                  100% of donations go directly to program implementation and community support
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Regular Updates</h3>
                <p className="text-gray-600">
                  Receive updates on how your donation is making a difference in communities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
