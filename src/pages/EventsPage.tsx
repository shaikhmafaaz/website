
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

const EventsPage = () => {
  const [filter, setFilter] = useState("all");
  
  const events = [
    {
      id: 1,
      title: "Technology Symposium 2023",
      type: "conference",
      date: "July 15-17, 2023",
      time: "9:00 AM - 5:00 PM",
      location: "Main Campus Auditorium",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Join industry leaders and academic experts for three days of presentations and discussions on emerging technologies and their impact on society.",
      capacity: 500,
      registrationOpen: true
    },
    {
      id: 2,
      title: "Alumni Networking Event",
      type: "networking",
      date: "August 5, 2023",
      time: "6:30 PM - 9:00 PM",
      location: "Business School, Room 305",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Connect with fellow alumni and expand your professional network at this casual evening event featuring guest speakers and refreshments.",
      capacity: 150,
      registrationOpen: true
    },
    {
      id: 3,
      title: "Freshman Orientation",
      type: "academic",
      date: "August 25, 2023",
      time: "10:00 AM - 2:00 PM",
      location: "Student Center",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Welcome to WebAcademix! Get to know your campus, meet faculty members, and learn about student resources available to you.",
      capacity: 300,
      registrationOpen: true
    },
    {
      id: 4,
      title: "Research Innovation Showcase",
      type: "academic",
      date: "September 10, 2023",
      time: "1:00 PM - 4:00 PM",
      location: "Science Building, Atrium",
      image: "https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Explore groundbreaking research projects by our faculty and graduate students spanning various disciplines.",
      capacity: 200,
      registrationOpen: true
    },
    {
      id: 5,
      title: "Career Fair",
      type: "career",
      date: "October 3, 2023",
      time: "11:00 AM - 3:00 PM",
      location: "Sports Complex",
      image: "https://images.unsplash.com/photo-1560439513-74b037a25d84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Meet with representatives from over 75 companies looking to recruit WebAcademix students and alumni for internships and full-time positions.",
      capacity: 1000,
      registrationOpen: false
    },
    {
      id: 6,
      title: "Artificial Intelligence Workshop",
      type: "workshop",
      date: "October 15, 2023",
      time: "10:00 AM - 3:00 PM",
      location: "Computer Science Building, Lab 201",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A hands-on workshop where participants will learn about AI fundamentals and build their first machine learning model.",
      capacity: 50,
      registrationOpen: true
    },
    {
      id: 7,
      title: "Annual Arts Festival",
      type: "cultural",
      date: "November 5-7, 2023",
      time: "Various Times",
      location: "Arts Center",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Celebrate creativity with performances, exhibitions, and interactive installations by students and faculty from the arts department.",
      capacity: 800,
      registrationOpen: false
    },
    {
      id: 8,
      title: "Environmental Sustainability Summit",
      type: "conference",
      date: "November 20, 2023",
      time: "9:30 AM - 4:30 PM",
      location: "Conference Center, Hall A",
      image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Join environmental experts, policymakers, and activists for discussions on climate change solutions and sustainability initiatives.",
      capacity: 300,
      registrationOpen: true
    }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.type === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-navy/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Campus Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay connected with what's happening at WebAcademix through our diverse range of academic, cultural, and social events.
          </p>
        </div>
      </section>

      {/* Events Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs value={filter} onValueChange={setFilter} className="w-full">
            <div className="flex justify-center overflow-x-auto">
              <TabsList className="inline-flex h-auto p-1">
                <TabsTrigger 
                  value="all"
                  className="px-4 py-2 data-[state=active]:bg-blue-accent data-[state=active]:text-white"
                >
                  All Events
                </TabsTrigger>
                <TabsTrigger 
                  value="academic"
                  className="px-4 py-2 data-[state=active]:bg-blue-accent data-[state=active]:text-white"
                >
                  Academic
                </TabsTrigger>
                <TabsTrigger 
                  value="conference"
                  className="px-4 py-2 data-[state=active]:bg-blue-accent data-[state=active]:text-white"
                >
                  Conferences
                </TabsTrigger>
                <TabsTrigger 
                  value="workshop"
                  className="px-4 py-2 data-[state=active]:bg-blue-accent data-[state=active]:text-white"
                >
                  Workshops
                </TabsTrigger>
                <TabsTrigger 
                  value="cultural"
                  className="px-4 py-2 data-[state=active]:bg-blue-accent data-[state=active]:text-white"
                >
                  Cultural
                </TabsTrigger>
                <TabsTrigger 
                  value="career"
                  className="px-4 py-2 data-[state=active]:bg-blue-accent data-[state=active]:text-white"
                >
                  Career
                </TabsTrigger>
                <TabsTrigger 
                  value="networking"
                  className="px-4 py-2 data-[state=active]:bg-blue-accent data-[state=active]:text-white"
                >
                  Networking
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Events Listing */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden border-0 shadow-lg hover-scale">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-accent text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                      {event.type}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Capacity: {event.capacity}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <Button 
                    className={event.registrationOpen ? "bg-blue-accent hover:bg-blue-accent/80 w-full" : "bg-gray-300 cursor-not-allowed w-full"}
                    disabled={!event.registrationOpen}
                  >
                    {event.registrationOpen ? "Register Now" : "Registration Closed"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No events found in this category.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setFilter("all")}
              >
                View All Events
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Academic Calendar</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plan ahead with important dates and deadlines for the academic year.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="border-b pb-4">
                    <h3 className="text-xl font-bold mb-4">Fall Semester 2023</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold">August 25</p>
                        <p className="text-gray-600">New Student Orientation</p>
                      </div>
                      <div>
                        <p className="font-semibold">August 28</p>
                        <p className="text-gray-600">Fall Classes Begin</p>
                      </div>
                      <div>
                        <p className="font-semibold">September 4</p>
                        <p className="text-gray-600">Labor Day (No Classes)</p>
                      </div>
                      <div>
                        <p className="font-semibold">October 16-17</p>
                        <p className="text-gray-600">Fall Break</p>
                      </div>
                      <div>
                        <p className="font-semibold">November 22-26</p>
                        <p className="text-gray-600">Thanksgiving Recess</p>
                      </div>
                      <div>
                        <p className="font-semibold">December 8</p>
                        <p className="text-gray-600">Last Day of Classes</p>
                      </div>
                      <div>
                        <p className="font-semibold">December 11-15</p>
                        <p className="text-gray-600">Final Examinations</p>
                      </div>
                      <div>
                        <p className="font-semibold">December 16</p>
                        <p className="text-gray-600">Winter Commencement</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Spring Semester 2024</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold">January 15</p>
                        <p className="text-gray-600">Martin Luther King Jr. Day (No Classes)</p>
                      </div>
                      <div>
                        <p className="font-semibold">January 16</p>
                        <p className="text-gray-600">Spring Classes Begin</p>
                      </div>
                      <div>
                        <p className="font-semibold">March 11-15</p>
                        <p className="text-gray-600">Spring Break</p>
                      </div>
                      <div>
                        <p className="font-semibold">April 19</p>
                        <p className="text-gray-600">Spring Day (No Classes)</p>
                      </div>
                      <div>
                        <p className="font-semibold">May 3</p>
                        <p className="text-gray-600">Last Day of Classes</p>
                      </div>
                      <div>
                        <p className="font-semibold">May 6-10</p>
                        <p className="text-gray-600">Final Examinations</p>
                      </div>
                      <div>
                        <p className="font-semibold">May 12</p>
                        <p className="text-gray-600">Spring Commencement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Registration Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Event Registration</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Most WebAcademix events are open to students, faculty, staff, and in many cases, the general public. The process for registering varies by event.
                </p>
                <p>
                  For student-exclusive events, you'll need to login with your student credentials. Community events may require a simple registration form or be open for walk-ins.
                </p>
                <p>
                  Registration for high-demand events opens approximately 2-4 weeks before the scheduled date. We recommend registering early to secure your spot.
                </p>
              </div>
              <Button className="mt-6 bg-navy hover:bg-navy/80">
                View Registration FAQ
              </Button>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Host Your Event</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  WebAcademix offers various venues for hosting academic, cultural, and professional events on campus. Our facilities can accommodate everything from small meetings to large conferences.
                </p>
                <p>
                  Student organizations, faculty departments, and approved external organizations can request to use our spaces for events that align with the university's mission and values.
                </p>
              </div>
              <Button className="mt-6 bg-navy hover:bg-navy/80">
                Submit Venue Request
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
