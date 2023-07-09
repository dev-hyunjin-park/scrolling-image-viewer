import * as React from 'react';
import './style.css';

export default function App() {
  const imgUrl =
    'https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=808&q=80';
  return (
    <div>
      <div className="mother">
        <div className="image-container">
          <img src={imgUrl} alt="image" />
          <img src={imgUrl} alt="image" />
          <img src={imgUrl} alt="image" />
          <img src={imgUrl} alt="image" />
          <img src={imgUrl} alt="image" />
        </div>
        <div className="contents">
          <h3>박길동의 포트폴리오</h3>
          <span>blabla@bla.com</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vestibulum sed arcu non odio. At lectus urna duis convallis
            convallis. Morbi tristique senectus et netus. Ultrices sagittis orci
            a scelerisque purus semper eget duis at. Enim praesent elementum
            facilisis leo vel fringilla est ullamcorper. Diam vel quam elementum
            pulvinar etiam non. Tortor posuere ac ut consequat semper viverra
            nam. Sed vulputate odio ut enim blandit. Eu sem integer vitae justo
            eget magna fermentum iaculis eu.
          </p>
          <img src={imgUrl} alt="image" />
          <img src={imgUrl} alt="image" />
          <img src={imgUrl} alt="image" />
        </div>
      </div>
    </div>
  );
}
