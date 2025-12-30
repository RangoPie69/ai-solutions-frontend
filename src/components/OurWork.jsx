import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion, AnimatePresence } from 'motion/react'
import {
  AlertTriangle,
  Lightbulb,
  ShieldAlert,
  BarChart3,
  X
} from 'lucide-react'

const TABS = ['Problem', 'Solution', 'Challenges', 'Results']

const OurWork = () => {
  const [selectedWork, setSelectedWork] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const [activeTab, setActiveTab] = useState('Problem')

  const workData = [
    {
      title: 'OptiFlow AI – Employee Virtual Assistant',
      client: 'TechNova Ltd',
      year: '2023',
      industry: 'Enterprise IT',

      gallery: [
        assets.customer1,
        assets.customer2,
        assets.customer3
      ],

      problem: [
        'HR and IT support response times averaged 2–4 hours',
        'Employees frequently interrupted workflows for assistance',
        'High volume of repetitive internal queries'
      ],

      solutionApproach: [
        'Built an NLP-based AI virtual assistant',
        'Integrated with HR, IT ticketing, and knowledge systems',
        'Enabled real-time intent detection and responses'
      ],

      challenges: [
        'Legacy system integration',
        'Maintaining high NLP accuracy',
        'Driving user adoption across departments'
      ],

      results: [
        { label: 'Productivity', value: '+35%' },
        { label: 'Response Time', value: '-90%' },
        { label: 'Support Load', value: '-25%' }
      ],

      tech: 'React, Node.js, NLP Engine',
      image: assets.work1
    }, // card 1 end

    {
      title: 'ProtoAI – Rapid Prototyping Solution',
      client: 'Innova Design Studio',
      year: '2024',
      industry: 'Product Design',

      gallery: [
        assets.work2_1,
        assets.work2_2,
        assets.work2_3
      ],

      problem: [
        'Design teams spent weeks creating initial prototypes',
        'High cost of iterative design changes',
        'Delayed feedback slowed innovation'
      ],

      solutionApproach: [
        'Built an AI-assisted prototyping platform',
        'Generated UI wireframes and workflows automatically',
        'Enabled affordable and rapid iteration cycles'
      ],

      challenges: [
        'Balancing automation with creative flexibility',
        'Ensuring usability across skill levels',
        'Managing performance for complex designs'
      ],

      results: [
        { label: 'Prototype Time', value: '-60%' },
        { label: 'Cost Reduction', value: '-45%' },
        { label: 'Design Speed', value: '+50%' }
      ],

      tech: 'React, AI Models, Figma API',
      image: assets.work2
    }, //card 2 end

    {
      title: 'SmartHR Assist – Digital Employee Experience',
      client: 'NorthStar Group',
      year: '2023',
      industry: 'Human Resources',

      gallery: [
        assets.work3_1,
        assets.work3_2,
        assets.work3_3
      ],

      problem: [
        'Employees struggled to access HR information quickly',
        'Manual HR processes reduced productivity',
        'Inconsistent communication across teams'
      ],

      solutionApproach: [
        'Implemented AI-driven HR self-service tools',
        'Automated onboarding and policy queries',
        'Centralised employee communication'
      ],

      challenges: [
        'Data privacy and compliance',
        'Change management within HR teams',
        'User training and adoption'
      ],

      results: [
        { label: 'HR Query Resolution', value: '+70%' },
        { label: 'Onboarding Time', value: '-50%' },
        { label: 'Employee Engagement', value: '+35%' }
      ],

      tech: 'AI Chatbot, Cloud Services, REST APIs',
      image: assets.work3
    }, //card 3 end

    {
      title: 'DevAssist AI – Engineering Productivity Tool',
      client: 'CodeWave Solutions',
      year: '2024',
      industry: 'Software Engineering',

      gallery: [
        assets.work4_1,
        assets.work4_2,
        assets.work4_3
      ],

      problem: [
        'Engineers lost time searching for documentation',
        'Knowledge silos slowed development',
        'Repeated questions across teams'
      ],

      solutionApproach: [
        'Created an AI-powered engineering assistant',
        'Provided contextual code and documentation support',
        'Integrated with internal developer platforms'
      ],

      challenges: [
        'Maintaining up-to-date technical knowledge',
        'Handling diverse codebases',
        'Ensuring response accuracy'
      ],

      results: [
        { label: 'Developer Efficiency', value: '+45%' },
        { label: 'Issue Resolution', value: '-35%' },
        { label: 'Knowledge Access', value: '+50%' }
      ],

      tech: 'AI Assistant, Node.js, Git Integrations',
      image: assets.work4
    },//card 4 end

    {
      title: 'EngageAI – Employee Feedback & Insights',
      client: 'PeopleFirst Ltd',
      year: '2023',
      industry: 'Corporate Services',

      gallery: [
        assets.work5_1,
        assets.work5_2,
        assets.work5_3
      ],

      problem: [
        'Low visibility into employee sentiment',
        'Manual surveys produced delayed insights',
        'Difficulty acting on feedback quickly'
      ],

      solutionApproach: [
        'Built an AI-based sentiment analysis platform',
        'Collected real-time employee feedback',
        'Provided actionable insights for managers'
      ],

      challenges: [
        'Ensuring anonymity and trust',
        'Interpreting unstructured feedback',
        'Aligning insights with business goals'
      ],

      results: [
        { label: 'Engagement Rate', value: '+30%' },
        { label: 'Insight Accuracy', value: '+40%' },
        { label: 'Response Time', value: '-50%' }
      ],

      tech: 'AI Analytics, Dashboard UI, Cloud AI',
      image: assets.work5
    }, //card 5 end

    {
      title: 'GlobalSupport AI – Scalable Virtual Support',
      client: 'Worldwide Enterprises',
      year: '2024',
      industry: 'Multinational Operations',

      gallery: [
        assets.work6_1,
        assets.work6_2,
        assets.work6_3
      ],

      problem: [
        'Inconsistent support experience across regions',
        'High cost of human support teams',
        'Limited availability outside business hours'
      ],

      solutionApproach: [
        'Deployed a multilingual AI virtual assistant',
        'Scaled support globally with minimal cost',
        'Ensured consistent employee experience worldwide'
      ],

      challenges: [
        'Language and cultural adaptation',
        'System scalability',
        'Maintaining consistent AI responses'
      ],

      results: [
        { label: 'Support Coverage', value: '24/7' },
        { label: 'Cost Reduction', value: '-40%' },
        { label: 'Global Reach', value: '+60%' }
      ],

      tech: 'AI NLP, Cloud Infrastructure, Multilingual Models',
      image: assets.work6
    } //card 6 end

  ]

  const renderTabContent = (work) => {
    switch (activeTab) {
      case 'Problem':
        return (
          <ul className="space-y-2 text-sm">
            {work.problem.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        )

      case 'Solution':
        return (
          <ul className="space-y-2 text-sm">
            {work.solutionApproach.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        )

      case 'Challenges':
        return (
          <ul className="space-y-2 text-sm">
            {work.challenges.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>
        )

      case 'Results':
        return (
          <div className="grid grid-cols-3 gap-4">
            {work.results.map((metric, i) => (
              <div
                key={i}
                className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center"
              >
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-xs opacity-70">{metric.label}</p>
              </div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  const getIcon = () => {
    switch (activeTab) {
      case 'Problem':
        return <AlertTriangle size={18} />
      case 'Solution':
        return <Lightbulb size={18} />
      case 'Challenges':
        return <ShieldAlert size={18} />
      case 'Results':
        return <BarChart3 size={18} />
      default:
        return null
    }
  }

  return (
    <section
      id="our-work"
      className="px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Works"
        desc="Real-world projects where AI-driven solutions delivered measurable business impact."
      />

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {workData.map((work, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedWork(work)
              setActiveTab('Problem')
            }}
            className="cursor-pointer bg-white dark:bg-gray-900 rounded-xl shadow hover:shadow-lg"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-44 object-cover rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="font-semibold">{work.title}</h3>
              <p className="text-sm opacity-70">{work.client}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SIDE DRAWER */}
      <AnimatePresence>
        {selectedWork && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white dark:bg-gray-900 z-50 p-6 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >

              {/* GALLERY */}
              {selectedWork.gallery && (
                <div className="mb-6">
                  <div className="grid grid-cols-3 gap-2">
                    {selectedWork.gallery.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt="Project screenshot"
                        className="h-20 w-full object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                        onClick={() => setPreviewImage(img)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold">{selectedWork.title}</h2>
                  <p className="text-xs opacity-70">
                    {selectedWork.client} • {selectedWork.year} •{' '}
                    {selectedWork.industry}
                  </p>
                </div>
                
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-xs rounded-full ${activeTab === tab
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'bg-gray-100 dark:bg-gray-800'
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3 font-semibold text-sm">
                  {getIcon()}
                  {activeTab}
                </div>

                {renderTabContent(selectedWork)}
              </div>

              <p className="text-xs opacity-60 mt-6">
                <strong>Technology:</strong> {selectedWork.tech}
              </p>
            </motion.div>
          </>
        )}

        {previewImage && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewImage(null)}
            />

            <motion.img
              src={previewImage}
              className="fixed z-50 top-1/2 left-1/2 max-h-[80vh] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </>
        )}

      </AnimatePresence>
    </section>
  )
}

export default OurWork
