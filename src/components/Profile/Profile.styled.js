import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 350px;
  height: 100%;
  margin: 50px auto;
  padding: 30px 0 0;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 2px 15px 2px rgba(120, 120, 120, 1);
`;
export const Avatar = styled.img`
  width: 175px;
  margin-bottom: 30px;
  background-color: #ebdcb2;
  border-radius: 50%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Username = styled.p`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 600;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #a9a9a9;
`;

export const Location = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #a9a9a9;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e8e8e8;
  background-color: #c9a66b;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0px;
  gap: 10px;

  padding: 20px 15px;
  border: 1px solid #e8e8e8;
`;

export const Label = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: black;
`;

export const Quantity = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
`;
