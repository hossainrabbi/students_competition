import React, { useState } from 'react';
import students from '../data/students';
import {
  CompetitionContainer,
  StudentsContainer,
} from '../styles/Element.style';
import Student from './Student';
import TotalCount from './TotalCount';

export default function Competition() {
  const [studentItems, setStudentItems] = useState([]);

  const addedStudent = (id) => {
    const cartStudent = students.find((student) => student.id === id);

    setStudentItems((prevStudent) => [...prevStudent, cartStudent]);
  };

  const removeStudent = (id) => {
    setStudentItems(studentItems.filter((student) => student.id !== id));
  };

  return (
    <CompetitionContainer>
      <StudentsContainer>
        {students.map((student) => {
          return (
            <Student
              {...student}
              addedStudent={addedStudent}
              removeStudent={removeStudent}
              key={student.id}
            />
          );
        })}
      </StudentsContainer>
      <TotalCount studentItems={studentItems} removeStudent={removeStudent} />
    </CompetitionContainer>
  );
}
