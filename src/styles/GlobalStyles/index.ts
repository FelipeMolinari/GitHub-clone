import 'react-calendar-heatmap/dist/styles.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
:root{
  font-size: 63%;
  ${(props) => {
		const theme = props.theme;
		let append = '';
		Object.entries(theme).forEach(([ prop, value ]) => {
			append += `--${prop}: ${value};`;
		});
		return append;
	}}

 
}

html{
  min-height: 100vh;
  max-width: 100vw;
  background: var(--primary)
}
*, button, input{
  border: 0;
  background: none;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
  color: var(--black);
  transition: color .2s ease-out;
}
ul{
  list-style:none
}


`;
