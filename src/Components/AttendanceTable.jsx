import React from 'react'

function AttendanceTable({attendanceList}) {
  return (
    <div>
         <table className="w-full border">
      <thead>
        <tr>
          <th className="border p-2">Name</th>
          <th className="border p-2">Time</th>
        </tr>
      </thead>
      <tbody>
        {attendanceList.map((entry) => (
          <tr key={entry.id}>
            <td className="border p-2">{entry.name}</td>
            <td className="border p-2">{entry.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default AttendanceTable
