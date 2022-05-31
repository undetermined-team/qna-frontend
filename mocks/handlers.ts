import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:5000/api/thread", (req, res, ctx) => {
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
];
