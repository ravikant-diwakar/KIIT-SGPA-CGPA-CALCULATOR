import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GradeTable from "./components/GradeTable";
import SGPACalculator from "./components/SGPACalculator";
import CGPACalculator from "./components/CGPACalculator";
import HowToUse from "./components/HowToUse";
import Button from "./components/common/Button";

function App() {
  const [activeTab, setActiveTab] = useState("sgpa");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!localStorage.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-4 px-4 lg:py-8 lg:px-8 xl:py-16 xl:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center mb-6 md:mb-8 space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              KIIT SGPA/CGPA Calculator
            </h1>
            <button className="flex items-center gap-1 px-1.5 py-0.5 text-[10px] md:text-xs rounded-full border border-gray-600 text-gray-300 bg-[#0c0c0c] hover:bg-[#2a2a2a] transition duration-200 whitespace-nowrap">
              Calculate your Semester GPA and Cumulative GPA easily
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="mb-6 md:mb-8 overflow-x-auto">
            <GradeTable />
          </div>

          <div id="calculator" className="mb-6">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4">
              <Button
                variant={activeTab === "sgpa" ? "primary" : "secondary"}
                onClick={() => setActiveTab("sgpa")}
                className="flex-1 md:flex-none"
              >
                Calculate SGPA
              </Button>
              <Button
                variant={activeTab === "cgpa" ? "primary" : "secondary"}
                onClick={() => setActiveTab("cgpa")}
                className="flex-1 md:flex-none"
              >
                Calculate CGPA
              </Button>
            </div>

            {activeTab === "sgpa" ? <SGPACalculator /> : <CGPACalculator />}
          </div>

          <HowToUse />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
