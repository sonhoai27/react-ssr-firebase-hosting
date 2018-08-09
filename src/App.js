import React from 'react';
import { Helmet } from "react-helmet";
const App = () => {
    return (

        <
        div >
        <
        Helmet title = "ReactQL application"
        meta = {
            [{
                    name: 'description',
                    content: 'ReactQL starter kit app',
                },
                { property: 'og:image', content: "https://www.facebook.design/public/images/ios11-card.png" }
            ]
        }
        /> <h1> SON HOAIs </h1> </div>
    );
}
export default App