import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, BookOpen, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowDialog } from "@/components/ApplyNowDialog";

const HomePage = () => {
  const announcements = [
    {
      id: 1,
      title: "Fall 2023 Admissions Now Open",
      date: "June 15, 2023",
      description: "Applications for Fall 2023 are now being accepted. Apply before July 30th for early decision benefits."
    },
    {
      id: 2,
      title: "New Research Grant Awarded",
      date: "May 28, 2023",
      description: "AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE received a $2.5M grant for advanced research in artificial intelligence and machine learning."
    },
    {
      id: 3,
      title: "Summer Workshop Series",
      date: "May 15, 2023",
      description: "Join our industry experts for a series of summer workshops on emerging technologies."
    }
  ];

  const departments = [
    {
      id: 1,
      name: "Computer Science",
      students: 1200,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
    },
    {
      id: 2,
      name: "Data Science",
      students: 850,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-2"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>
    },
    {
      id: 3,
      name: "Business Administration",
      students: 1100,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    },
    {
      id: 4,
      name: "Digital Arts & Media",
      students: 750,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Technology Symposium 2023",
      date: "July 15-17, 2023",
      location: "Main Campus Auditorium"
    },
    {
      id: 2,
      title: "Alumni Networking Event",
      date: "August 5, 2023",
      location: "Business School, Room 305"
    },
    {
      id: 3,
      title: "Freshman Orientation",
      date: "August 25, 2023",
      location: "Student Center"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/40 z-10"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Oq-4RZ_BUvbt9dHt7BIf5QORH48NA9uJfSphEgYIpu2A-6auqoupVy2ZUK3U-Pl7k3E&usqp=CAU')] bg-cover bg-center"></div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Shaping Tomorrow's Leaders Today
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE delivers cutting-edge education and research opportunities to prepare students for the challenges of a rapidly evolving world.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <Button asChild className="bg-blue-accent hover:bg-blue-accent/80 text-white px-8 py-6 text-lg">
                <Link to="/courses">Explore Programs</Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 glass rounded-xl hover-scale">
              <div className="text-blue-accent mb-2 flex justify-center">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-navy mb-2">15,000+</h3>
              <p className="text-gray-600">Students Enrolled</p>
            </div>
            <div className="p-6 glass rounded-xl hover-scale">
              <div className="text-orange-accent mb-2 flex justify-center">
                <BookOpen className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-navy mb-2">200+</h3>
              <p className="text-gray-600">Academic Programs</p>
            </div>
            <div className="p-6 glass rounded-xl hover-scale">
              <div className="text-pink-accent mb-2 flex justify-center">
                <Calendar className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-navy mb-2">50+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="p-6 glass rounded-xl hover-scale">
              <div className="text-green-600 mb-2 flex justify-center">
                <Trophy className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-navy mb-2">95%</h3>
              <p className="text-gray-600">Graduate Employment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Featured Departments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our world-class academic programs designed to prepare you for success in today's competitive global marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept) => (
              <Card key={dept.id} className="hover-scale card-hover border-0 shadow-md overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-accent/10 p-4 rounded-full text-blue-accent mb-4">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                  <p className="text-gray-500 mb-4">{dept.students} Students Enrolled</p>
                  <Button variant="link" asChild className="text-blue-accent mt-auto">
                    <Link to="/courses">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-navy hover:bg-navy/80">
              <Link to="/courses">View All Departments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Campus Events & Announcements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Upcoming Events */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Upcoming Events</h2>
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover-scale card-hover border-0 shadow-md overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-accent/10 p-3 rounded-lg">
                          <Calendar className="h-6 w-6 text-blue-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                          <p className="text-gray-500 mb-1">{event.date}</p>
                          <p className="text-gray-600">{event.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button asChild variant="outline" className="mt-8">
                <Link to="#">
                  View All Events <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Latest Announcements */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Latest Announcements</h2>
              <div className="space-y-6">
                {announcements.map((announcement) => (
                  <Card key={announcement.id} className="hover-scale card-hover border-0 shadow-md overflow-hidden">
                    <CardContent className="p-6">
                      <time className="text-sm text-gray-500">{announcement.date}</time>
                      <h3 className="font-semibold text-lg my-2">{announcement.title}</h3>
                      <p className="text-gray-600">{announcement.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button asChild variant="outline" className="mt-8">
                <Link to="#">
                  All Announcements <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Academic Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards a brighter future by applying to AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE today.
          </p>
          <ApplyNowDialog />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
