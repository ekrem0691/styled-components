import styled from "styled-components";

const Button = styled.button`
  color: hotpink;
  color: ${(props) => (props.primary ? "white" : "blue")};
  background-color: ${({ primary }) => (primary ? "purple" : "white")};
  /* background-color: ${(props) =>
    props.primary
      ? "purple"
      : "white"}; "YUKARDAKİ İLE AYNI İŞLEVİ GÖRÜYOR yukarıda Desctruc yaptık.." */
  cursor: pointer;
  padding: 0.7rem 1.2rem;
  border: 2px solid purple;
  border-radius: 5px;
  font-family: "tahoma";
  &:hover {
    transform: scale(0.9);
  }
`;

export const TomatoButton = styled(Button)`
  color: ${({ primary }) => (primary ? "white" : "tomato")};
  background-color: ${({ primary }) => (primary ? "tomato" : "white")};
  border: 2px solid tomato;
`;

export default Button;
