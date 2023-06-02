import React from 'react';

interface Props {
  text: string;
  speed?: number;
  letterCase?: 'lowercase' | 'uppercase';
  className?: string;
  includeSpecialChars?: boolean;
}

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

const SPECIAL_CHARS = '~`!@#$%^&*()-+=/*[]{}:<>?';

let interval: any = null;

export const TextGlitchEffect: React.FC<Props> = ({
  text,
  speed = 30,
  letterCase = 'uppercase',
  className,
  includeSpecialChars = false,
}) => {
  const startGlitchEffect = (event: any) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split('')
        .map((alphabet: string, index: number) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          const letters = includeSpecialChars
            ? LETTERS + SPECIAL_CHARS
            : LETTERS;

          const individualLetter =
            letters[Math.floor(Math.random() * letters.length)];

          return letterCase === 'uppercase'
            ? individualLetter.toUpperCase()
            : individualLetter.toLowerCase();

          return alphabet; //Build was failing because of the unused variable
        })
        .join('');

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, speed);
  };

  return (
    <div
      data-value={text}
      onMouseEnter={startGlitchEffect}
      className={className}
    >
      {text}
    </div>
  );
};
