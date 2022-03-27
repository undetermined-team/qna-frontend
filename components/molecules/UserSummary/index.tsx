import React from "react";
import { EmptyProfile } from "../../../assets/SvgIcons";
import UserName from "../../atoms/UserName";

interface UserSummaryProps {
  userName: String;
  bounty: Number;
  index: Number;
  style?: React.CSSProperties;
}

const index: React.FC<UserSummaryProps> = (props) => {
  return (
    <div style={{ display: "flex", height: 36, ...props.style }}>
      <p style={{ marginRight: 8 }}>{EmptyProfile}</p>

      <span style={{ marginRight: 9, lineHeight: "15.23px", fontSize: "13px", fontWeight: 600 }}>
        {props.index}
      </span>

      <div style={{ lineHeight: "15.23px" }}>
        <UserName name={props.userName} url="/" />
        <p
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#616161",
            lineHeight: "15.23px",
            marginTop: 3,
          }}
        >
          {props.bounty.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")}
        </p>
      </div>
    </div>
  );
};

export default index;
