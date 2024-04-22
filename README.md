# react-text-glitch-effect

## Install

```bash
npm install react-text-glitch-effect
```

## Usage

```jsx
import React from 'react';
import {TextGlitchEffect} from 'react-text-glitch-effect';

function App() {
  return (
    <TextGlitchEffect
      text='React Text Glitch Effect'
      speed={40}
      letterCase='lowercase'
      includeSpecialChars
    />
  );
}

export default App;
```

## Note

Try to use monospace fonts in case of alphabets or alphanumeric type, as the letters having different width may not look good.

## Demo

[Click here for demo](https://codesandbox.io/s/react-text-glitch-effect-z64rlc?file=/src/styles.css)

## Properties

| Property   | Type                                                     | Default     | Description                                                             |
| :--------- | :------------------------------------------------------- | :---------- | :---------------------------------------------------------------------- |
| text       | String                                                   |             | The text which will have the glitch effect.                             |
| speed      | Number                                                   | `30`        | The speed at which the letters change (in ms)                           |
| letterCase | `lowercase` or `uppercase`                               | `uppercase` | The letter case which can be used.                                      |
| className  | String                                                   |             | Text styles.                                                            |
| type       | `alphabets`, `numbers`, `specialchars` or `alphanumeric` | `alphabets` | The type can be used to set which letters to show when the effects run. |
