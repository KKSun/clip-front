import React from 'react';
import ReactDOM from 'react-dom';
import Clip from './Clip';
import * as serviceWorker from './serviceWorker';

var noticeStyle = {
  color: 'red'
};

ReactDOM.render(
  <React.StrictMode>
    <header>
      <h2>Online Clipboard</h2>
      <p>This is an online clipboard tool. </p>
      <p>It saves your text into cloud, identified with your <code>username & #tag</code>.</p>
      <p>You can retrieve your text through <a href="https://clip.kksun.site">https://clip.kksun.site</a> with <code>username & #tag</code> on any device.</p>
      <p>Follow Steps:</p>
        <li>1. Enter username and #tag.</li>
        <li>2. Paste anything you want in clipboard.</li>
        <li>3. On other devices, go to <a href="https://clip.kksun.site">https://clip.kksun.site</a> and enter <code>username & #tag</code> to get your clipboard.</li>
      <p style={noticeStyle}>Notice: Text in clipboard will be destrioed after 48 hours.</p>
    </header>
    <div>
      <Clip />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
