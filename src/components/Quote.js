import '../css/Quote.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export const Quote = (props) => {
  return (
    <>
    <div id="text">
      <FaQuoteLeft />&nbsp;
        {props.quoteText}
      &nbsp;<FaQuoteRight />
    </div>
    <div id="author">
      - {props.quoteAuthor}
    </div>
    </>
  )
}