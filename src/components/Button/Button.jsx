import { ButtonEl, Div } from './Button.styled';

export function Button({ text, handleClick }) {
  return (
    <Div>
      <ButtonEl type="button" onClick={handleClick}>
        {text}
      </ButtonEl>
    </Div>
  );
}
