import React from 'react';
import { FaCalculator, FaBook, FaGraduationCap, FaChartLine } from 'react-icons/fa';

const HowToUse = () => {
  const steps = [
    {
      icon: <FaCalculator />,
      title: "Choose Your Calculator",
      description: "Select between SGPA Calculator for single semester or CGPA Calculator for overall performance"
    },
    {
      icon: <FaBook />,
      title: "Enter Subject Details",
      description: "Add your subjects, their respective credits, and the grades you received"
    },
    {
      icon: <FaGraduationCap />,
      title: "Input Grades",
      description: "Select the grade (O, E, A, B, C, D, F) for each subject based on your performance"
    },
    {
      icon: <FaChartLine />,
      title: "Get Your Results",
      description: "Click calculate to instantly see your SGPA or CGPA results"
    }
  ];

  return (
    <section id="how-to-use" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            How to Use KIIT Calculator
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Follow these simple steps to calculate your academic performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="text-primary dark:text-primary-dark text-3xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Pro Tips
          </h3>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              Keep your grade sheet handy before starting the calculation
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              Double-check the credits for each subject as they vary
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              Use the grade table above as a reference for grade points
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">•</span>
              Your progress is automatically saved in the browser
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HowToUse;
