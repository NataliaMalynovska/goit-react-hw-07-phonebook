import styled from 'styled-components';

export const ContactItem = styled.li`
  padding: 8px;
  display: flex;
  align-items: baseline;
  justify-content: space-between
`;
export const ContactData = styled.p`
  font-weight: 400;
  font-size: 20px;

`;
export const ButtonDelete = styled.button`
  padding: 8px;
  width: 140px;
  height: 40px;
  font-weight: 400;
  font-size: 20px;
  background-color: Lavender;
  border: 1px solid MidnightBlue;
  border-radius: 10px;
  box-shadow: 15px 16px 16px -5px rgba(0, 0, 0, 0.6);

  &:hover {
    transform: scale(1.1);
    transition: 0.6s;
    cursor: pointer;
    background-color: Salmon;
  }
`;
