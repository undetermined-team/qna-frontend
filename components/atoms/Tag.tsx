import styled from "styled-components";
import { DeleteIcon } from "../../public/assets/SvgIcons";

const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;
  border-radius: 2px;
  height: 27px;
  vertical-align: middle;
  background-color: ${(props) => props.theme.palette.BlueGray50};
  transition: background-color 300ms;
  box-sizing: border-box;
  outline: none;
  font-weight: 500;

  &:hover {
    background-color: ${(props) => props.theme.palette.BlueGray100};
  }

  &:focus {
    background-color: ${(props) => props.theme.palette.BlueGray100};
  }

  span {
    ${(props) => props.theme.typography.Tags};
    color: ${(props) => props.theme.palette.BlueGray600};
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
  onDelete?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  className?: string;
}

const Tag: React.FC<TagProps> = (props) => {
  return (
    <StyledTag className={props.className}>
      <span>{props.label}</span>
      {props.onDelete && (
        <button onClick={props.onDelete}>
          <DeleteIcon />
        </button>
      )}
    </StyledTag>
  );
};

export default Tag;
