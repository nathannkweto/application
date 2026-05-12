import React from 'react';
import '../index.css';

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <div className="student-card-header">
        <h2>{student.firstName} {student.lastName}</h2>
        <h3>{student.studentId}</h3>
      </div>
      <div className="student-card-body">
        <div className="row">
          <span className="label">Email:</span>
          <span className="value">{student.email}</span>
        </div>
        <div className="row">
          <span className="label">Phone:</span>
          <span className="value">{student.phone}</span>
        </div>
        <div className="row">
          <span className="label">Course:</span>
          <span className="value">{student.program}</span>
        </div>
        <div className="row">
          <span className="label">Intake:</span>
          <span className="value">{student.intake}</span>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;