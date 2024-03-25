import styled from "@emotion/styled";
import { fonts } from "../variables";

export const Flex = styled.div`
  position: relative;
  display: flex;
`;

export const MainTitle = styled.h1`
  font-size: 32px;
  font-family: ${fonts.fontBold};
  
  &.font-regular {
    font-family: ${fonts.fontRegular}
  }

  @media (max-width: 567px) {
    font-size: 28px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-family: ${fonts.fontBold};

  &.font-regular {
    font-family: ${fonts.fontRegular}
  }

  @media (max-width: 567px) {
    font-size: 25px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 22px;
  font-family: ${fonts.fontBold};

  @media (max-width: 567px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
`;

export const Price = styled.span`
  font-size: 29px;
  position: relative;
  display: inline-block;
  font-weight: light;

  @media (max-width: 567px) {
    font-size: 26px;
  }
`;

export const AddCart = styled.button`
  padding: 5px 35px;
  background: black;
  color: white;
  outline: none;
  border: none;
  text-transform: uppercase;

  @media (max-width: 567px) {
    font-size: 18px;
  }

  font-size: ${(props) => (props.primary ? "23px" : "18px")};
`;
