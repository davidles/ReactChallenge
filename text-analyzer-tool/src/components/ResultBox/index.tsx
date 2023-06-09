import './index.scss';
import React from 'react';
import {CountState} from '../../App';

interface ResultBoxProps {
  countState: CountState;
}

const ResultBox: React.FC<ResultBoxProps> = ({ countState }) => {

  const {
    words,
    chars,
    sentences,
    paragraphs,
    pron
  } = countState

  const resultBar = [
    {
      title: 'Words',
      value: words,
    },
    {
      title: 'Characters',
      value: chars,
    },
    {
      title: 'Sentences',
      value: sentences,
    },
    {
      title: 'Paragraphs ',
      value: paragraphs,
    },
    {
      title: 'Pronouns',
      value: pron,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
