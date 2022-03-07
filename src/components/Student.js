import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import {
  StudentContainer,
  StudentDetails,
  StudentImage,
} from '../styles/Element.style';
import { Button } from '../styles/GlobalStyles';

export default function Student({
  name,
  age,
  study,
  amount,
  image,
  id,
  addedStudent,
  removeStudent,
}) {
  const [addStudent, setAddStudent] = useState(false);

  const handleButtonClick = () => {
    addStudent ? removeStudent(id) : addedStudent(id);
    setAddStudent(!addStudent);
  };

  return (
    <StudentContainer>
      <StudentImage>
        <img src={image} alt={name} />
      </StudentImage>
      <StudentDetails>
        <li>
          Name: <span>{name}</span>
        </li>
        <li>
          Age: <span>{age}</span>
        </li>
        <li>
          Class: <span>{study}</span>
        </li>
        <li>
          Amount: <span>{amount}</span>
        </li>
      </StudentDetails>

      <Button
        // disabled={disableBtn}
        marginTop={8}
        onClick={handleButtonClick}
      >
        <FaShoppingCart /> {addStudent ? 'Remove Student' : 'Select Student'}
      </Button>
    </StudentContainer>
  );
}
