import React from "react";
import { Input } from "../components/atoms/Input";

const signup = () => {
  return (
    <div style={{ display: "flex", marginTop: 96, flexDirection: "column" }}>
      <h2 style={{ marginBottom: 61 }}>회원가입</h2>

      <form>
        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 13, marginBottom: 11 }}>이름</p>
          <Input
            placeholder="김엘리자베스"
            style={{ width: 310, height: 38, padding: 10, borderRadius: 4 }}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 13, marginBottom: 11 }}>이메일</p>
          <Input
            type="email"
            placeholder="name@address.com"
            style={{ width: 310, height: 38, padding: 10, borderRadius: 4 }}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 13, marginBottom: 11 }}>비밀번호</p>
          <Input
            type="password"
            style={{ width: 310, height: 38, padding: 10, borderRadius: 4, marginBottom: 7 }}
          />
          <p style={{ fontSize: 11, fontWeight: 400, color: "#757575", width: 305 }}>
            6-20자 이내의 대문자, 소문자, 숫자, 특수문자가 각 1개 이상 포함된 비밀번호를 만들어
            주세요.
          </p>
        </div>

        <div style={{ marginBottom: 20 }}>
          <p style={{ fontSize: 13, marginBottom: 11 }}>비밀번호 확인</p>
          <Input
            type="password"
            style={{ width: 310, height: 38, padding: 10, borderRadius: 4, marginBottom: 7 }}
          />
        </div>
      </form>
    </div>
  );
};

export default signup;
