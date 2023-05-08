import styled from "styled-components";

const RadioContainer = styled.div`
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
padding: 1rem;
background: #fff5f5;
display: flex;
align-items: center;
gap: 2rem;
font-size: 2.2rem;
color: #292929;
@media only screen and (max-width: 1100px) and (min-width: 870px) {
  font-size: 1.8rem;
}
@media only screen and (max-width: 870px) and (min-width: 400px) {
  font-size: 1.6rem;
}
@media only screen and (max-width: 400px) and (min-width: 250px) {
  font-size: 1.2rem
  gap:1rem;
}
`;

const Radio = (props) => {
  const { HtmlFor, id, name, text } = props;

  return (
    <>
      <RadioContainer>
        <input type='radio' id={id} name={name} />
        <label htmlFor={HtmlFor}>{text}</label>
      </RadioContainer>
    </>
  );
};

export default Radio;
