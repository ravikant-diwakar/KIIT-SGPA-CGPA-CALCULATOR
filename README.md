# KIIT SGPA/CGPA Calculator

A modern, responsive web application for KIIT University students to calculate their Semester Grade Point Average (SGPA) and Cumulative Grade Point Average (CGPA).

## Features

- 🌙 Dark/Light mode support
- 📱 Fully responsive design
- 💾 Local storage persistence
- 🧮 Accurate SGPA/CGPA calculation
- ✨ Modern UI with smooth interactions

## Grade System

| Grade | Score Range | Grade Points | Interpretation |
|-------|-------------|--------------|----------------|
| O     | 90-100     | 10           | Outstanding    |
| E     | 80-89      | 9            | Excellent      |
| A     | 70-79      | 8            | Very Good      |
| B     | 60-69      | 7            | Good           |
| C     | 50-59      | 6            | Average        |
| D     | 40-49      | 5            | Below Average  |
| F     | Below 40   | 0            | Fail           |

## Calculation Formula

### Credit Point
```
CREDIT POINT = CREDIT × GRADE POINT
```

### Credit Index (CI)
```
CI = ∑(CREDIT POINT) of all courses in a semester
```

### SGPA (Semester Grade Point Average)
```
SGPA = CI / ∑CREDITS (for a semester)
```

### CGPA (Cumulative Grade Point Average)
```
CGPA = [∑CI of all previous semesters] / [∑CREDITS of all semesters]
```

## Usage

1. Add semesters as needed
2. For each semester:
   - Enter subject names (auto-generated if left empty)
   - Specify credits for each subject
   - Select the grade obtained
3. Click "Calculate CGPA" to see results
4. Toggle dark/light mode using the theme button

## Development

### Install dependencies
```bash
npm install
```
### Run development server
```bash
npm run dev
```
### Build for production
```bash
npm run build
```

