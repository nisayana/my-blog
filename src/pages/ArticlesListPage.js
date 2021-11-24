import React from "react";
import {Link} from "react-router-dom"
import articleContent from "./article-content";
import ArticlesList from "../components/ArticlesList"


const ArticlesListPage = () => {
    return(
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articleContent}/>
        </>
    )
}

export default ArticlesListPage;