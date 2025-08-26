import styled from '@emotion/styled';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  height: 80px;
  padding: 10px;
  margin-bottom: 20px;

  border-radius: 5px;

  background-color: white;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  :nth-of-type(5n) {
    margin-bottom: 0;
  }

  .status {
    display: flex;
    flex: 0 0 20px;
    width: 20px;
    height: 20px;

    margin-right: 10px;

    border-radius: 50%;

    &.online {
      background-color: green;
    }

    &.offline {
      background-color: red;
    }
  }

  .avatar {
    width: 70px;
    height: 70px;
    margin-right: 10px;
  }

  .name {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;

    color: black;

    font-weight: 600;
    font-size: 20px;
    line-height: 1.19;
    letter-spacing: 0.03em;
  }
`;
