import styled from 'styled-components';

export const CompetitionContainer = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 10px;
`;

export const StudentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

export const StudentContainer = styled.article`
  background: linear-gradient(
    90deg,
    rgba(0, 34, 36, 0.4736842105263158) 0%,
    rgba(12, 127, 237, 0.5263157894736843) 50%
  );
  padding: 10px;
`;

export const StudentImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const StudentDetails = styled.ul`
  li {
    margin-bottom: 5px;
    font-weight: 600;

    span {
      font-weight: 500;
    }
  }
`;

export const TotalCountContainer = styled.section`
  h3 {
    font-size: #444444;
    span {
      color: #222222;
    }
  }
`;

export const SelectStudentList = styled.li`
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
  align-items: center;
  background-color: #ddd;
  margin-bottom: 5px;

  img {
    height: 50px;
    width: 100%;
  }

  h3 {
    margin: 0 5px;
  }
`;
