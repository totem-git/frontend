import { useEffect, useState } from "react";
import { fetchAPI } from "utils/api";
import CardsList from "./CardsList";

const ArticlesList = ({ data, prependBreadcrumbs }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const currentUrlSlug = window.location.pathname.slice(1);

    fetchAPI(
      `/articles?page.slug=${
        data.categorySlug || currentUrlSlug
      }&status=published`
    ).then((articles) => setArticles(articles));
  }, []);

  if (!articles || articles.length == 0) return null;

  const cardsListData = {
    title: data.heading,
    cards: articles.map((article) => ({
      image: article.hero.media[0],
      title: article.hero.title,
      date: new Date(article.created_at).toLocaleDateString("en-US", {
        dateStyle: "long",
      }),
      text: article.hero.text,
      CTA: {
        url: {
          pathname: "/article/[slug]",
          query: { slug: article.slug, category: article.categorySlug },
        },
        newTab: false,
        text: "Read more",
        type: "primary",
        urlAs: `/${article.categorySlug}/${article.slug}`,
      },
    })),
  };

  return (
    <CardsList data={cardsListData} prependBreadcrumbs={prependBreadcrumbs} />
  );
};

export default ArticlesList;
