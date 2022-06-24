export interface TrendType {
  answerCount: number;
  like: number;
  view: number;
}

export interface commentType {
  writer: string;
  content: string;
}

export interface AnswerListType {
  article: string;
  comment: Array<commentType>;
  crarteAt: string;
  id: number;
  isAdopt: boolean;
  writer: string;
  like: number;
}

export interface ThreadType {
  id: number;
  tags: Array<string>;
  title: string;
  userName: string;
  questionArticle: string;
  trend: TrendType;
  answerList: Array<AnswerListType>;
  createAt: string;
}
