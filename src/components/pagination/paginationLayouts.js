import styled from "@emotion/styled";
import { colors } from "../../assets/variables";

export const PaginateNumber = styled.div`
  display: inline-block;
  position: relative;
  padding: 5px;
  margin: 0 5px;
  line-height: 1;
  cursor: pointer;
  font-size: 18px;
  user-select: none;
  color: ${colors.grey};

  &:hover {
    span,
    button {
      text-decoration: underline;
    }
  }

  span {
    display: inline-block;
    position: relative;
    font-weight: bold;
  }

  &.active {
    span {
      color: ${colors.black};
    }
  }
`;

export const PrevNext = styled.button`
  outline: none;
  border: none;
  background: none;
  padding: 0;
`;
