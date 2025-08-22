import styled from '@emotion/styled';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;

  margin-bottom: 50px;

  background-color: white;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
  padding: 0;
  margin: 0;

  list-style-type: none;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 75px;
  height: 100%;

  background-color: ${({ bg }) => bg};

  .label {
    margin-bottom: 6px;

    font-weight: 400;
    font-size: 16px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;

    color: grey;
  }

  .percentage {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;

    color: black;
  }
`;

export { Container, StatsList, StatsItem };
