import styled from "styled-components";

const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 2px;
  height: 22px;
  vertical-align: middle;
  background-color: ${(props) => props.theme.palette.BlueGray50};
  transition: background-color 300ms;
  box-sizing: border-box;
  outline: none;

  &:hover {
    background-color: ${(props) => props.theme.palette.BlueGray100};
  }

  &:focus {
    background-color: ${(props) => props.theme.palette.BlueGray100};
  }

  span {
    ${(props) => props.theme.typography.Tags};
    color: ${(props) => props.theme.palette.BlueGray600};
    text-align: center;
    padding: 4px 10px;

    &:hover {
      color: ${(props) => props.theme.palette.BlueGray800};
    }

    &:focus {
      color: ${(props) => props.theme.palette.BlueGray800};
    }
  }

  button {
    display: inline-flex;
    border: none;
    margin: 0;
    padding: 0;
    background: none;

    svg {
      margin-left: -4px;
      margin-right: 5px;
      cursor: pointer;

      &:hover {
        path {
          stroke: ${(props) => props.theme.palette.BlueGray800};
        }
      }

      &:focus {
        path {
          stroke: ${(props) => props.theme.palette.BlueGray800};
        }
      }
    }
  }
`;

interface TagProps {
  label: String;
  style?: React.CSSProperties;
  deleteIcon?: React.ReactNode;
  onDelete?: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

const Tag: React.FC<TagProps> = (props) => {
  return (
    <StyledTag style={props.style}>
      <span>{props.label}</span>
      <button onClick={props.onDelete}>{props.deleteIcon}</button>
    </StyledTag>
  );
};

export default Tag;
