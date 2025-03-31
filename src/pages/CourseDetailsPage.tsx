import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ApplyNowDialog } from "@/components/ApplyNowDialog";

// Define a type for course data
type CourseType = {
  id: string;
  code: string;
  title: string;
  credits: number;
  description: string;
  department?: {
    id: string;
    name: string;
  };
  // Additional fields for the details page
  instructors?: string[];
  prerequisites?: string[];
  objectives?: string[];
  syllabus?: {
    week: number;
    topic: string;
    description: string;
  }[];
};

const CourseDetailsPage = () => {
  const { departmentId, courseId } = useParams();
  
  // This would normally come from an API or context
  // For now, we'll use static data matching what's in CoursesPage
  const allDepartments = [
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
          description: "Fundamental concepts of programming, algorithms, and computational problem-solving.",
          instructors: ["Dr. Jane Smith", "Prof. Robert Johnson"],
          prerequisites: ["None"],
          objectives: [
            "Understand fundamental programming concepts",
            "Develop problem-solving skills using computational thinking",
            "Learn basic algorithms and data structures",
            "Create simple programs in a high-level language"
          ],
          syllabus: [
            { week: 1, topic: "Introduction to Computing", description: "History of computing, binary representation, and basic computer architecture." },
            { week: 2, topic: "Programming Fundamentals", description: "Variables, data types, expressions, and basic I/O operations." },
            { week: 3, topic: "Control Structures", description: "Conditional statements, loops, and program flow control." },
            { week: 4, topic: "Functions and Modularity", description: "Function definition, parameters, return values, and scope." },
            { week: 5, topic: "Arrays and Lists", description: "Working with collections of data, iteration, and basic operations." }
          ]
        },
        {
          id: "cs201",
          code: "CS201",
          title: "Data Structures and Algorithms",
          credits: 4,
          description: "Study of data structures, their operations, and the algorithms that manipulate them.",
          instructors: ["Dr. Michael Chen", "Prof. Sarah Williams"],
          prerequisites: ["CS101", "MATH150"],
          objectives: [
            "Implement and analyze fundamental data structures",
            "Apply algorithmic techniques to solve computational problems",
            "Analyze algorithm efficiency using Big-O notation",
            "Design efficient algorithms for various applications"
          ],
          syllabus: [
            { week: 1, topic: "Algorithm Analysis", description: "Time and space complexity, asymptotic notation, and efficiency analysis." },
            { week: 2, topic: "Lists and Arrays", description: "Implementation details, operations, and applications." },
            { week: 3, topic: "Stacks and Queues", description: "LIFO and FIFO structures, implementations, and applications." },
            { week: 4, topic: "Trees", description: "Binary trees, search trees, balanced trees, and tree traversals." },
            { week: 5, topic: "Hashing", description: "Hash functions, collision resolution, and hash table implementations." }
          ]
        },
        {
          id: "cs305",
          code: "CS305",
          title: "Artificial Intelligence",
          credits: 3,
          description: "Introduction to the principles and programming techniques of artificial intelligence.",
          instructors: ["Dr. Elena Rodriguez", "Prof. David Kim"],
          prerequisites: ["CS201", "MATH250"],
          objectives: [
            "Understand core concepts and methodologies in AI",
            "Implement basic AI algorithms for problem-solving",
            "Explore machine learning fundamentals",
            "Apply AI techniques to real-world scenarios"
          ],
          syllabus: [
            { week: 1, topic: "Introduction to AI", description: "History, applications, and philosophical implications." },
            { week: 2, topic: "Search Algorithms", description: "Uninformed and heuristic search strategies." },
            { week: 3, topic: "Knowledge Representation", description: "Logic, rules, semantic networks, and frames." },
            { week: 4, topic: "Machine Learning Basics", description: "Supervised and unsupervised learning approaches." },
            { week: 5, topic: "Neural Networks", description: "Perceptrons, backpropagation, and deep learning foundations." }
          ]
        },
        {
          id: "cs401",
          code: "CS401",
          title: "Database Systems",
          credits: 4,
          description: "Design and implementation of database systems, including data modeling and query languages.",
          instructors: ["Dr. Lisa Thompson", "Prof. James Wilson"],
          prerequisites: ["CS201"],
          objectives: [
            "Design and implement relational database schemas",
            "Write complex SQL queries for data retrieval and manipulation",
            "Understand database normalization principles",
            "Implement transaction processing and concurrency control"
          ],
          syllabus: [
            { week: 1, topic: "Data Models", description: "Relational, hierarchical, and network models." },
            { week: 2, topic: "Database Design", description: "Entity-relationship modeling and normalization." },
            { week: 3, topic: "SQL", description: "Data definition, manipulation, and querying using SQL." },
            { week: 4, topic: "Transactions", description: "ACID properties, concurrency control, and recovery." },
            { week: 5, topic: "Database Administration", description: "Security, integrity, and optimization techniques." }
          ]
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
          description: "Introduction to the fundamental concepts and techniques in data science.",
          instructors: ["Dr. Alex Morgan", "Prof. Jessica Lee"],
          prerequisites: ["MATH150"],
          objectives: [
            "Understand the data science lifecycle",
            "Apply statistical methods to analyze data",
            "Implement basic data visualization techniques",
            "Use programming tools for data manipulation"
          ],
          syllabus: [
            { week: 1, topic: "Introduction to Data Science", description: "Overview, applications, and ethical considerations." },
            { week: 2, topic: "Data Collection and Cleaning", description: "Sources, methods, and preprocessing techniques." },
            { week: 3, topic: "Exploratory Data Analysis", description: "Statistical summaries and visualization approaches." },
            { week: 4, topic: "Basic Statistical Methods", description: "Hypothesis testing, correlation, and regression." },
            { week: 5, topic: "Data Visualization", description: "Principles and tools for effective visual communication." }
          ]
        },
        {
          id: "ds210",
          code: "DS210",
          title: "Machine Learning",
          credits: 4,
          description: "Study of algorithms that allow computers to learn from and make predictions on data.",
          instructors: ["Dr. Thomas Brown", "Prof. Sophia Garcia"],
          prerequisites: ["DS102", "CS101", "MATH250"],
          objectives: [
            "Understand core machine learning paradigms",
            "Implement supervised and unsupervised learning algorithms",
            "Evaluate model performance using appropriate metrics",
            "Apply machine learning to solve real-world problems"
          ],
          syllabus: [
            { week: 1, topic: "Machine Learning Foundations", description: "Types of learning, model evaluation, and validation." },
            { week: 2, topic: "Supervised Learning", description: "Classification and regression techniques." },
            { week: 3, topic: "Unsupervised Learning", description: "Clustering, dimensionality reduction, and association." },
            { week: 4, topic: "Ensemble Methods", description: "Bagging, boosting, and stacking approaches." },
            { week: 5, topic: "Feature Engineering", description: "Selection, extraction, and transformation methods." }
          ]
        },
        {
          id: "ds315",
          code: "DS315",
          title: "Big Data Analytics",
          credits: 3,
          description: "Techniques for analyzing and extracting meaningful insights from large-scale data sets.",
          instructors: ["Dr. Omar Hassan", "Prof. Patricia Chen"],
          prerequisites: ["DS210", "CS401"],
          objectives: [
            "Understand big data characteristics and challenges",
            "Use distributed computing frameworks for data processing",
            "Implement scalable machine learning algorithms",
            "Design end-to-end big data analytics pipelines"
          ],
          syllabus: [
            { week: 1, topic: "Big Data Ecosystem", description: "Technologies, architectures, and platforms." },
            { week: 2, topic: "Distributed Computing", description: "MapReduce, Spark, and parallel processing." },
            { week: 3, topic: "NoSQL Databases", description: "Document, key-value, column, and graph databases." },
            { week: 4, topic: "Stream Processing", description: "Real-time analytics and event processing." },
            { week: 5, topic: "Scalable Machine Learning", description: "Algorithms and frameworks for large-scale ML." }
          ]
        },
        {
          id: "ds420",
          code: "DS420",
          title: "Deep Learning",
          credits: 4,
          description: "Advanced neural network architectures and their applications in various domains.",
          instructors: ["Dr. Elizabeth Wright", "Prof. Ryan Martinez"],
          prerequisites: ["DS210", "CS305"],
          objectives: [
            "Understand neural network principles and architectures",
            "Implement deep learning models using modern frameworks",
            "Apply deep learning to computer vision and NLP tasks",
            "Design and train models for specific applications"
          ],
          syllabus: [
            { week: 1, topic: "Neural Network Fundamentals", description: "Neurons, activation functions, and backpropagation." },
            { week: 2, topic: "Convolutional Neural Networks", description: "Architecture, training, and applications in computer vision." },
            { week: 3, topic: "Recurrent Neural Networks", description: "Sequential data processing and language modeling." },
            { week: 4, topic: "Generative Models", description: "Autoencoders, GANs, and other generative approaches." },
            { week: 5, topic: "Deep Reinforcement Learning", description: "RL fundamentals and deep Q-networks." }
          ]
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
          description: "Introduction to the fundamental principles and practices of business management.",
          instructors: ["Dr. William Baker", "Prof. Nancy Taylor"],
          prerequisites: ["None"],
          objectives: [
            "Understand management functions and roles",
            "Apply planning, organizing, leading, and controlling principles",
            "Develop effective decision-making skills",
            "Recognize organizational structures and behaviors"
          ],
          syllabus: [
            { week: 1, topic: "Introduction to Management", description: "History, evolution, and contemporary approaches." },
            { week: 2, topic: "Planning and Strategy", description: "Goal setting, strategic planning, and decision making." },
            { week: 3, topic: "Organizing", description: "Organizational structures, design, and culture." },
            { week: 4, topic: "Leading", description: "Leadership theories, motivation, and communication." },
            { week: 5, topic: "Controlling", description: "Standards, performance measurement, and corrective actions." }
          ]
        },
        {
          id: "ba220",
          code: "BA220",
          title: "Marketing Fundamentals",
          credits: 3,
          description: "Overview of marketing concepts, strategies, and their application in various business contexts.",
          instructors: ["Dr. Christine Lee", "Prof. Mark Johnson"],
          prerequisites: ["BA101"],
          objectives: [
            "Understand core marketing concepts and strategies",
            "Apply market segmentation and targeting principles",
            "Develop product, pricing, promotion, and distribution strategies",
            "Create basic marketing plans"
          ],
          syllabus: [
            { week: 1, topic: "Marketing Foundations", description: "Core concepts, customer value, and marketing environment." },
            { week: 2, topic: "Consumer Behavior", description: "Buyer decision processes and influencing factors." },
            { week: 3, topic: "Market Research", description: "Information gathering, analysis, and application." },
            { week: 4, topic: "Marketing Mix", description: "Product, price, place, and promotion strategies." },
            { week: 5, topic: "Digital Marketing", description: "Online strategies, social media, and analytics." }
          ]
        },
        {
          id: "ba305",
          code: "BA305",
          title: "Financial Management",
          credits: 4,
          description: "Analysis of financial decisions and their impact on organizational performance.",
          instructors: ["Dr. Richard Scott", "Prof. Laura Kim"],
          prerequisites: ["BA101", "ECON200"],
          objectives: [
            "Understand financial management principles",
            "Apply techniques for capital budgeting and investment analysis",
            "Evaluate financing options and capital structure",
            "Analyze financial statements and performance"
          ],
          syllabus: [
            { week: 1, topic: "Financial Management Overview", description: "Goals, functions, and environment." },
            { week: 2, topic: "Financial Statement Analysis", description: "Ratio analysis, interpretation, and forecasting." },
            { week: 3, topic: "Time Value of Money", description: "Present and future value concepts and applications." },
            { week: 4, topic: "Capital Budgeting", description: "Investment evaluation methods and decision criteria." },
            { week: 5, topic: "Capital Structure", description: "Debt, equity, and optimal financing mix." }
          ]
        },
        {
          id: "ba410",
          code: "BA410",
          title: "Strategic Management",
          credits: 3,
          description: "Formulation and implementation of business strategies to achieve organizational objectives.",
          instructors: ["Dr. Jennifer Adams", "Prof. Daniel Park"],
          prerequisites: ["BA101", "BA220", "BA305"],
          objectives: [
            "Understand strategic management frameworks",
            "Conduct industry and competitive analyses",
            "Formulate corporate, business, and functional strategies",
            "Develop implementation and evaluation plans"
          ],
          syllabus: [
            { week: 1, topic: "Strategic Management Process", description: "Components, models, and approaches." },
            { week: 2, topic: "External Environment Analysis", description: "PESTEL analysis, Porter's Five Forces, and opportunities/threats." },
            { week: 3, topic: "Internal Environment Analysis", description: "Resource-based view, value chain, and strengths/weaknesses." },
            { week: 4, topic: "Strategy Formulation", description: "Corporate, business, and functional level strategies." },
            { week: 5, topic: "Strategy Implementation", description: "Structure, systems, people, and culture alignment." }
          ]
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
          description: "Introduction to the principles and elements of digital design and visual communication.",
          instructors: ["Prof. Michelle Carter", "Dr. Jason Wong"],
          prerequisites: ["None"],
          objectives: [
            "Understand design principles and elements",
            "Develop skills in digital design software",
            "Create visual compositions for various media",
            "Apply typography and color theory effectively"
          ],
          syllabus: [
            { week: 1, topic: "Design Principles", description: "Balance, contrast, emphasis, rhythm, and unity." },
            { week: 2, topic: "Color Theory", description: "Color models, psychology, and applications." },
            { week: 3, topic: "Typography", description: "Classification, selection, and layout principles." },
            { week: 4, topic: "Digital Imaging", description: "Raster graphics, manipulation, and composition." },
            { week: 5, topic: "Vector Graphics", description: "Creation, editing, and application." }
          ]
        },
        {
          id: "dam201",
          code: "DAM201",
          title: "Web Development for Creatives",
          credits: 4,
          description: "Application of web technologies to create visually engaging and interactive digital experiences.",
          instructors: ["Prof. Kevin Nelson", "Dr. Samantha Clark"],
          prerequisites: ["DAM105"],
          objectives: [
            "Understand web design principles and standards",
            "Develop skills in HTML, CSS, and basic JavaScript",
            "Create responsive and accessible web layouts",
            "Implement interactive elements and animations"
          ],
          syllabus: [
            { week: 1, topic: "Web Design Principles", description: "User experience, information architecture, and responsive design." },
            { week: 2, topic: "HTML and Document Structure", description: "Semantic markup, elements, and attributes." },
            { week: 3, topic: "CSS Styling", description: "Selectors, properties, layouts, and frameworks." },
            { week: 4, topic: "JavaScript Basics", description: "Syntax, DOM manipulation, and event handling." },
            { week: 5, topic: "Web Animation", description: "CSS transitions, keyframes, and JavaScript animation libraries." }
          ]
        },
        {
          id: "dam310",
          code: "DAM310",
          title: "Motion Graphics",
          credits: 3,
          description: "Creating animated visual elements for multimedia projects and digital storytelling.",
          instructors: ["Dr. Brandon Lewis", "Prof. Tina Rivera"],
          prerequisites: ["DAM105", "DAM201"],
          objectives: [
            "Understand motion design principles",
            "Develop skills in animation software",
            "Create compelling motion graphics for various media",
            "Apply timing, pacing, and narrative techniques"
          ],
          syllabus: [
            { week: 1, topic: "Motion Design Principles", description: "Time, space, composition, and narrative." },
            { week: 2, topic: "Animation Fundamentals", description: "Keyframing, easing, and timing." },
            { week: 3, topic: "Visual Effects", description: "Compositing, masking, and tracking." },
            { week: 4, topic: "Character Animation", description: "Character design, rigging, and animation." },
            { week: 5, topic: "Motion Graphics Projects", description: "Title sequences, explainer videos, and promotions." }
          ]
        },
        {
          id: "dam415",
          code: "DAM415",
          title: "Interactive Media Production",
          credits: 4,
          description: "Advanced techniques in creating interactive digital media for various platforms.",
          instructors: ["Dr. Alicia Martinez", "Prof. Eric Thompson"],
          prerequisites: ["DAM201", "DAM310"],
          objectives: [
            "Understand interactive design principles",
            "Develop skills in interactive development frameworks",
            "Create immersive user experiences across platforms",
            "Apply user testing and iterative design processes"
          ],
          syllabus: [
            { week: 1, topic: "Interactive Design", description: "User-centered design, interaction patterns, and prototyping." },
            { week: 2, topic: "Advanced JavaScript", description: "Frameworks, libraries, and programming patterns." },
            { week: 3, topic: "Mobile and Touch Interfaces", description: "Responsive design, gesture controls, and device APIs." },
            { week: 4, topic: "Interactive Narrative", description: "Storytelling, branching structures, and user agency." },
            { week: 5, topic: "Emerging Technologies", description: "AR, VR, and other immersive media platforms." }
          ]
        }
      ]
    }
  ];
  
  // Find the selected department and course
  const department = allDepartments.find(dept => dept.id === departmentId);
  const course = department?.courses.find(course => course.id === courseId);

  // Handle case where course or department isn't found
  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-navy mb-6">Course Not Found</h1>
        <p className="mb-8">The requested course could not be found.</p>
        <Button asChild>
          <Link to="/courses">Return to Courses</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/courses" className="inline-flex items-center text-blue-accent hover:text-blue-accent/80 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>

        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">{course.title}</h1>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-accent/10 text-blue-accent px-3 py-1 rounded-full text-sm font-medium">
                {course.code}
              </span>
              <span className="text-gray-600">{course.credits} Credits</span>
            </div>
            {department && (
              <p className="text-gray-600 mb-4">Department: {department.name}</p>
            )}
          </div>
          
          <ApplyNowDialog programName={`${course.code}: ${course.title}`} />
        </div>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Course Description</h2>
            <p className="text-gray-600">{course.description}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
            {course.prerequisites && course.prerequisites.length > 0 ? (
              <ul className="list-disc list-inside space-y-2">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} className="text-gray-600">{prereq}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No prerequisites required</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Instructors</h2>
            {course.instructors && course.instructors.length > 0 ? (
              <ul className="list-disc list-inside space-y-2">
                {course.instructors.map((instructor, index) => (
                  <li key={index} className="text-gray-600">{instructor}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">To be announced</p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Course Objectives</h2>
          {course.objectives && course.objectives.length > 0 ? (
            <ul className="list-disc list-inside space-y-2">
              {course.objectives.map((objective, index) => (
                <li key={index} className="text-gray-600">{objective}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">Course objectives will be provided by the instructor.</p>
          )}
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Weekly Syllabus</h2>
          {course.syllabus && course.syllabus.length > 0 ? (
            <div className="space-y-6">
              {course.syllabus.map((week, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                  <h3 className="font-semibold mb-2">Week {week.week}: {week.topic}</h3>
                  <p className="text-gray-600">{week.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Detailed syllabus will be provided at the beginning of the course.</p>
          )}
        </CardContent>
      </Card>

      <div className="bg-blue-accent/5 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-navy mb-4">Ready to Enroll?</h2>
        <p className="text-gray-600 mb-6">Join this course to advance your knowledge and skills in {course.title}.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <ApplyNowDialog programName={`${course.code}: ${course.title}`} />
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Advisor</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
