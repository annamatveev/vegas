import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  },
  * {
    margin: 0;
    padding: 0;
}

body {
    font-size: 16px;
    color: #222;
    background: #eee;
    padding: 0 3rem 1rem 3rem;
    font-family: 'Muli', 'sans serif';
}

a {
    color: #ff6e00;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

h1 {
    text-align: center;
    margin: 1.5rem auto 1rem;
    font-family: 'Josefin Sans', Serif;
    font-weight: normal;
    font-size: 3rem;
    color: #aaa;
}

p {
    line-height: 1.5;
}

.infos {
    text-align: center;
    margin-bottom: 1rem;
}

#zoomStart, #zoomEnd {
    display: inline-block;
    font-feature-settings: "tnum";
    font-variant-numeric: tabular-nums;
}

#zoomStart {
    text-align: right;
}

#zoomEnd {
    text-align: left;
}

.light {
    color: #AAA;
}

.drop {
    cursor: pointer;
}

footer p {
    text-align: center;
    color: #888;
    font-size: .8rem;
}

.tooltip {
    position: absolute;
    background: #fff;
    border: 3px solid #e7e7e7;
    border-radius: 1rem;
    padding: .5rem 1rem;
    width: 30rem;
    line-height: 1.4rem;
}

.tooltip::before {
    content: '';
    display: block;
    position: absolute;
    top: -.65rem;
    width: 1rem;
    height: 1rem;
    background: #fff;
    border: 3px solid #e7e7e7;
    border-width: 3px 0 0 3px;
    transform: rotate(45deg);
    z-index: 1;
}

.tooltip.left::before {
    left: 1.65rem;
}

.tooltip.right::before {
    right: 1.65rem;
}

.tooltip .commit {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.tooltip .avatar {
    width: 5rem;
    height: 5rem;
    border-radius: .5rem;
    margin-right: 1rem;
    flex: 0 0 5rem;
}

.tooltip .content {
    flex: 1 0 0;
}

.tooltip h3 {
    font-size: 1rem;
}

.tooltip p {
    font-size: .9rem;
    color: #777;
}

`;

export default GlobalStyle;
