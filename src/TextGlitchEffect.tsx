import React from 'react';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';

const SPECIAL_CHARS = '~`!@#$%^&*()-+=/*[]{}:<>?';

const NUMBERS = '0123456789';

interface Props {
  text: string;
  speed?: number;
  letterCase?: 'lowercase' | 'uppercase';
  className?: string;
  type?: 'alphabets' | 'specialchars' | 'numbers' | 'alphanumeric';
}

const TYPES = {
  ALPHABETS: 'alphabets',
  NUMBERS: 'numbers',
  SPECIAL_CHARS: 'specialchars',
  ALPHA_NUMERIC: 'alphanumeric',
} as const;

let interval: any = null;

export const TextGlitchEffect: React.FC<Props> = ({
  text,
  speed = 30,
  letterCase = 'uppercase',
  className,
  type = 'alphabets',
}) => {
  const startGlitchEffect = (event: any): void => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval((): void => {
      event.target.innerText = event.target.innerText
        .split('')
        .map((alphabet: string, index: number) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          let letters: string = LETTERS;

          // Assigning the letters string based on the type
          switch (type) {
            case TYPES.ALPHABETS:
              letters = LETTERS;
              break;
            case TYPES.NUMBERS:
              letters = NUMBERS;
              break;
            case TYPES.SPECIAL_CHARS:
              letters = SPECIAL_CHARS;
              break;
            case TYPES.ALPHA_NUMERIC:
              letters = LETTERS + NUMBERS;
              break;
          }

          const individualLetter =
            letters[Math.floor(Math.random() * letters.length)];

          return letterCase === 'uppercase'
            ? individualLetter.toUpperCase()
            : individualLetter.toLowerCase();

          //Build will fail because of the unused variable
          return alphabet;
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
      style={{
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {text}
    </div>
  );
};
