import React from "react";
import {useParams} from "react-router-dom";
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList"
import NotFound from "../pages/NotFound"

const ArticlePage = () => {
    const {name} = useParams();
    const article = articleContent.find(article => article.name === name)

    const other_articles = articleContent.filter(article => article.name !== name)

    if (!article) return <NotFound/>

    return(
        <>
            <h1>{article.title}</h1>         
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h3>Other articles:</h3>
            <ArticlesList articles={other_articles}/>
        </>
    )
}

export default ArticlePage
