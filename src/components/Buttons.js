import '../css/Buttons.css'
import { FaTwitter } from 'react-icons/fa';
import { MdAutorenew } from 'react-icons/md';

export const Buttons = (props) => {
  return (
    <div id="buttons">
      <a href={
        `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent('"' + props.quoteText + '" -' + props.quoteAuthor)}`} id="tweet-quote" className="btn btn-dark" title="Tweet quote"><FaTwitter /></a>
      <a id="new-quote" className="btn btn-dark" onClick={() => props.updateQuote()}><MdAutorenew />&nbsp;New Quote</a>
    </div>
  )
};