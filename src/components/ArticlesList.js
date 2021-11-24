import React from "react";
import {Link} from "react-router-dom"
// import ArticlesListPage from "../pag es/ArticlesListPage"

const ArticlesList = ({articles}) => {

    return(
    <>
        {articles.map((article, key) =>
            <Link className="article-list-name" key={key} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 125)}...</p>
            </Link>
        )}
    </>
    )}

export default ArticlesList