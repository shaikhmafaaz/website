
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const departments = [
    {
      id: "cs",
      name: "Computer Science",
      description: "Exploring the foundations and frontiers of computing technology.",
      courses: [
        {
          id: "cs101",
          code: "CS101",
          title: "Introduction to Computer Science",
          credits: 3,
          description: "Fundamental concepts of programming, algorithms, and computational problem-solving."
        },
        {
          id: "cs201",
          code: "CS201",
          title: "Data Structures and Algorithms",
          credits: 4,
          description: "Study of data structures, their operations, and the algorithms that manipulate them."
        },
        {
          id: "cs305",
          code: "CS305",
          title: "Artificial Intelligence",
          credits: 3,
          description: "Introduction to the principles and programming techniques of artificial intelligence."
        },
        {
          id: "cs401",
          code: "CS401",
          title: "Database Systems",
          credits: 4,
          description: "Design and implementation of database systems, including data modeling and query languages."
        }
      ]
    },
    {
      id: "ds",
      name: "Data Science",
      description: "Analyzing and interpreting complex data to inform decision making.",
      courses: [
        {
          id: "ds102",
          code: "DS102",
          title: "Foundations of Data Science",
          credits: 3,
          description: "Introduction to the fundamental concepts and techniques in data science."
        },
        {
          id: "ds210",
          code: "DS210",
          title: "Machine Learning",
          credits: 4,
          description: "Study of algorithms that allow computers to learn from and make predictions on data."
        },
        {
          id: "ds315",
          code: "DS315",
          title: "Big Data Analytics",
          credits: 3,
          description: "Techniques for analyzing and extracting meaningful insights from large-scale data sets."
        },
        {
          id: "ds420",
          code: "DS420",
          title: "Deep Learning",
          credits: 4,
          description: "Advanced neural network architectures and their applications in various domains."
        }
      ]
    },
    {
      id: "ba",
      name: "Business Administration",
      description: "Developing leadership and management skills for the business world.",
      courses: [
        {
          id: "ba101",
          code: "BA101",
          title: "Principles of Management",
          credits: 3,
          description: "Introduction to the fundamental principles and practices of business management."
        },
        {
          id: "ba220",
          code: "BA220",
          title: "Marketing Fundamentals",
          credits: 3,
          description: "Overview of marketing concepts, strategies, and their application in various business contexts."
        },
        {
          id: "ba305",
          code: "BA305",
          title: "Financial Management",
          credits: 4,
          description: "Analysis of financial decisions and their impact on organizational performance."
        },
        {
          id: "ba410",
          code: "BA410",
          title: "Strategic Management",
          credits: 3,
          description: "Formulation and implementation of business strategies to achieve organizational objectives."
        }
      ]
    },
    {
      id: "dam",
      name: "Digital Arts & Media",
      description: "Creating engaging digital content through design and technology.",
      courses: [
        {
          id: "dam105",
          code: "DAM105",
          title: "Digital Design Fundamentals",
          credits: 3,
          description: "Introduction to the principles and elements of digital design and visual communication."
        },
        {
          id: "dam201",
          code: "DAM201",
          title: "Web Development for Creatives",
          credits: 4,
          description: "Application of web technologies to create visually engaging and interactive digital experiences."
        },
        {
          id: "dam310",
          code: "DAM310",
          title: "Motion Graphics",
          credits: 3,
          description: "Creating animated visual elements for multimedia projects and digital storytelling."
        },
        {
          id: "dam415",
          code: "DAM415",
          title: "Interactive Media Production",
          credits: 4,
          description: "Advanced techniques in creating interactive digital media for various platforms."
        }
      ]
    }
  ];

  // Filter courses based on search query
  const filteredDepartments = departments.map(dept => ({
    ...dept,
    courses: dept.courses.filter(course => 
      course.code.toLowerCase().includes(searchQuery.toLowerCase()) || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(dept => dept.courses.length > 0);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-navy/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our diverse range of undergraduate and graduate programs designed to prepare you for success in your chosen field.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Search courses by name or code..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses by Department */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="cs" className="w-full">
            <div className="mb-8 overflow-x-auto">
              <TabsList className="inline-flex h-auto p-1">
                {departments.map((dept) => (
                  <TabsTrigger 
                    key={dept.id} 
                    value={dept.id}
                    className="px-4 py-2 data-[state=active]:bg-blue-accent data-[state=active]:text-white"
                  >
                    {dept.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {departments.map((dept) => (
              <TabsContent key={dept.id} value={dept.id} className="mt-6">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-navy mb-4">{dept.name}</h2>
                  <p className="text-lg text-gray-600 mb-8">{dept.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {(searchQuery === "" ? dept.courses : 
                    dept.courses.filter(course => 
                      course.code.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      course.title.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                  ).map((course) => (
                    <Card key={course.id} className="hover-scale card-hover border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold">{course.title}</h3>
                          <span className="bg-blue-accent/10 text-blue-accent px-3 py-1 rounded-full text-sm font-medium">
                            {course.code}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{course.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500">{course.credits} Credits</span>
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/courses/${dept.id}/${course.id}`}>View Details</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {searchQuery !== "" && 
                  dept.courses.filter(course => 
                    course.code.toLowerCase().includes(searchQuery.toLowerCase()) || 
                    course.title.toLowerCase().includes(searchQuery.toLowerCase())
                  ).length === 0 && (
                    <p className="text-center py-8 text-gray-500">No courses match your search in this department.</p>
                  )
                }
              </TabsContent>
            ))}
            
            {searchQuery !== "" && filteredDepartments.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">No courses found matching "{searchQuery}"</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </Tabs>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Program Structure</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our academic programs are designed to provide a comprehensive educational experience that combines theoretical knowledge with practical skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-accent/10 text-blue-accent mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Core Courses</h3>
              <p className="text-gray-600">
                Build a strong foundation with essential courses in your field of study.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-accent/10 text-blue-accent mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Specialization</h3>
              <p className="text-gray-600">
                Develop expertise in your area of interest through specialized courses.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-accent/10 text-blue-accent mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Practical Projects</h3>
              <p className="text-gray-600">
                Apply theoretical knowledge to real-world scenarios through hands-on projects.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-accent/10 text-blue-accent mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Capstone Experience</h3>
              <p className="text-gray-600">
                Demonstrate your comprehensive knowledge through a culminating project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Learn From The Best</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our distinguished faculty members are leaders in their fields, dedicated to academic excellence and student success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg hover-scale">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Professor teaching"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
                <p className="text-gray-600">
                  Learn from industry professionals and renowned academics who bring real-world experience to the classroom.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover-scale">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Students in laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">State-of-the-Art Facilities</h3>
                <p className="text-gray-600">
                  Access cutting-edge laboratories, technology centers, and learning resources to enhance your educational experience.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-lg hover-scale">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Students collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Collaborative Learning</h3>
                <p className="text-gray-600">
                  Engage in teamwork and peer learning opportunities that prepare you for success in today's collaborative workplace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Academic Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards your future by applying to one of our academic programs today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-accent hover:bg-blue-accent/80 px-8 py-6 text-base">
              Apply Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-base">
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
