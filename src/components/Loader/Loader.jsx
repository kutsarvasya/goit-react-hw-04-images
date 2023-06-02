import { Audio } from 'react-loader-spinner';
import { Div } from './Loader.styled';

export function Loader() {
  return (
    <Div>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </Div>
  );
}
