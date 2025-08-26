import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;

  border-collapse: collapse;
  border: 3px solid #e8edff;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  tr {
    border-top: 1px solid #e8edff;

    :first-of-type {
      border-top: none;
    }

    :nth-of-type(2n) {
      background-color: #e8edff;
    }
  }

  th {
    width: 200px;
    height: 40px;
    padding: 0;

    background-color: teal;

    border-right: 1px solid #e8edff;
    border-left: 1px solid #e8edff;
    border-bottom: 1px solid #e8edff;

    color: white;

    font-weight: 700;
    font-size: 14px;
    line-height: 1.19;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }

  td {
    width: 200px;
    height: 40px;
    padding: 0;

    color: gray;

    text-align: center;

    border-right: 1px solid #e8edff;

    :last-of-type {
      border-right: none;
    }
  }
`;
