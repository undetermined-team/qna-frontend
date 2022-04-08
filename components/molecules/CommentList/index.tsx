import React from "react";
import UserName from "../../atoms/UserName";
import { CommentContent, CommentList, CommentUser } from "./styles";

const index = () => {
  return (
    <CommentList>
      <CommentUser>
        <UserName name="jojorabbit21" url="/" />
      </CommentUser>

      <CommentContent>
        혹시 초기화가 무슨 말인지 모르시겠다면 static String m = editText.getText().toString(); 이
        라인이 실행되는 것이라 대충 생각하시면 됩니다.
      </CommentContent>
    </CommentList>
  );
};

export default index;
