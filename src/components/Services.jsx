import React, { useState } from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import ServiceModal from './ServiceModal'
import { motion } from 'motion/react'

const Services = () => {

    const servicesData = [
                {
                    title: 'AI Virtual Assistant',
                    description: 'Automates support tasks and answers employee questions.',
                    icon: assets.ads_icon,
                    image: assets.ai_virtual_banner,
                    features: [
                    'Natural AI conversation',
                    'Automated workflows',
                    'Multi-platform access',
                    'Real-time query resolution',
                    'Secure authentication'
                    ],
                    benefits: [
                    'Faster response times',
                    'Reduced support costs',
                    'Improved employee experience',
                    'Lower IT workload'
                    ],
                    pricing: [
                    { plan: 'Starter', price: '£199/month', details: 'Basic functions + up to 50 users' },
                    { plan: 'Professional', price: '£499/month', details: 'Full automation + analytics + up to 250 users' },
                    { plan: 'Enterprise', price: 'Custom Quote', details: 'Unlimited users + integration + dedicated support' }
                    ],
                    targetUsers: [
                    'Small to large organisations',
                    'Remote or hybrid teams',
                    'High support volume environments'
                    ],
                    customers: [
                        {
                            name: 'TechNova Ltd',
                            image: assets.customer1
                        },
                        {
                            name: 'CloudEdge Solutions',
                            image: assets.customer2

                            
                        },
                        {
                            name: 'DataFlow Inc',
                            image: assets.customer3
                        },
                        {
                            name: 'InnovaTech Systems',
                            image: assets.customer4
                        },
                        {
                            name: 'NextWave Digital',
                            image: assets.customer5

                        },
                        {
                            name: 'BrightCore Solutions',
                            image: assets.customer6
                        },
                        {
                            name: 'NovaPoint Technologies',
                            image: assets.customer7
                        }
                        ],

                    reviews: [
                    {
                        company: 'TechNova Ltd',
                        reviewer: 'CTO',
                        rating: 5,
                        comment: 'Using the AI Virtual Assistant has made a big difference for us. It now handles most of the basic questions on its own, which has greatly reduced the amount of support requests we receive.Our team can focus on more important tasks, and our customers are getting faster responses. Overall, it has really improved the way we work.'
                    },
                    {
                        company: 'CloudEdge Solutions',
                        reviewer: 'Operations Manager',
                        rating: 4,
                        comment: 'The system was quick and easy to set up, and it started working almost immediately. Since deployment, it has been very reliable, with consistent performance and no major issues. We feel confident using it in our day-to-day operations.'
                    }, 
                    {
                        company: 'InnovaTech Systems',
                        reviewer: 'IT Manager',
                        rating: 5,
                        comment: 'The AI Virtual Assistant has significantly improved our internal support process. It handles routine questions efficiently, which has reduced response times and allowed our IT team to focus on more critical issues.'
                    },
                    {
                        company: 'NextWave Digital',
                        reviewer: 'Head of Operations',
                        rating: 4,
                        comment: 'Deployment was straightforward and required minimal setup. The system has been stable since launch, and we have seen noticeable improvements in productivity across our teams.'
                    },
                    
                    ]

                },
                {
                    title: 'Predictive Analytics Engine',
                    description: 'Predict digital issues before they disrupt productivity.',
                    icon: assets.marketing_icon,
                    image: assets.ai_virtual_banner,
                    features: [
                    'Predictive alerts',
                    'Live dashboards',
                    'Trend pattern learning',
                    'Performance insights'
                    ],
                    benefits: [
                    'Less downtime',
                    'Fewer unexpected issues',
                    'Higher productivity',
                    'Better decision-making'
                    ],
                    pricing: [
                    { plan: 'Starter', price: '£199/month', details: 'Basic analytics + 1 dashboard' },
                    { plan: 'Professional', price: '£499/month', details: 'Advanced analytics + risk alerts + 5 dashboards' },
                    { plan: 'Enterprise', price: 'Custom Quote', details: 'Unlimited dashboards + full reporting + integration' }
                    ],
                    targetUsers: [
                    'Data-heavy organisations',
                    'Critical system operations',
                    'Enterprises with digital workflows'
                    ]
                },
                {
                    title: 'Rapid AI Prototyping Tool',
                    description: 'Turn ideas into functional prototypes quickly and cost-effectively.',
                    icon: assets.marketing_icon,
                    features: [
                    'Drag-and-drop builder',
                    'Smart templates',
                    'Instant preview',
                    'No coding required'
                    ],
                    benefits: [
                    'Faster innovation',
                    'Lower development cost',
                    'Easy experimentation',
                    'Better idea validation'
                    ],
                    pricing: [
                    { plan: 'Single Prototype', price: '£499', details: 'One working prototype' },
                    { plan: 'Prototype Pack (3)', price: '£1,199', details: 'Three prototypes + priority build' },
                    { plan: 'Enterprise Prototyping', price: 'Custom Quote', details: 'Unlimited prototypes + dedicated engineer' }
                    ],
                    targetUsers: [
                    'Startups',
                    'Innovation teams',
                    'Product designers and engineers'
                    ]
                },
                {
                    title: 'AI Integration Suite',
                    description: 'Add AI capabilities to your existing systems without replacement.',
                    icon: assets.content_icon,
                    features: [
                    'API-based integration',
                    'Multi-platform linking',
                    'Cloud or on-premise support',
                    'Cross-system data sync'
                    ],
                    benefits: [
                    'Smooth AI adoption',
                    'Reduced transition cost',
                    'Improved system utilisation',
                    'Faster automation'
                    ],
                    pricing: [
                    { plan: 'Starter', price: '£199/month', details: 'API basics + 1 system link' },
                    { plan: 'Professional', price: '£499/month', details: 'Advanced API + 5 system links + priority support' },
                    { plan: 'Enterprise', price: 'Custom Quote', details: 'Unlimited connections + custom integration' }
                    ],
                    targetUsers: [
                    'Organisations modernising legacy systems',
                    'Companies wanting AI without replacing software'
                    ]
                },
                {
                    title: 'Employee Experience Platform',
                    description: 'Improve digital interactions and employee satisfaction.',
                    icon: assets.social_icon,
                    features: [
                    'Experience scoring',
                    'Issue tracking',
                    'UX analytics',
                    'Improvement workflow'
                    ],
                    benefits: [
                    'Better job satisfaction',
                    'Higher productivity',
                    'Reduced digital frustration',
                    'Clear improvement roadmap'
                    ],
                    pricing: [
                    { plan: 'Starter', price: '£199/month', details: 'Experience scoring + basic analytics' },
                    { plan: 'Professional', price: '£499/month', details: 'Advanced reporting + improvement planning' },
                    { plan: 'Enterprise', price: 'Custom Quote', details: 'Full experience suite + automation' }
                    ],
                    targetUsers: [
                    'Large enterprises',
                    'Remote or hybrid teams',
                    'Companies focusing on digital wellbeing'
                    ]
                },
                {
                    title: 'AI Workflow Automation',
                    description: 'Automate manual tasks and accelerate business processes.',
                    icon: assets.ads_icon,
                    features: [
                    'Automated task routing',
                    'Smart approvals',
                    'Workflow templates',
                    'Data-driven actions'
                    ],
                    benefits: [
                    'Faster delivery',
                    'Reduced errors',
                    'Lower labour costs',
                    'Improved consistency'
                    ],
                    pricing: [
                    { plan: 'Starter', price: '£199/month', details: 'Basic workflows + up to 3 automations' },
                    { plan: 'Professional', price: '£499/month', details: 'Advanced workflows + analytics + up to 10 automations' },
                    { plan: 'Enterprise', price: 'Custom Quote', details: 'Unlimited workflows + custom automation design' }
                    ],
                    targetUsers: [
                    'Companies ready to automate operations',
                    'Teams handling repetitive processes',
                    'Enterprises scaling productivity'
                    ]
                }
                ];


    const [activeService, setActiveService] = useState(null)

    

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    
    id='services' className='relative flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70
        -z-1 dark:hidden'/>
        
        <Title title='How can we help?'  desc='AI solutions that make work faster, smarter, and easier.'/>

        <div className="flex flex-col md:grid grid-cols-2">
            {servicesData.map((service, index) => (
                <ServiceCard
                key={index}
                service={service}
                index={index}
                onClick={() => setActiveService(service)}
                />
            ))}
        </div>

        <ServiceModal
            service={activeService}
            onClose={() => setActiveService(null)}
        />

    </motion.div>
  )
}

export default Services
