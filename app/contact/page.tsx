
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from './_components/contact-form';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "sales@avasiaonline.com",
    action: "mailto:sales@avasiaonline.com"
  },
  {
    icon: Phone, 
    title: "Phone",
    content: "+63 917 834 0896",
    action: "tel:+639178340896"
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday–Friday\n8:00 AM – 5:00 PM",
    action: null
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-blue-800 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get in touch with the Moringaling Philippines Foundation. We're here to help 
              with questions about moringa cultivation, health benefits, or joining our community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">
                    Send us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                        <info.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-blue-600 hover:text-blue-800 transition-colors whitespace-pre-line"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* About Card */}
              <Card className="shadow-lg border-0 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-green-800 mb-3">Why Contact Us?</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Learn about moringa cultivation techniques
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Get information about health benefits
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Join our community programs
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Inquire about partnerships
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      Request speaking engagements
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="shadow-lg border-0 bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Response Time</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    We typically respond to inquiries within 24-48 hours during business days.
                  </p>
                  <p className="text-sm text-gray-600">
                    For urgent matters, please call us directly at{' '}
                    <a href="tel:+639178340896" className="text-blue-600 hover:text-blue-800">
                      +63 917 834 0896
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
