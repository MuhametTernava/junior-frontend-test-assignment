import styled from "@emotion/styled";
import { colors } from "../../assets/variables";

export const AddCartEffect = styled.div`
  position: absolute;
  bottom: -30px;
  width: 100%;
  opacity: 0;
  transition: 0.15s;
`;

export const CardAddtoCart = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  font-weight: medium;
`;

export const BestSeller = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  padding: 4px 12px;
  background: ${colors.white};
  line-height: 1;
  z-index: 2;
`;
