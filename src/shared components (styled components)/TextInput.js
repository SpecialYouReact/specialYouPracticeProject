import styled from "styled-components";

const TextInput = (props) => {
  const { labelText, placeholder, type, height, lineHeight } = props;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
    height: ${props.height};
    @media only screen and (max-width: 1200px) {
      height: 8rem;
    }
    @media only screen and (max-width: 900px) {
      height: 7rem;
    }

    & label {
      font-weight: 500;
      height: 30%;
      font-size: 2rem;
      line-height: ${props.lineHeight};
      @media only screen and (max-width: 1000px) {
        font-size: 1.6rem;
      }
      @media only screen and (max-width: 850px) {
        font-size: 1.4rem;
      }
      @media only screen and (max-width: 450px) {
        font-size: 1.6rem;
      }
      @media only screen and (max-width: 300px) {
        font-size: 1.4rem;
      }
    }
    & input {
      padding: 1rem;
      border: 1px solid grey;
      border-radius: 10rem;
      height: 70%;
    }
  `;

  return (
    <>
      <Container>
        <label htmlFor="name">{labelText}</label>
        <input
          type={type}
          id="name"
          name="person name"
          placeholder={placeholder}
        />
      </Container>
    </>
  );
};

export default TextInput;
