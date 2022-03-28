import React from "react";
import { FilterButton } from "../../atoms/FilterButton";
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
        backgroundColor: "white",
        borderRight: "none",
        borderLeft: "none",
      }}
    >
      <div style={{ marginBottom: 11 }}>
        <b style={{ marginRight: 12, fontSize: 15, lineHeight: "18px", letterSpacing: "-0.005em" }}>
          {props.title}
        </b>
        <span
          style={{
            padding: "3px",
            backgroundColor: "#69F0AE",
            color: "#004D40",
            borderRadius: 2,
            width: 29,
            fontWeight: 600,
            fontSize: 13,
            fontStyle: "normal",
            lineHeight: "15px",
            textAlign: "center",
            height: 21,
          }}
        >
          +{props.bounty}
        </span>
      </div>

      {props.tags.map((tag, i) => (
        <DeleteTag key={i} style={{ marginRight: "8px", fontWeight: 600 }} label={tag} />
      ))}

      <div style={{ position: "absolute", right: 18, top: 13 }}>
        <div style={{ marginBottom: 8 }}>
          <ThreadTrend label="조회" style={{ marginRight: 18 }} count={props.trend.view} />
          <ThreadTrend label="좋아요" style={{ marginRight: 18 }} count={props.trend.like} />
          <ThreadTrend label="답변" count={props.trend.answerCount} />
        </div>

        <div style={{ textAlign: "right" }}>
          <UserName url="/" name={props.userName} />
          <span
            style={{
              marginLeft: 18,
              color: "#9E9E9E",
              fontWeight: 600,
              fontSize: "13px",
              lineHeight: "15.23px",
              textAlign: "right",
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
