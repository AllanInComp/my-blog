import React from 'react';
import ArticlesList from '../components/ArticlesList'
import ArticlesContent from '../pages/article-content'



const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles={ArticlesContent} />
    </>
)

export default ArticlesListPage;

