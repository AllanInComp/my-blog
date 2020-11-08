import React, {useState, useEffect} from 'react';
import articlesContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList'
import UpvoteSection from '../components/UpvoteSection'
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = ({match}) => {
    
    const name = match.params.name;
    const article = articlesContent.find(article => article.name === name)
    // implement state without using class components
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments: []});

    // will be called whenever the component is loaded, will cause infinite loop if there is no second argument
    useEffect(()=>{
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        };
        fetchData();
    },[name]);

    const otherArticles = articlesContent.filter(article => article.name !== name)
    

    
    let content = article? 
        (
        <>
            <h1>{article.title}</h1>
            <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
            {article.content.map((paragraph,key)=>(
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments}/>
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}/>
            <ArticlesList articles={otherArticles}/>
        </>
        )
        :
        (
        <>
            <NotFoundPage/>
        </>
        )
    

    return(
    <>
        {content}
    </>

    );
}

export default ArticlePage;

