/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import Users from './Users';
import { Router, Route } from "@solidjs/router";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

//render(() => <Router />, wrapper)

//render(() => <App />, root!);




const pro = (props) => (
  <>
    <h1>Site Title</h1>
    {props.children}
  </>
);

render(() =>     (
        <Router>
            <Route path="/" component={App} />
	    <Route path="/welcome" component={Users} />
        </Router>



), document.getElementById("root"));
