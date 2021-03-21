import '../css/App.css';
import { Quote } from './Quote';
import { Buttons } from './Buttons'
import { useEffect, useState } from 'react';

const App = () => {
  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');

  useEffect(() => {
    updateQuote();
  }, [])

  const getQuote = () => {
    return fetch('./data.json')
      .then((response) => response.json())
      .then((result) => {
        const i = Math.floor(Math.random() * (result.length + 1));
        return result[i];
      })
  };

  const updateQuote = async () => {
    const newQuote = await getQuote();
    setQuoteText(newQuote.quote);
    setQuoteAuthor(newQuote.author)
  };
  
  return (
      <main>
        <div id="quote-box" className="text-dark bg-light">
          <Quote quoteText={quoteText} quoteAuthor={quoteAuthor} />
          <Buttons quoteText={quoteText} quoteAuthor={quoteAuthor} updateQuote={updateQuote}/>
        </div>
      </main>
  );
};

export default App;
