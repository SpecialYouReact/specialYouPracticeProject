import styled from 'styled-components';

const CheckBoxContainer = styled.div`
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
@media only screen and (max-width: 870px) {
  font-size: 1.6rem;
}
`;

const CheckBox = (props) => {
  const { HtmlFor, id, name, text } = props;

 

  return (
    <>
    <CheckBoxContainer>
      <input type='checkbox' id={id} name={name} />
      <label htmlFor={HtmlFor}>{text}</label>
    </CheckBoxContainer>
    </>
  );
};

export default CheckBox;

/* this input tag doesn't work and below also */
/* input {
      background-color: #e95850;
      color: white;
    } */
/* label::input {
      background-color: #e95850;
      color: white;
    } */
