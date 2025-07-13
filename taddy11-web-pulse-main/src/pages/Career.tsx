import React, { useState } from 'react';
import axios from 'axios';
import { Search, MapPin, Clock, Users, Award, Heart, Code, Smartphone, Server, Settings, User, Palette, TestTube, X, Send, CheckCircle, Building, Globe, Zap } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import { TrendingUp } from 'lucide-react';
import { Edit, Trash2, Eye } from 'lucide-react';



interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  icon: React.ReactNode;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary: string;
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$80,000 - $120,000',
    icon: <Code className="w-6 h-6" />,
    description: 'Join our frontend team to build beautiful, responsive user interfaces using React, TypeScript, and modern web technologies.',
    requirements: [
      'Strong proficiency in React, TypeScript, and modern JavaScript',
      'Experience with state management (Redux, Zustand, or Context API)',
      'Knowledge of CSS frameworks (Tailwind CSS preferred)',
      'Understanding of responsive design and cross-browser compatibility',
      'Familiarity with testing frameworks (Jest, React Testing Library)'
    ],
    responsibilities: [
      'Develop and maintain user-facing features using React and TypeScript',
      'Collaborate with designers to implement pixel-perfect UI components',
      'Optimize applications for maximum speed and scalability',
      'Participate in code reviews and maintain high code quality standards',
      'Work closely with backend developers to integrate APIs'
    ]
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    experience: '3-5 years',
    salary: '$90,000 - $140,000',
    icon: <Server className="w-6 h-6" />,
    description: 'Build end-to-end solutions using modern web technologies. Work on both frontend and backend systems to deliver complete features.',
    requirements: [
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of cloud platforms (AWS, GCP, or Azure)',
      'Understanding of RESTful APIs and GraphQL',
      'Experience with containerization (Docker, Kubernetes)'
    ],
    responsibilities: [
      'Design and develop full-stack applications from conception to deployment',
      'Build and maintain scalable backend services and APIs',
      'Implement database schemas and optimize query performance',
      'Ensure application security and implement best practices',
      'Collaborate with cross-functional teams to deliver features'
    ]
  },
  {
    id: '3',
    title: 'Mobile App Developer',
    department: 'Engineering',
    location: 'Remote / Austin',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$75,000 - $115,000',
    icon: <Smartphone className="w-6 h-6" />,
    description: 'Create amazing mobile experiences for iOS and Android platforms using React Native and native development tools.',
    requirements: [
      'Experience with React Native or native iOS/Android development',
      'Knowledge of mobile UI/UX design principles',
      'Understanding of app store submission processes',
      'Experience with push notifications and offline functionality',
      'Familiarity with mobile testing frameworks'
    ],
    responsibilities: [
      'Develop cross-platform mobile applications using React Native',
      'Implement native modules when required for platform-specific features',
      'Optimize app performance and ensure smooth user experience',
      'Collaborate with designers to create intuitive mobile interfaces',
      'Handle app store submissions and version management'
    ]
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Remote / Seattle',
    type: 'Full-time',
    experience: '3-6 years',
    salary: '$95,000 - $150,000',
    icon: <Settings className="w-6 h-6" />,
    description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment systems to support our growing platform.',
    requirements: [
      'Experience with cloud platforms (AWS, GCP, Azure)',
      'Proficiency in containerization (Docker, Kubernetes)',
      'Knowledge of Infrastructure as Code (Terraform, CloudFormation)',
      'Experience with CI/CD pipelines (Jenkins, GitLab CI, GitHub Actions)',
      'Strong scripting skills (Bash, Python, Go)'
    ],
    responsibilities: [
      'Design and maintain scalable cloud infrastructure',
      'Implement and optimize CI/CD pipelines for automated deployments',
      'Monitor system performance and implement alerting solutions',
      'Ensure security best practices across all environments',
      'Collaborate with development teams to improve deployment processes'
    ]
  },
  {
    id: '5',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote / Los Angeles',
    type: 'Full-time',
    experience: '2-5 years',
    salary: '$70,000 - $110,000',
    icon: <Palette className="w-6 h-6" />,
    description: 'Create intuitive and beautiful user experiences that delight our customers and drive business growth.',
    requirements: [
      'Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)',
      'Strong understanding of user-centered design principles',
      'Experience with prototyping and user testing',
      'Knowledge of accessibility standards and best practices',
      'Portfolio demonstrating strong visual and interaction design skills'
    ],
    responsibilities: [
      'Design user interfaces for web and mobile applications',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and high-fidelity designs',
      'Collaborate with developers to ensure design implementation',
      'Maintain and evolve our design system'
    ]
  },
  {
    id: '6',
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / Boston',
    type: 'Full-time',
    experience: '3-6 years',
    salary: '$100,000 - $160,000',
    icon: <User className="w-6 h-6" />,
    description: 'Drive product strategy and execution to deliver features that solve real customer problems and drive business value.',
    requirements: [
      'Experience in product management or related field',
      'Strong analytical and problem-solving skills',
      'Understanding of agile development methodologies',
      'Experience with product analytics tools',
      'Excellent communication and stakeholder management skills'
    ],
    responsibilities: [
      'Define product roadmap and prioritize feature development',
      'Gather and analyze customer feedback and market research',
      'Work closely with engineering and design teams',
      'Track product metrics and iterate based on data',
      'Communicate product vision to stakeholders'
    ]
  },
  {
    id: '7',
    title: 'QA Engineer',
    department: 'Engineering',
    location: 'Remote / Chicago',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '$65,000 - $95,000',
    icon: <TestTube className="w-6 h-6" />,
    description: 'Ensure the quality and reliability of our products through comprehensive testing strategies and automation.',
    requirements: [
      'Experience with manual and automated testing',
      'Knowledge of testing frameworks (Selenium, Cypress, Jest)',
      'Understanding of software development lifecycle',
      'Experience with API testing and performance testing',
      'Strong attention to detail and analytical skills'
    ],
    responsibilities: [
      'Develop and execute comprehensive test plans',
      'Create and maintain automated test suites',
      'Identify, document, and track bugs and issues',
      'Collaborate with development teams on quality standards',
      'Perform regression testing and validate bug fixes'
    ]
  }
];

const departments = ['All', 'Engineering', 'Design', 'Product', 'Infrastructure'];
const locations = ['All', 'Remote', 'San Francisco', 'New York', 'Austin', 'Seattle', 'Los Angeles', 'Boston', 'Chicago'];

const Career: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [showMyApplications, setShowMyApplications] = useState(false);
  const [myApplications, setMyApplications] = useState<any[]>([]);
  const [userEmail, setUserEmail] = useState('');
  const [editingApplication, setEditingApplication] = useState<any>(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
    portfolio: '',
    experience: '',
    availability: '',
    linkedIn:'',
    skills: '',
    expectedSalary:''
  });

  // Fetch user applications
  const fetchMyApplications = async (email: string) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/applications/user/${email}`);
      if (response.data.success) {
        setMyApplications(response.data.applications);
        setShowMyApplications(true);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
      alert('Error fetching applications');
    }
  };

  // Handle view my applications
  const handleViewMyApplications = () => {
    const email = prompt('Please enter your email to view your applications:');
    if (email) {
      setUserEmail(email);
      fetchMyApplications(email);
    }
  };

  // Handle edit application
  const handleEditApplication = (application: any) => {
    setEditingApplication(application);
    setApplicationData({
      name: application.name,
      email: application.email,
      phone: application.phone,
      linkedIn: application.linkedIn || '',
      portfolio: application.portfolio || '',
      experience: application.experience,
      skills: application.skills,
      coverLetter: application.coverLetter,
      availability: application.availability,
      expectedSalary: application.expectedSalary || '',
      resume: null
    });
    setShowEditForm(true);
  };

  // Handle update application
  const handleUpdateApplication = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', applicationData.name);
    formData.append('email', applicationData.email);
    formData.append('phone', applicationData.phone);
    formData.append('linkedIn', applicationData.linkedIn);
    formData.append('portfolio', applicationData.portfolio);
    formData.append('experience', applicationData.experience);
    formData.append('skills', applicationData.skills);
    formData.append('coverLetter', applicationData.coverLetter);
    formData.append('preferredRole', editingApplication.preferredRole);
    formData.append('availability', applicationData.availability);
    formData.append('expectedSalary', applicationData.expectedSalary);
    
    if (applicationData.resume) {
      formData.append('resume', applicationData.resume);
    }

    try {
      const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/applications/${editingApplication._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        alert('Application updated successfully!');
        setShowEditForm(false);
        setEditingApplication(null);
        fetchMyApplications(userEmail); // Refresh the list
        
        // Reset form
        setApplicationData({
          name: '',
          email: '',
          phone: '',
          linkedIn: '',
          portfolio: '',
          experience: '',
          skills: '',
          coverLetter: '',
          availability: '',
          expectedSalary: '',
          resume: null
        });
      }
    } catch (error) {
      console.error('Error updating application:', error);
      alert('Error updating application. Please try again.');
    }
  };

  // Handle delete application
  const handleDeleteApplication = async (applicationId: string) => {
    if (window.confirm('Are you sure you want to delete this application? This action cannot be undone.')) {
      try {
        const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/applications/${applicationId}`);
        
        if (response.data.success) {
          alert('Application deleted successfully!');
          fetchMyApplications(userEmail); // Refresh the list
        }
      } catch (error) {
        console.error('Error deleting application:', error);
        alert('Error deleting application. Please try again.');
      }
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location.includes(selectedLocation);
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

const handleApplicationSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', applicationData.name); 
  formData.append('email', applicationData.email);
  formData.append('phone', applicationData.phone);
  formData.append('linkedIn', applicationData.linkedIn);
  formData.append('portfolio', applicationData.portfolio);
  formData.append('experience', applicationData.experience);
  formData.append('skills', applicationData.skills);
  formData.append('coverLetter', applicationData.coverLetter);
  formData.append('preferredRole', selectedJob?.title || '');
  formData.append('availability', applicationData.availability);
  formData.append('expectedSalary', applicationData.expectedSalary);
  
  if (applicationData.resume) {
    formData.append('resume', applicationData.resume);
  }
  for (const [key, value] of formData.entries()) {
  console.log(`${key}:`, value);
}

  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/applications/general`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = response.data;

    if (data.success) {
      alert('Application submitted successfully!');
      setShowApplicationForm(false);
      setSelectedJob(null);

      // Reset form
      setApplicationData({
        name: '',
        email: '',
        phone: '',
        linkedIn: '',
        portfolio: '',
        experience: '',
        skills: '',
        coverLetter: '',
        availability: '',
        expectedSalary: '',
        resume: null
      });
    } else {
      alert('Error submitting application: ' + data.message);
    }
  } catch (error: any) {
    console.error('Error:', error);
    alert('Error submitting application. Please try again.');
  }
};

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setApplicationData(prev => ({ ...prev, resume: file }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5fafd] to-[#eef7ff] career-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden  bg-[rgb(182, 219, 232)]">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#82eefd] via-[#00b4d8] to-[#1e90ff] ">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
        </div>



        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Zap className="w-4 h-4 mr-2 text-yellow-300" />
              /* <span className="text-sm font-medium">We're Hiring Amazing Talent</span>
            </div>
          </div>  */}
           
           {/* <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight p-2">
            Join Our
            <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent animate-pulse">
              Amazing Team
            </span>
          </h1> */}
          
          <p className="text-xl md:text-xl my-16 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Build the future with us. We're looking for passionate individuals who want to make a difference 
            in the world of technology and innovation.
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight p-2 mb-10">
  Join Our
  <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent animate-pulse">
    Amazing Team
  </span>
</h1>

<p className="text-xl md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed my-8 ">
  Build the future with us. We're looking for passionate individuals who want to make a difference 
  in the world of technology and innovation.
</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-200 transition-colors duration-300">Remote-First Culture</h3>
              <p className="text-blue-200 text-sm leading-relaxed">Work from anywhere in the world with flexible hours and unlimited growth potential</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-200 transition-colors duration-300">Comprehensive Benefits</h3>
              <p className="text-blue-200 text-sm leading-relaxed">Health, dental, vision, wellness programs, and competitive compensation packages</p>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 shadow-lg hover:shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-200 transition-colors duration-300">Growth Opportunities</h3>
              <p className="text-blue-200 text-sm leading-relaxed">Continuous learning, mentorship programs, and clear career advancement paths</p>
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row gap-12 ml-12 justify-center ">
            <button 
              onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 mr-8 bg-white text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Open Positions
            </button>
            {/* <button 
              onClick={() => window.open('/why-join-us', '_blank')}
              className="px-12 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Why Join Us?
            </button> */}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center  " style={{width:"100%",justifyContent:"center"}}>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Your Applications Button */}
      <section className="py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={handleViewMyApplications}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
          >
            <Eye className="w-5 h-5 mr-2 inline" />
            View Your Applications
          </button>
        </div>
      </section>

      {/* My Applications Modal */}
      {showMyApplications && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Your Applications ({myApplications.length})
                </h2>
                <button
                  onClick={() => setShowMyApplications(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {myApplications.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">No applications found</h3>
                  <p className="text-gray-500">You haven't submitted any applications yet.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {myApplications.map((application) => (
                    <div key={application._id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{application.preferredRole}</h3>
                          <p className="text-gray-600 mb-2">Applied on: {new Date(application.createdAt).toLocaleDateString()}</p>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            application.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                            application.status === 'interview' ? 'bg-purple-100 text-purple-800' :
                            application.status === 'rejected' ? 'bg-red-100 text-red-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditApplication(application)}
                            className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                            title="Edit Application"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteApplication(application._id)}
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            title="Delete Application"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Experience:</strong> {application.experience}</p>
                          <p><strong>Availability:</strong> {application.availability}</p>
                        </div>
                        <div>
                          <p><strong>Expected Salary:</strong> {application.expectedSalary || 'Not specified'}</p>
                          <p><strong>Resume:</strong> {application.resumeFileName ? 'Uploaded' : 'Not uploaded'}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Edit Application Form Modal */}
      {showEditForm && editingApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Edit Application - {editingApplication.preferredRole}
                </h2>
                <button
                  onClick={() => setShowEditForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleUpdateApplication} className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationData.name}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    value={applicationData.linkedIn}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, linkedIn: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio URL
                  </label>
                  <input
                    type="url"
                    value={applicationData.portfolio}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, portfolio: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume (Leave empty to keep current)
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    required
                    value={applicationData.experience}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Salary
                  </label>
                  <input
                    type="text"
                    value={applicationData.expectedSalary}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, expectedSalary: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., $80,000 - $100,000"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills *
                </label>
                <textarea
                  rows={3}
                  required
                  value={applicationData.skills}
                  onChange={(e) => setApplicationData(prev => ({ ...prev, skills: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="List your key skills and technologies..."
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  rows={4}
                  required
                  value={applicationData.coverLetter}
                  onChange={(e) => setApplicationData(prev => ({ ...prev, coverLetter: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <select
                  required
                  value={applicationData.availability}
                  onChange={(e) => setApplicationData(prev => ({ ...prev, availability: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select availability</option>
                  <option value="immediate">Immediate</option>
                  <option value="2-weeks">2 weeks notice</option>
                  <option value="1-month">1 month</option>
                  <option value="2-months">2 months</option>
                  <option value="negotiable">Negotiable</option>
                </select>
              </div>

              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowEditForm(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Update Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Job Listings */}
       {/* Job Listings */}
      <section id="positions" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Now Hiring
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Open Positions ({filteredJobs.length})
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity and grow with us
            </p>
          </div>

          <div className="grid gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      {job.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{job.title}</h3>
                      <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">{job.description}</p>
                      <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Building className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-emerald-600 mb-4">{job.salary}</div>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No positions found</h3>
              <p className="text-gray-500 max-w-md mx-auto">Try adjusting your search criteria or check back later for new opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    {selectedJob.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-1" />
                        {selectedJob.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {selectedJob.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {selectedJob.type}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {selectedJob.experience}
                      </div>
                    </div>
                    <div className="text-xl font-semibold text-green-600 mt-2">{selectedJob.salary}</div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Description</h3>
                  <p className="text-gray-600 mb-6">{selectedJob.description}</p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Responsibilities</h3>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    {selectedJob.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <Zap className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">What We Offer</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Competitive salary and equity package</li>
                      <li>• Comprehensive health, dental, and vision insurance</li>
                      <li>• Flexible PTO and remote work options</li>
                      <li>• Professional development budget</li>
                      <li>• Modern equipment and tools</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => setShowApplicationForm(true)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Apply for {selectedJob.title}
                </h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <form onSubmit={handleApplicationSubmit} className="p-6">
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={applicationData.name}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={applicationData.email}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={applicationData.phone}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    value={applicationData.linkedIn}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, linkedIn: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio URL
                  </label>
                  <input
                    type="url"
                    value={applicationData.portfolio}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, portfolio: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Resume *
                  </label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    required
                    value={applicationData.experience}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, experience: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Salary
                  </label>
                  <input
                    type="text"
                    value={applicationData.expectedSalary}
                    onChange={(e) => setApplicationData(prev => ({ ...prev, expectedSalary: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., $80,000 - $100,000"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills *
                </label>
                <textarea
                  rows={3}
                  required
                  value={applicationData.skills}
                  onChange={(e) => setApplicationData(prev => ({ ...prev, skills: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="List your key skills and technologies..."
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  rows={4}
                  required
                  value={applicationData.coverLetter}
                  onChange={(e) => setApplicationData(prev => ({ ...prev, coverLetter: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us why you're interested in this position..."
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <select
                  required
                  value={applicationData.availability}
                  onChange={(e) => setApplicationData(prev => ({ ...prev, availability: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select availability</option>
                  <option value="immediate">Immediate</option>
                  <option value="2-weeks">2 weeks notice</option>
                  <option value="1-month">1 month</option>
                  <option value="2-months">2 months</option>
                  <option value="negotiable">Negotiable</option>
                </select>
              </div>

              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* <Footer /> */}
    </div>
  );
};

export default Career;