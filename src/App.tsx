import React from 'react'
import './styles.css'
// import LinkButton from "./ref/useRef1";
// import LinkButton from './ref/globalFix1'
// import LinkButton from './ref/globalFix2'
// import LinkButton from './ref/differenceFix1and2'
// import LinkButton from './ref/useRefAndCreateRef'
import DomUseRef from './ref/domUseRef'
export default function App() {
	return (
		<div className="App">
			<DomUseRef />
			{/* <br />
			<LinkButton />
			<br />
			<LinkButton />
			<br /> */}
		</div>
	)
}
