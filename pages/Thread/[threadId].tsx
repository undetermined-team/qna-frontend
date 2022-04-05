import React from "react";
import { useRouter } from "next/router";
import Aside from "../../components/organisms/Aside";
import styled from "styled-components";
import { Tag } from "../../components/atoms/Tag";
import ThreadTrend from "../../components/molecules/ThreadTrend";
import UserSummary from "../../components/molecules/UserSummary";
import { VerifiedIcon } from "../../assets/SvgIcons";
import UserName from "../../components/atoms/UserName";
import { SearchInput } from "../../components/atoms/SearchInput";
import { FilterButton } from "../../components/atoms/FilterButton";

const Thread = () => {
  const ThreadTitle = styled.h1`
    ${(props) => props.theme.typography.Heading1};
    color: ${(props) => props.theme.palette.Gray900};
  `;

  const ThreadCreateAt = styled.time`
    ${(props) => props.theme.typography.Footnote2};
    color: ${(props) => props.theme.palette.Gray600};
  `;

  const AnswerCount = styled.h3`
    ${(props) => props.theme.typography.Heading3};
    color: ${(props) => props.theme.palette.Gray900};
    height: 38px;
    border-bottom: 1px solid ${(props) => props.theme.palette.Gray500};
    margin-bottom: 20px;
  `;

  const Verified = styled.span`
    ${(props) => props.theme.typography.Footnote2};
    line-height: normal;
    color: ${(props) => props.theme.palette.Teal900};
  `;

  return (
    <div style={{ display: "inline-flex" }}>
      <section style={{ border: "1px solid #D6D6D6", borderTop: "none", minWidth: 705 }}>
        <section>
          <header
            style={{
              position: "relative",
              borderBottom: "6px solid #f5f5f5",
              padding: "23px 26px",
            }}
          >
            <ThreadTitle>정적 클랙스의 static 변수값은 왜 변하지 않을까요?</ThreadTitle>

            <div style={{ marginTop: "10px" }}>
              <Tag label="android-studio" style={{ marginRight: "4px", fontWeight: 600 }} />
              <Tag label="java" style={{ marginRight: "4px", fontWeight: 600 }} />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: 163,
                    padding: 0,
                    marginTop: 29,
                    marginBottom: 15,
                  }}
                >
                  <ThreadTrend label="조회" count={87} />
                  <ThreadTrend label="좋아요" count={87} />
                  <ThreadTrend label="답변" count={3} />
                </div>

                <div>
                  <button
                    style={{
                      marginRight: 5,
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E0E0E0",
                      color: "#757575",
                      padding: "4px 10px",
                    }}
                  >
                    공유
                  </button>
                  <button
                    style={{
                      marginRight: 5,
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E0E0E0",
                      color: "#757575",
                      padding: "4px 10px",
                    }}
                  >
                    좋아요
                  </button>
                  <button
                    style={{
                      marginRight: 5,
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #E0E0E0",
                      color: "#757575",
                      padding: "4px 10px",
                    }}
                  >
                    신고
                  </button>
                </div>
              </div>

              <div>
                <UserSummary
                  userName="jojorabbit21"
                  bounty={8750}
                  style={{ marginBottom: 10, marginTop: 15 }}
                />
                <ThreadCreateAt>2022-03-03 18:47 에 작성됨</ThreadCreateAt>
              </div>
            </div>
          </header>

          <article style={{ padding: "20px 16px", borderBottom: "6px solid #f5f5f5" }}>
            <p>
              객체생성없이 변수를 사용할 목적으로 내부클래스로 정적클래스를 하나 만들고, static
              변수를 불러오니 처음에는 에딧텍스트의 값을 읽어 텍스트뷰에 뿌렸는데 두번째 부터는
              처음값 그대로를 불러오네요..... 맴버클래스로 바꾼뒤 객체 생성해서 불러오면 계속 바뀐
              변수를 불러오는데, static은 그렇지 못한 이유가 뭘까요? 아래는 연습한 코드입니다.
            </p>
          </article>
        </section>

        <section style={{ padding: "20px 16px" }}>
          <AnswerCount>2개의 답변이 있습니다.</AnswerCount>

          <main>
            <article
              style={{
                padding: "0 10px",
                borderBottom: "1px solid #9E9E9E",
                marginBottom: 20,
                paddingBottom: 20,
              }}
            >
              <div style={{ marginBottom: 48 }}>
                static String m 은 스태틱 변수입니다. 스태틱 변수의 초기화 시점은 앱 기동할 때 딱~
                한 번입니다. 그래서static은 보통 상수를 정의할 때 사용합니다. get 클래스를
                안스태틱으로 해봤다는 말은:
              </div>

              <div style={{ marginBottom: 26, display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                  >
                    {VerifiedIcon}
                    <Verified style={{ marginLeft: 5 }}>채택됨</Verified>
                  </div>

                  <div>
                    <ThreadTrend label="댓글" count={4} style={{ marginRight: 18 }} />
                    <ThreadTrend label="좋아요" count={13} />

                    <div>
                      <button
                        style={{
                          width: 43,
                          height: 22,
                          marginRight: 5,
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #E0E0E0",
                          color: "#757575",
                          padding: "4px 10px",
                        }}
                      >
                        공유
                      </button>
                      <button
                        style={{
                          width: 43,
                          height: 22,
                          marginRight: 5,
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #E0E0E0",
                          color: "#757575",
                          padding: "4px 10px",
                        }}
                      >
                        좋아요
                      </button>
                      <button
                        style={{
                          width: 43,
                          height: 22,
                          marginRight: 5,
                          backgroundColor: "#FFFFFF",
                          border: "1px solid #E0E0E0",
                          color: "#757575",
                          padding: "4px 10px",
                        }}
                      >
                        신고
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <UserSummary userName="jojorabbit21" bounty={8750} style={{ marginBottom: 10 }} />
                  <ThreadCreateAt>2022-03-03 18:47 에 작성됨</ThreadCreateAt>
                </div>
              </div>

              <div style={{ border: "1px solid #E0E0E0", borderRadius: 2, padding: 10 }}>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid #EEEEEE",
                    paddingBottom: 12,
                    marginBottom: 12,
                  }}
                >
                  <div style={{ minWidth: 95, maxWidth: 95 }}>
                    <UserName name="jojorabbit21" url="/" />
                  </div>

                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: 13,
                      lineHeight: "15px",
                      marginLeft: 6,
                    }}
                  >
                    혹시 초기화가 무슨 말인지 모르시겠다면 static String m =
                    editText.getText().toString(); 이 라인이 실행되는 것이라 대충 생각하시면 됩니다.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid #EEEEEE",
                    paddingBottom: 12,
                    marginBottom: 12,
                  }}
                >
                  <div style={{ minWidth: 95, maxWidth: 95 }}>
                    <UserName name="timmythatman" url="/" />
                  </div>

                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: 13,
                      lineHeight: "15px",
                      marginLeft: 6,
                    }}
                  >
                    클래스 초기화에 대한 이해를 해야 더 풀리겠네요. 인스턴스 멤버는 초기화한후
                    사용할 수 있는데 static 멤버를 사용하려면, 즉 바뀐 클래스 멤버를 사용하려면 어떤
                    식으로든 다시 초기화해야 바뀐 변수를 가져올 수 있는데 static은 그렇지 않다는
                    얘기군요... 책에서 인스턴스 객체가 클래스멤버를 불러와서 값을 변화시킨후
                    사용하는 것을 보고, 이것도 가능하지 않을까 실행해 보았어요 ;;
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <SearchInput
                    placeholder="댓글을 입력해 주세요"
                    sx={{
                      ".MuiInputBase-input": { borderRadius: "2px", padding: "9px 16px" },
                      width: 590,
                      height: 33,
                      marginRight: "12px",
                    }}
                  />

                  <FilterButton
                    variant="contained"
                    style={{ width: 52, height: 33, color: "#fff", backgroundColor: "#37474F" }}
                  >
                    작성
                  </FilterButton>
                </div>
              </div>
            </article>

            <article style={{ padding: "0 10px" }}>
              <div style={{ marginBottom: 48 }}>
                static String m 은 스태틱 변수입니다. 스태틱 변수의 초기화 시점은 앱 기동할 때 딱~
                한 번입니다. 그래서static은 보통 상수를 정의할 때 사용합니다. get 클래스를
                안스태틱으로 해봤다는 말은:
              </div>

              <div style={{ marginBottom: 26, display: "flex", justifyContent: "space-between" }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      marginBottom: 8,
                    }}
                  >
                    {VerifiedIcon}
                    <Verified style={{ marginLeft: 5 }}>채택됨</Verified>
                  </div>

                  <div>
                    <ThreadTrend label="댓글" count={4} style={{ marginRight: 18 }} />
                    <ThreadTrend label="좋아요" count={13} />
                  </div>
                </div>

                <div>
                  <UserSummary userName="jojorabbit21" bounty={8750} style={{ marginBottom: 10 }} />
                  <ThreadCreateAt>2022-03-03 18:47 에 작성됨</ThreadCreateAt>
                </div>
              </div>

              <div style={{ border: "1px solid #E0E0E0", borderRadius: 2, padding: 10 }}>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid #EEEEEE",
                    paddingBottom: 12,
                    marginBottom: 12,
                  }}
                >
                  <div style={{ minWidth: 95, maxWidth: 95 }}>
                    <UserName name="jojorabbit21" url="/" />
                  </div>

                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: 13,
                      lineHeight: "15px",
                      marginLeft: 6,
                    }}
                  >
                    혹시 초기화가 무슨 말인지 모르시겠다면 static String m =
                    editText.getText().toString(); 이 라인이 실행되는 것이라 대충 생각하시면 됩니다.
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid #EEEEEE",
                    paddingBottom: 12,
                    marginBottom: 12,
                  }}
                >
                  <div style={{ minWidth: 95, maxWidth: 95 }}>
                    <UserName name="timmythatman" url="/" />
                  </div>

                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: 13,
                      lineHeight: "15px",
                      marginLeft: 6,
                    }}
                  >
                    클래스 초기화에 대한 이해를 해야 더 풀리겠네요. 인스턴스 멤버는 초기화한후
                    사용할 수 있는데 static 멤버를 사용하려면, 즉 바뀐 클래스 멤버를 사용하려면 어떤
                    식으로든 다시 초기화해야 바뀐 변수를 가져올 수 있는데 static은 그렇지 않다는
                    얘기군요... 책에서 인스턴스 객체가 클래스멤버를 불러와서 값을 변화시킨후
                    사용하는 것을 보고, 이것도 가능하지 않을까 실행해 보았어요 ;;
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <SearchInput
                    placeholder="댓글을 입력해 주세요"
                    sx={{
                      ".MuiInputBase-input": { borderRadius: "2px", padding: "9px 16px" },
                      width: 590,
                      height: 33,
                      marginRight: "12px",
                    }}
                  />

                  <FilterButton
                    variant="contained"
                    style={{ width: 52, height: 33, color: "#fff", backgroundColor: "#37474F" }}
                  >
                    작성
                  </FilterButton>
                </div>
              </div>
            </article>
          </main>
        </section>
      </section>

      <Aside />
    </div>
  );
};

export default Thread;
