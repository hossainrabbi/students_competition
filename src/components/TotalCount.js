import React from 'react';
import {
  SelectStudentList,
  TotalCountContainer,
} from '../styles/Element.style';
import { Button } from '../styles/GlobalStyles';

export default function TotalCount({ studentItems, removeStudent }) {
  let amount = 0;

  for (let i = 0; i < studentItems.length; i++) {
    amount += studentItems[i]?.amount;
  }

  return (
    <TotalCountContainer style={{ position: 'sticky' }}>
      <h3>
        Student Added: <span>{studentItems.length}</span>
      </h3>
      <ul>
        {studentItems &&
          studentItems.map(({ name, image, id }) => (
            <SelectStudentList key={id}>
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <Button type="button" onClick={() => removeStudent(id)}>
                X
              </Button>
            </SelectStudentList>
          ))}
      </ul>
      <h3>
        Total Cost: <span>${amount}</span>
      </h3>
    </TotalCountContainer>
  );
}
