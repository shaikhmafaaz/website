
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Your message has been submitted. We will get back to you soon!");
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroBackground>
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to answer your questions and help you connect with the AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE community.
          </p>
        </div>
      </HeroBackground>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a question or need information? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="lastName" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input id="email" type="email" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input id="subject" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea id="message" rows={5} required />
                </div>
                
                <Button type="submit" className="bg-blue-accent hover:bg-blue-accent/80 w-full md:w-auto px-8">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                You can reach us through various channels or visit our campus in person during business hours.
              </p>
              
              <div className="space-y-8">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-accent/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-blue-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Our Location</h3>
                        <address className="not-italic text-gray-600">
                          <p>Hidayatulla Rd, Katad Khana</p>
                          <p>Pune, Maharashtra 411002</p>
                          <p>India</p>
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-accent/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-blue-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Phone</h3>
                        <p className="text-gray-600">Main: 7875602149</p>
                        <p className="text-gray-600">Admissions: 9096257146</p>
                        <p className="text-gray-600">Student Services: 8986557000</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-accent/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-blue-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Email</h3>
                        <p className="text-gray-600">General Inquiries: akispoonacollege@gmail.com</p>
                        <p className="text-gray-600">Admissions: admissions@akispoonacollege.edu</p>
                        <p className="text-gray-600">Student Support: support@akispoonacollege.edu</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-accent/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-blue-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our campus is conveniently located in Pune, with easy access to public transportation.
            </p>
          </div>
          
          <div className="aspect-[16/9] w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps?ll=18.506154,73.874782&z=12&t=m&hl=en&gl=US&mapclient=embed&cid=9902628796228839332"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>

      {/* Departments Directory */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Departments Directory</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find contact information for specific departments and offices across campus.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover-scale">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Admissions Office</h3>
                <p className="text-gray-600 mb-3">For inquiries about application process, requirements, and campus tours.</p>
                <div className="text-gray-600">
                  <p>Phone: (123) 456-7891</p>
                  <p>Email: admissions@akispoonacollege.edu</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover-scale">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Financial Aid</h3>
                <p className="text-gray-600 mb-3">For information about scholarships, grants, loans, and payment plans.</p>
                <div className="text-gray-600">
                  <p>Phone: (123) 456-7893</p>
                  <p>Email: financial.aid@akispoonacollege.edu</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover-scale">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Student Housing</h3>
                <p className="text-gray-600 mb-3">For on-campus housing applications, policies, and residential life.</p>
                <div className="text-gray-600">
                  <p>Phone: (123) 456-7894</p>
                  <p>Email: housing@akispoonacollege.edu</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover-scale">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Registrar's Office</h3>
                <p className="text-gray-600 mb-3">For course registration, academic records, transcripts, and graduation.</p>
                <div className="text-gray-600">
                  <p>Phone: (123) 456-7895</p>
                  <p>Email: registrar@akispoonacollege.edu</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover-scale">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Career Services</h3>
                <p className="text-gray-600 mb-3">For career counseling, job fairs, resume assistance, and internships.</p>
                <div className="text-gray-600">
                  <p>Phone: (123) 456-7896</p>
                  <p>Email: careers@akispoonacollege.edu</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md hover-scale">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">IT Support</h3>
                <p className="text-gray-600 mb-3">For technical support, account access, and campus technology services.</p>
                <div className="text-gray-600">
                  <p>Phone: (123) 456-7897</p>
                  <p>Email: helpdesk@akispoonacollege.edu</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to commonly asked questions about AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How do I apply for admission?</h3>
                <p className="text-gray-600">
                  You can apply online through our website by visiting the Admissions page and completing the online application form. For specific program requirements, please contact the Admissions Office.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">What financial aid options are available?</h3>
                <p className="text-gray-600">
                  AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE offers various financial aid options including scholarships, grants, loans, and work-study programs. Visit our Financial Aid Office or website for more information on eligibility and application procedures.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How can I schedule a campus tour?</h3>
                <p className="text-gray-600">
                  Campus tours are available Monday through Friday and select Saturdays. You can schedule a tour online through the Admissions page or by contacting the Admissions Office directly.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Are there housing options available for students?</h3>
                <p className="text-gray-600">
                  Yes, AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE offers on-campus housing for undergraduate and graduate students. Housing options include dormitories, apartments, and shared houses. Applications for housing should be submitted through the Student Housing Office.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
