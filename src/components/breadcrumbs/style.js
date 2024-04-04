import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  color: #333;
  padding: 20px 20px;
  border-bottom: 1px solid #ccc;
`;

export const HomeIcon = styled(FontAwesomeIcon)`
  color: black;
  margin-right: 8px;
`;

export const HomeWrapper = styled.div`
  cursor: pointer;
`;

export const Separator = styled.span`
  margin: 0 4px;
`;
