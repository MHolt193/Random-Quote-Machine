import Author from './Author';
import Quote from './Quote';
import Tweet from './Tweet';


const QuoteBox = (props) => {

    return (
        <div className="quote-box card col-md-4" id="quote-box">
            <h1 className="card-header">Quote Machine!</h1>
            <Quote quote={props.quote} />
            <Author author={props.author} />
            <div className="btn-group">
                <button className='btn btn-primary' id='new-quote'>New Quote</button>
                <Tweet quote={props.quote} author={props.author} />
            </div>
        </div>
    )
}
export default QuoteBox;