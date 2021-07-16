import Author from './Author';
import Quote from './Quote';
import Tweet from './Tweet';


const QuoteBox = (props) =>{

    return (
        <div className="quote-box card col-md-4 " id="quote-box">
            <h1 className="card-header">Quote Machine!</h1>
            <Quote quote={props.quote}/>
            <Author author={props.author}/>
            <button className='btn btn-primary col-3' id='new-quote'>New Quote</button>
            <Tweet quote={props.quote} author={props.author}/>
        </div>
    )
}
export default QuoteBox;