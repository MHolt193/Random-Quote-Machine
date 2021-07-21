import { useState } from 'react';
import Author from './Author';
import Quote from './Quote';
import Tweet from './Tweet';
import '../App.css'




const QuoteBox = (props) => {
     const [text, setQuote] = useState(props.quote)
     const [author, setAuthor] = useState(props.author) 

     let randomIndex = () =>{
        return Math.floor(Math.random() * props.quotes.length)
       }
        
     const clickQuoteHandler = () => {
        let index = randomIndex();
        setQuote(props.quotes[index].quote);
        setAuthor(props.quotes[index].author);
    }

    return (
        <div className="quote-box card col-md-4" id="quote-box">
            <h1 className="card-header">Quote Machine!</h1>
            <Quote quote={text} />
            <Author author={author} />
            <div className="btn-group">
                <button onClick={clickQuoteHandler} className='btn btn-primary' id='new-quote'>New Quote</button>
                <Tweet quote={text} author={author} />
            </div>
        </div>
    )
}
export default QuoteBox;