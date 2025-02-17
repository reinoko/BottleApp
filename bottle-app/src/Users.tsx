import type { Component } from 'solid-js';
import { Card } from "solid-bootstrap";
import {Navigate} from "@solidjs/router";
import logo from './logo.svg';
//import styles from './App.module.css';
import './Users.css';
import { Router, Route } from "@solidjs/router";



const Users: Component = () => {
	//const navigate = useNavigate();
   return(
	<div id="mew" className={'yom'} style = {{height:"100vh"}} onClick={(e) => console.log('mew')}>
		<iframe
  src="https://my.spline.design/untitled-ac8d9a12927b7ef2aea2c5c61dec0163/"
  frameborder="0" style="overflow:hidden;height:100%;width:100%" height="100%" width="100%" id="frame"
></iframe>
	</div>


 )
};

export default Users;
