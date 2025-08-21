import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 70px;
    height: 70px;
  }
`;

export { Container, Description };
