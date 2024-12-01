import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Building2, Award, Users, Lightbulb } from 'lucide-react';
import 'react-vertical-timeline-component/style.min.css';

const timelineElements = [
  {
    id: 1,
    date: "2020",
    icon: Building2,
    title: "Company Founded",
    subtitle: "ARCHIFORM Established",
    description: "Founded with a vision to create sustainable and innovative architectural solutions."
  },
  {
    id: 2,
    date: "2021",
    icon: Award,
    title: "First Major Project",
    subtitle: "Azure Tower Complex",
    description: "Completed our first landmark project, setting new standards in sustainable architecture."
  },
  {
    id: 3,
    date: "2022",
    icon: Users,
    title: "Team Expansion",
    subtitle: "Global Talent Acquisition",
    description: "Expanded our team with top architects and designers from around the world."
  },
  {
    id: 4,
    date: "2023",
    icon: Lightbulb,
    title: "Innovation Hub",
    subtitle: "Research & Development Center",
    description: "Launched our innovation hub focused on sustainable building technologies."
  }
];

export default function ProjectTimeline() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the key milestones that have shaped our company's growth and success.
          </p>
        </motion.div>

        <VerticalTimeline>
          {timelineElements.map((element) => (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              icon={<element.icon className="h-6 w-6" />}
              iconStyle={{ background: 'rgb(17, 24, 39)', color: '#fff' }}
              contentStyle={{ 
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem'
              }}
              contentArrowStyle={{ borderRight: '7px solid #f3f4f6' }}
            >
              <h3 className="text-xl font-bold text-gray-900">{element.title}</h3>
              <h4 className="text-gray-600 font-medium">{element.subtitle}</h4>
              <p className="text-gray-500 mt-2">{element.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}