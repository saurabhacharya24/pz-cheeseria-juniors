import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;

  button {
    width: 60px;
    margin-left: auto;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  img {
    max-height: 250px;
    object-fit: cover;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;

    p {
      text-align: justify;
    }
  }
`;
