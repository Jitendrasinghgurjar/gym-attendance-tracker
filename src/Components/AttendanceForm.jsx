import React, {useState} from 'react'

function AttendanceForm({attendanceList, setAttendanceList}) {
      const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      name,
      time,
      id: Date.now(),
    };
    setAttendanceList([...attendanceList, newEntry]);
    setName("");
    setTime("");
  };
  return (
      <form onSubmit={handleSubmit} className="mb-4">
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2 mr-2" />
      <input value={time} onChange={(e) => setTime(e.target.value)} placeholder="Time" className="border p-2 mr-2" />
      <button className="bg-blue-500 text-white px-4 py-2">Add</button>
    </form>
  )
}

export default AttendanceForm
