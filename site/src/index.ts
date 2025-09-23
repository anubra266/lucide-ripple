import { mount } from 'ripple';
import { App } from './App.ripple';
import { inject } from "@vercel/analytics"
import "./styles.css";

inject()

mount(App, {
	target: document.getElementById('root'),
});
