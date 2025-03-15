import Link from "next/link";
import { FiArrowRight, FiCode, FiImage, FiMusic, FiDatabase, FiLayout } from "react-icons/fi";

export default function ServicesPage() {
  const services = [
    {
      id: "development",
      title: "Website & App Development",
      description: "Custom websites and applications built with modern technologies, focused on performance, accessibility, and user experience.",
      icon: <FiCode className="w-8 h-8" />,
      color: "purple",
      features: [
        "Responsive website design and development",
        "Web application development",
        "E-commerce solutions",
        "Content management systems",
        "Performance optimization",
        "Maintenance and support"
      ],
      cta: "Start Your Digital Project"
    },
    {
      id: "art",
      title: "Digital & Traditional Art",
      description: "Custom artwork for personal or commercial use, from digital illustrations to traditional paintings on canvas.",
      icon: <FiImage className="w-8 h-8" />,
      color: "blue",
      features: [
        "Digital illustrations",
        "Album cover art",
        "Character design",
        "Traditional paintings",
        "Mixed media artwork",
        "NFT creation and consultation"
      ],
      cta: "Commission Artwork"
    },
    {
      id: "music",
      title: "Music Production",
      description: "Professional music production services including beat making, mixing, and mastering for artists and commercial projects.",
      icon: <FiMusic className="w-8 h-8" />,
      color: "green",
      features: [
        "Beat production",
        "Mixing and mastering",
        "Sound design",
        "Vocal recording and editing",
        "Custom music for commercials or videos",
        "Artist development"
      ],
      cta: "Create Your Sound"
    },
    {
      id: "blockchain",
      title: "Blockchain Development",
      description: "Blockchain solutions including smart contract development, NFT projects, and decentralized applications.",
      icon: <FiDatabase className="w-8 h-8" />,
      color: "orange",
      features: [
        "Smart contract development",
        "NFT collection creation",
        "Decentralized application (dApp) development",
        "Blockchain integration",
        "Web3 consulting",
        "Token development"
      ],
      cta: "Explore Blockchain Solutions"
    },
    {
      id: "ux",
      title: "UI/UX Design",
      description: "User interface and experience design focused on creating intuitive, accessible, and visually appealing digital products.",
      icon: <FiLayout className="w-8 h-8" />,
      color: "pink",
      features: [
        "User interface design",
        "User experience research and design",
        "Wireframing and prototyping",
        "Design systems",
        "Usability testing",
        "Interaction design"
      ],
      cta: "Enhance Your User Experience"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: {[key: string]: {bg: string, text: string, darkBg: string, darkText: string}} = {
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        darkBg: "dark:bg-purple-900/30",
        darkText: "dark:text-purple-400"
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        darkBg: "dark:bg-blue-900/30",
        darkText: "dark:text-blue-400"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        darkBg: "dark:bg-green-900/30",
        darkText: "dark:text-green-400"
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        darkBg: "dark:bg-orange-900/30",
        darkText: "dark:text-orange-400"
      },
      pink: {
        bg: "bg-pink-100",
        text: "text-pink-600",
        darkBg: "dark:bg-pink-900/30",
        darkText: "dark:text-pink-400"
      }
    };
    
    return colorMap[color] || colorMap.purple;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Services</h1>
          <div className="w-20 h-1 bg-purple-600 mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            As a Creative Technologist, I offer a range of services that blend art, technology, and innovation.
          </p>
        </div>
        
        {/* Services List */}
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            
            return (
              <div 
                key={service.id} 
                id={service.id}
                className={`mb-16 p-8 rounded-xl ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className={`w-16 h-16 ${colorClasses.bg} ${colorClasses.darkBg} ${colorClasses.text} ${colorClasses.darkText} rounded-lg flex items-center justify-center mb-6`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                      {service.description}
                    </p>
                    <Link 
                      href="/contact" 
                      className={`inline-flex items-center gap-2 ${colorClasses.text} hover:underline font-medium`}
                    >
                      {service.cta} <FiArrowRight />
                    </Link>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`mt-1 ${colorClasses.text} ${colorClasses.darkText}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Process Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">My Working Process</h2>
          
          <div className="relative border-l-4 border-purple-200 dark:border-purple-900 ml-6 pl-8 pb-8">
            <div className="mb-12 relative">
              <div className="absolute -left-14 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <span>1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We begin with a consultation to understand your goals, requirements, and vision for the project.
              </p>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-14 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <span>2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Proposal</h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'll provide a detailed proposal including scope, timeline, and pricing based on your specific needs.
              </p>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-14 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <span>3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Creation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The development or creation phase begins, with regular updates and opportunities for feedback.
              </p>
            </div>
            
            <div className="mb-12 relative">
              <div className="absolute -left-14 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <span>4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Refinement</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Based on your feedback, I'll refine and perfect the work until it meets your expectations.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -left-14 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <span>5</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Final delivery of the project, along with any necessary documentation or training.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how I can help bring your vision to life. Reach out for a free consultation.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 bg-white text-purple-700 rounded-md font-medium hover:bg-purple-100 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 