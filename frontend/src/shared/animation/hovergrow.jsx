import { css } from 'styled-components';

export const hoverGrow = css`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1)
  }
`;