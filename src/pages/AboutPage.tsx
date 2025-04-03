
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import HeroBackground from "@/components/HeroBackground";

const AboutPage = () => {
  const leaders = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "President",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "Dr. Johnson has over 25 years of experience in higher education leadership, with a focus on educational innovation and institutional growth."
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Vice President of Academic Affairs",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "With a background in educational policy and curriculum development, Dr. Chen oversees all academic programs and faculty development."
    },
    {
      id: 3,
      name: "Dr. James Wilson",
      title: "Dean of Research",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "Dr. Wilson is an award-winning researcher with a passion for fostering interdisciplinary research initiatives across campus."
    },
    {
      id: 4,
      name: "Prof. Linda Martinez",
      title: "Dean of Students",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "Prof. Martinez is dedicated to enhancing the student experience through innovative support services and meaningful engagement opportunities."
    }
  ];

  const achievements = [
    {
      id: 1,
      year: "2022",
      title: "Ranked Top 50 in National Universities",
      description: "AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE was recognized among the top 50 universities nationwide for academic excellence and research innovation."
    },
    {
      id: 2,
      year: "2021",
      title: "Center for Digital Innovation Launch",
      description: "Successfully launched the Center for Digital Innovation, a $25M facility dedicated to cutting-edge technology research."
    },
    {
      id: 3,
      year: "2020",
      title: "Global Partnership Program",
      description: "Established partnerships with 15 international universities to enhance global learning opportunities for students."
    },
    {
      id: 4,
      year: "2019",
      title: "Green Campus Initiative",
      description: "Implemented comprehensive sustainability measures resulting in a 40% reduction in carbon footprint over three years."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroBackground>
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our mission, vision, and the dedicated team behind AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE's commitment to excellence in education.
          </p>
        </div>
      </HeroBackground>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE, our mission is to provide accessible, innovative education that empowers students to become creative problem-solvers and ethical leaders who make positive contributions to society.
              </p>
              <p className="text-lg text-gray-600">
                We are committed to fostering a diverse and inclusive learning environment where intellectual curiosity thrives, and students are equipped with the knowledge and skills needed to navigate an increasingly complex world.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE aspires to be a globally recognized institution of academic excellence, known for its innovative approach to education, groundbreaking research, and meaningful community engagement.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where our graduates are at the forefront of addressing global challenges, driving positive change through critical thinking, creativity, and ethical leadership in their respective fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our History</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to a leading institution of higher education, our journey spans over five decades of academic excellence.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right pr-8">
                    <h3 className="text-2xl font-bold text-navy mb-2">1970</h3>
                    <p className="text-lg text-gray-600">
                      Founded as a small technical institute with just three departments and 150 students.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:pl-8">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4 h-4 rounded-full bg-blue-accent"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right pr-8 md:order-2">
                    <h3 className="text-2xl font-bold text-navy mb-2">1985</h3>
                    <p className="text-lg text-gray-600">
                      Achieved university status and expanded to eight academic departments with a student population of 2,000.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:pl-8 md:order-1">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4 h-4 rounded-full bg-blue-accent"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right pr-8">
                    <h3 className="text-2xl font-bold text-navy mb-2">2000</h3>
                    <p className="text-lg text-gray-600">
                      Established the first research center and launched international exchange programs with universities across Europe and Asia.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:pl-8">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4 h-4 rounded-full bg-blue-accent"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right pr-8 md:order-2">
                    <h3 className="text-2xl font-bold text-navy mb-2">2015</h3>
                    <p className="text-lg text-gray-600">
                      Underwent significant digital transformation, becoming a leader in online education and technology-enhanced learning methodologies.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:pl-8 md:order-1">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4 h-4 rounded-full bg-blue-accent"></div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right pr-8">
                    <h3 className="text-2xl font-bold text-navy mb-2">Today</h3>
                    <p className="text-lg text-gray-600">
                      A thriving academic community with over 15,000 students, 20+ departments, and recognized as a top institution for innovation and research.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:pl-8">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4 h-4 rounded-full bg-blue-accent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals guiding AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE's mission for educational excellence and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader) => (
              <Card key={leader.id} className="overflow-hidden border-0 shadow-lg hover-scale">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-blue-accent font-medium mb-3">{leader.title}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Recent Achievements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Celebrating our milestones and recognitions as we continue our pursuit of excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((item) => (
              <Card key={item.id} className="overflow-hidden border-0 shadow-md hover-scale">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-xl font-bold text-blue-accent">{item.year}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Sarah Johnson, President"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-navy mb-6">Message from the President</h2>
              <div className="text-lg text-gray-600 space-y-4">
                <p>
                  Welcome to AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE, where we are dedicated to fostering a community of lifelong learners, innovative thinkers, and compassionate leaders.
                </p>
                <p>
                  In today's rapidly evolving global landscape, higher education plays a crucial role in preparing students not just for the careers of today, but for the challenges and opportunities of tomorrow. At AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE, we embrace this responsibility with a commitment to academic rigor, inclusivity, and innovation.
                </p>
                <p>
                  Our dedicated faculty, cutting-edge facilities, and comprehensive support services create an environment where students can discover their passions, develop their talents, and make meaningful contributions to society. We believe in education that extends beyond the classroom—education that transforms lives and communities.
                </p>
                <p>
                  As you explore all that AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE has to offer, I invite you to envision yourself as part of our dynamic community. Whether you are a prospective student, parent, alumnus, or community partner, there is a place for you in the AKI'S POONA COLLEGE OF ARTS SCIENCE AND COMMERCE family.
                </p>
                <p className="italic">
                  — Dr. Sarah Johnson, President
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
