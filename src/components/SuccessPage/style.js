import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CheckSign = styled(FontAwesomeIcon)`
    color: green;
    font-size: 100px;
`;

export const SuccessMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 200px auto;
`;

export const SuccessMessage = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

export const OpenSeasLink = styled.a`
    color: blue;
    text-decoration: underline;
    cursor: pointer;
`;
