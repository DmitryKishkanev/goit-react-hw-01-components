import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 20px 0 0;
  /* margin-top: 20px; */
  margin-bottom: 50px;

  background-color: white;
  border-radius: 5px;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 163px;
    margin-bottom: 30px;

    background-color: gray;
    border-radius: 50%;

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  .name {
    margin-top: 0;
    margin-bottom: 10px;

    font-weight: 700;
    font-size: 20px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;

    color: black;
  }

  .tag {
    margin-top: 0;
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;

    color: grey;
  }

  .location {
    margin-top: 0;
    margin-bottom: 30px;

    font-weight: 400;
    font-size: 18px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;

    color: grey;
  }
`;

const Stats = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;

    background-color: aliceblue;
    border-top: 1px solid lightgray;
    border-right: 1px solid lightgray;

    :nth-of-type(3n) {
      border-right: none;
    }

    .label {
      font-weight: 400;
      font-size: 16px;
      line-height: 1.19;
      text-align: center;
      letter-spacing: 0.03em;

      color: grey;

      margin-bottom: 3px;
    }

    .quantity {
      font-weight: 600;
      font-size: 18px;
      line-height: 1.19;
      text-align: center;
      letter-spacing: 0.03em;

      color: black;
    }
  }
`;

export { Container, Description, Stats };
