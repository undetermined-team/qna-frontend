import { rest } from "msw";

export const handlers = [
  rest.get("https://example.com/thread", (req, res, ctx) => {
    const products = [
      {
        id: "0",
        tags: ["next.js", "node.js"],
        title: "Mocking API 테스트",
        userName: "Jojorabbit21",
        bounty: 75,
        trend: { view: 87, like: 13, answerCount: 3 },
        createAt: "2022-04-29 10:55:22",
      },
    ];

    return res(ctx.json(products));
  }),

  rest.get("https://example.com/thread/:id", (req, res, ctx) => {
    const { id } = req.params;

    const products = [
      {
        id: 0,
        tags: ["next.js", "node.js"],
        title: "Mocking API 테스트",
        questionArticle:
          "객체생성없이 변수를 사용할 목적으로 내부클래스로 정적클래스를 하나 만들고, static 변수를불러오니 처음에는 에딧텍스트의 값을 읽어 텍스트뷰에 뿌렸는데 두번째 부터는 처음값그대로를 불러오네요..... 맴버클래스로 바꾼뒤 객체 생성해서 불러오면 계속 바뀐 변수를불러오는데, static은 그렇지 못한 이유가 뭘까요? 아래는 연습한 코드입니다.",
        userName: "Jojorabbit21",
        trend: { view: 87, like: 13, answerCount: 3 },
        createAt: "2022-04-29 10:55:22",
        answerList: [
          {
            id: 0,
            writer: "jojorabit",
            article:
              "static String m 은 스태틱 변수입니다. 스태틱 변수의 초기화 시점은 앱 기동할 때 딱~ 한 번입니다. 그래서static은 보통 상수를 정의할 때 사용합니다. get 클래스를 안스태틱으로 해봤다는 말은:",
            isAdopt: true,
            comment: [
              {
                writer: "",
                content: "",
              },
            ],
            crarteAt: "",
            like: 4,
          },
          {
            id: 1,
            writer: "jojorabit",
            article: "",
            isAdopt: false,
            comment: [
              {
                writer: "",
                content: "",
              },
            ],
            crarteAt: "",
            like: 1,
          },
        ],
      },
    ];

    return res(
      ctx.json(
        products.filter((therad) => {
          return therad.id == Number(id);
        })[0]
      )
    );
  }),
];
