import { GraphQLVariables } from "../type/user";

export const getRankingApiUrl: string = "http://localhost:3000/api/graphql";
//"https://d6ui2fy5uj.execute-api.ap-northeast-2.amazonaws.com/api/graphql";

export const getGraphQLRankingQuery: Function = (criteria: string) => `
query getUserRankingQuery($rankingCriteria: String, $rankingPage: Int, $rankingCount: Int, $generation: Int) {
  ranking(criteria: $rankingCriteria, page: $rankingPage, count: $rankingCount, generation : $generation){
      name
      generation
      nickname
      bio
      public_repos
      avatar_url
      ${criteria}
  }
}

`;

export const getUserInformCriteria: Function = (
  criteria: string
): GraphQLVariables => {
  return {
    rankingCriteria: criteria,
    rankingCount: 100,
    rankingPage: 1,
    generation: 0,
  };
};
