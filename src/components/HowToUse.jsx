import React from "react";
import {
  FaCalculator,
  FaBook,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";

const HowToUse = () => {
  const steps = [
    {
      icon: <FaCalculator />,
      title: "Choose Your Calculator",
      description:
        "Select between SGPA Calculator for single semester or CGPA Calculator for overall performance",
    },
    {
      icon: <FaBook />,
      title: "Enter Subject Details",
      description:
        "Add your subjects, their respective credits, and the grades you received",
    },
    {
      icon: <FaGraduationCap />,
      title: "Input Grades",
      description:
        "Select the grade (O, E, A, B, C, D, F) for each subject based on your performance",
    },
    {
      icon: <FaChartLine />,
      title: "Get Your Results",
      description: "Click calculate to instantly see your SGPA or CGPA results",
    },
  ];

  return (
    <section id="how-to-use" className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
          <div className="inline-block bg-black border-l-4 border-white rounded-md shadow-lg p-5 sm:p-3 backdrop-blur-md">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-10 after:h-0.5 after:bg-white">
              How to Use KIIT Calculator
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">
              Follow these simple steps to calculate your academic performance
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="w-full rounded-xl p-6 sm:p-6 hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: "linear-gradient(to right, #000000, #181A20)",
                border: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-white text-3xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-xl p-6"
          style={{
            background: "linear-gradient(to right, #000000, #181A20)",
            border: "0.5px solid rgba(255,255,255,0.08)",
          }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Pro Tips</h3>
          <ul className="space-y-3 text-gray-300">
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
};

export default HowToUse;