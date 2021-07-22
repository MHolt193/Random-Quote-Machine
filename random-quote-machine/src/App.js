import QuoteBox from './Components/QuoteBox';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const quotes = [
    {
      quote: 'Nothing is impossible, the word itself says “I’m possible”!',
      author: '- Audrey Hepburn'},
    {
      quote: 'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
      author: '- Maya Angelou'
    },
    {
      quote: 'Whether you think you can or you think you can’t, you’re right.',
      author: '- Henry Ford'
    },
    {
      quote: 'Perfection is not attainable, but if we chase perfection we can catch excellence.',
      author: '-Vince Lombardi'
    },
    {
      quote: 'Life is 10 percent what happens to me and 90 percent of how I react to it.',
      author: '- Charles Swindoll'
    },
    {
      quote: 'If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.',
      author: '- Oprah Winfrey'
    },
    {
      quote: 'None of us is as smart as all of us.',
      author: '- Ken Blanchard'
    },
    {
      quote: "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
      author: '-Rosa Parks'
    }
  
  ];
  let randomIndex = () =>{
   return Math.floor(Math.random() * quotes.length)
  }
  let index = randomIndex();
  
  
  return (
    <div className="App container-fluid d-flex justify-content-center">
      <QuoteBox  quotes={quotes} quote={quotes[index].quote} author={quotes[index].author} />
      <Footer />
    </div>
  );
}

export default App;

