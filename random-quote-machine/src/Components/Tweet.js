const Tweet = (props) => {
   return( <a href={"https://twitter.com/intent/tweet?text="+encodeURIComponent(props.quote)+encodeURIComponent(props.author)} id="tweet-quote" className='btn btn-info'><i className="fab fa-twitter"></i></a>
   );
};

export default Tweet;