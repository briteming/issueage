import Articles from "./components/articles/Articles.svelte";
import ArticleDetails from "./components/article-details/ArticleDetails.svelte";
import NotFound from "./components/common/NotFound.svelte";

export default {
  "/": Articles,
  "/articles": Articles,
  "/articles/:issueNumber": ArticleDetails,
  "/tags/:tag": Articles,

  // The catch-all route must always be last
  "*": NotFound,
};
