import './index.scss'
import React, { ChangeEvent} from 'react';
import {CountState} from '../../App';
import { pronouns } from '../../data/pronouns';

interface TextAreaProps {
  countState: CountState;
  updateCountState: (newCountState: CountState) => void;
}

const countWords = (text: string): number => {
  const wordArray = text.trim().split(/\s+/); 
  return wordArray.length;
};


const countPronouns = (text: string): number => {
  const wordArray = text.trim().split(/\s+/); 

  const count = wordArray.filter((wordText) => pronouns.includes(wordText.replace(/\.{3}|\.{2}|\.$/, '').toLowerCase())).length;
  return count;
};

const countParagraph = (text: string): number => {
  const paragraphArray = text.trim().split(/.\n/);
  console.log(paragraphArray)
  return paragraphArray.length;
};

const countSentence = (text: string): number => {
  const sentenceArray = text.trim().split('.'); 
 
  
  return sentenceArray.length;
}


const TextArea: React.FC<TextAreaProps> = ({ countState, updateCountState }) => {

  const handleCountChars = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let valueTextArea = e.target.value;
    const isEmpty = valueTextArea.trim() === ''

    const newCountState: CountState = {
      ...countState,
      chars: isEmpty ? 0 : e.target.value.length,
      words: isEmpty ? 0 : countWords(valueTextArea),
      pron: isEmpty ? 0 : countPronouns(valueTextArea),
      paragraphs: isEmpty ? 0 : countParagraph(valueTextArea),
      sentences: isEmpty ? 0 : countSentence(valueTextArea),
    };

    updateCountState(newCountState);
  };

  return <textarea
   className="text-area" 
   placeholder="Paste your text here..." 
   onChange={handleCountChars}
   />
}

export default TextArea
