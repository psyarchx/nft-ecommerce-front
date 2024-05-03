import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

const LoadingOverlay = ({ message }) => {
    return (
        <S.Overlay>
            <S.Spinner icon={faSpinner} />
            <S.Message>{message}</S.Message>
        </S.Overlay>
    );
};

export default LoadingOverlay;