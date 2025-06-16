import React, { useState } from "react";
import AttendanceForm from "./Components/AttendanceForm";
import AttendanceTable from "./Components/AttendanceTable";

function App() {
  const [attendanceList, setAttendanceList] = useState([]);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Gym Attendance Tracker</h1>
      <AttendanceForm attendanceList={attendanceList} setAttendanceList={setAttendanceList} />
      <AttendanceTable attendanceList={attendanceList} />
    </div>
  );
}

export default App;
