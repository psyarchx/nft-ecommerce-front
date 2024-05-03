import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Spinner = styled(FontAwesomeIcon)`
    font-size: 48px;
    animation: ${spin} 1s linear infinite;
`;

export const Message = styled.p`
    margin-top: 20px;
    color: white;
`;