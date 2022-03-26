import React from "react";
import UserName from "../../atoms/UserName";
import DeleteTag from "../../molecules/DeleteTag";
import ThreadTrend from "../../molecules/ThreadTrend";

interface ThreadContainerProps {
  title: String;
  tags: Array<String>;
  userName: String;
  bounty: Number;
  trend: Object;
}

const index: React.FC<ThreadContainerProps> = (props) => {
  return (
    <div
      style={{
        position: "relative",
        padding: "13px 26px",
        border: "1px solid #E0E0E0",
        height: 79,
        backgroundColor: "white",
      }}
    >
      <div style={{ marginBottom: 11 }}>
        <b style={{ marginRight: 12 }}>{props.title}</b>
        <span
          style={{
            padding: 3,
            backgroundColor: "#69F0AE",
            color: "#004D40",
            height: 21,
            borderRadius: 2,
            width: 29,
          }}
        >
          +{props.bounty}
        </span>
      </div>

      {props.tags.map((tag) => (
        <DeleteTag label={tag} />
      ))}

      <div style={{ position: "absolute", right: 18, top: 13 }}>
        <div style={{ marginBottom: 8 }}>
          <ThreadTrend label="조회" margin={18} count={props.trend.view} />
          <ThreadTrend label="좋아요" margin={18} count={props.trend.like} />
          <ThreadTrend label="답변" count={props.trend.answerCount} />
        </div>

        <div style={{ textAlign: "right" }}>
          <UserName url="/" name={props.userName} />
          <span
            style={{
              marginLeft: 18,
              color: "#9E9E9E",
              fontFamily: "Roboto",
              fontStyle: "SemiBold",
              fontSize: "13px",
            }}
          >
            1시간 전
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
