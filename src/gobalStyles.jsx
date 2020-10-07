import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

html, body{
	padding: 0;
	margin: 0;

	background-color: ${({ theme: { mainColor } }) => mainColor};
	scroll-behavior: smooth;
}

body *{
	transition: 0.3s;
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6, strong{
	color: ${({ theme: { mainText } }) => mainText};
	font-family: 'Russo One', sans-serif;
	font-weight: 500;
}

p, li, span, label, input, textarea{
	color: ${({ theme: { secondaryText } }) => secondaryText};
	font-family: 'Roboto Mono', monospace;
}

a{
	text-decoration: none;
	color:#17a2b8;
}

ul{
	list-style: none;
}

h1 { font-size: 46px;}
h2 { font-size: 32px;}
h3 { font-size: 28px;}
h4 { font-size: 24px;}
h5 { font-size: 20px;}
h6 { font-size: 16px;}
`

export default GlobalStyles;