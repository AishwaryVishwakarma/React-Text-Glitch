# react-text-glitch-effect

>

## Install

- using npm

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

## Demo

[Click here for demo](https://codesandbox.io/s/react-text-glitch-effect-z64rlc?file=/src/styles.css)

## Properties

| Property            | Type                       | Default | Description                                       |
| :------------------ | :------------------------- | :------ | :------------------------------------------------ |
| text                | String                     |         | The text which will have the glitch effect.       |
| speed               | Number                     | `30 ms` | The speed at which the letters change             |
| letterCase          | `lowercase` or `uppercase` |         | The alphabet case which can be used.              |
| className           | String                     |         | Text styles.                                      |
| includeSpecialChars | Boolean                    | `false` | Flag to whether include special characters or not |
