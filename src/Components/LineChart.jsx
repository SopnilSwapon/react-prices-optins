import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
  const mathMarks = [
    {"id": 1, "name": "John", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 90},
    {"id": 2, "name": "Emily", "math_marks": 78, "physics_marks": 80, "chemistry_marks": 85},
    {"id": 3, "name": "Michael", "math_marks": 92, "physics_marks": 88, "chemistry_marks": 92},
    {"id": 4, "name": "Sophia", "math_marks": 65, "physics_marks": 72, "chemistry_marks": 68},
    {"id": 5, "name": "Daniel", "math_marks": 70, "physics_marks": 65, "chemistry_marks": 75},
    {"id": 6, "name": "Emma", "math_marks": 88, "physics_marks": 82, "chemistry_marks": 85},
    {"id": 7, "name": "William", "math_marks": 75, "physics_marks": 78, "chemistry_marks": 80},
    {"id": 8, "name": "Olivia", "math_marks": 82, "physics_marks": 85, "chemistry_marks": 90},
    {"id": 9, "name": "James", "math_marks": 90, "physics_marks": 92, "chemistry_marks": 88},
    {"id": 10, "name": "Ava", "math_marks": 72, "physics_marks": 68, "chemistry_marks": 72}
  ]
  
      
    return (
        <div>
            <LChart width={900} height={500} data={mathMarks}>
            <XAxis dataKey={'name'}></XAxis>
             <Line stroke='black' dataKey={'physics_marks'}></Line>
            <Line type='monotone' dataKey='math_marks' stroke="#8884d8"></Line>
            <Line stroke='yellow' dataKey={'chemistry_marks'}></Line>
            <YAxis></YAxis>
            </LChart>
        </div>
    );
};

export default LineChart;