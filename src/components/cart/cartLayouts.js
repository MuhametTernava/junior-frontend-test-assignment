import styled from "@emotion/styled";
import { colors } from "../../assets/variables";


export const CartContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  cursor: pointer;

  > img {
    height: 100%;
    object-fit: contain;
  }
`;

export const CardList = styled.div`
  width: 350px;
  max-height: 400px;
  overflow-y: auto;
  border: 1px solid #656565;
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  z-index: 222;
  background: ${colors.white};
  opacity: 0;
  height: 1px;
  padding: 15px;

  &.active {
    height: initial;
    opacity: 1;
  }
`;

export const ClearButton = styled.p`
  width: 100%;
  padding: 6px 12px;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid ${colors.black};
  color: ${colors.black};
  font-weight: bold;
`;

export const ProductCartTitle = styled.h5`
  font-size: 15px;
  padding-bottom: 10px;
`;

export const ProductCartPrice = styled.p`
  font-size: 18px;
`;

export const CloseButton = styled.span`
  line-height: 1;
  font-weight: bold;
  font-size: 16px;
`;

export const CartIcon = styled.div`
  display: flex;
  position: relative;
`
export const CardItemsCount = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  right: 0;
  width: 15px;
  height: 15px;
  color: ${colors.white};
  background: ${colors.black};
  z-index: 2;
  justify-content: center;
  align-items: center;

  p {
    font-size: 14px;
  }
`