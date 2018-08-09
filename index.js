import * as React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import express from 'express';
import * as functions from 'firebase-functions';
import Helmet from 'react-helmet'
const app = express();
app.get('/', (req, res) => {
  const content = renderToString( < App/> )
  const head = Helmet.renderStatic();
    const html = `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
        <head>
            ${head.title.toString()}
            ${head.meta.toString()}
            ${head.link.toString()}
        </head>
        <body ${head.bodyAttributes.toString()}>
            <div id="root">
                ` + content + `
            </div>
            <script src="./bundle.js"></script>  
        </body>
    </html>`
    res.send(html);
});
export let ssrapp = functions.https.onRequest(app);