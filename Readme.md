#### React simple masonry component

simple react Masonry component

###### setup

`npm i @nimahkh/react-masonry`

###### demo

```
import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import Masonry from '@nimahkh/react-masonry/lib';

const App = (props) => {

    const objects = [{
        "id": "0",
        "author": "Alejandro Escamilla",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
        "download_url": "https://picsum.photos/id/0/5616/3744"
    }, {
        "id": "1",
        "author": "Alejandro Escamilla",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/photos/LNRyGwIJr5c",
        "download_url": "https://picsum.photos/id/1/5616/3744"
    }, {
        "id": "10",
        "author": "Paul Jarvis",
        "width": 2500,
        "height": 1667,
        "url": "https://unsplash.com/photos/6J--NXulQCs",
        "download_url": "https://picsum.photos/id/10/2500/1667"
    }, {
        "id": "100",
        "author": "Tina Rataj",
        "width": 2500,
        "height": 1656,
        "url": "https://unsplash.com/photos/pwaaqfoMibI",
        "download_url": "https://picsum.photos/id/100/2500/1656"
    }, {
        "id": "1000",
        "author": "Lukas Budimaier",
        "width": 5626,
        "height": 3635,
        "url": "https://unsplash.com/photos/6cY-FvMlmkQ",
        "download_url": "https://picsum.photos/id/1000/5626/3635"
    }, {
        "id": "1001",
        "author": "Danielle MacInnes",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/photos/1DkWWN1dr-s",
        "download_url": "https://picsum.photos/id/1001/5616/3744"
    }, ]


    return (
        <Fragment>
            <Masonry
                items={objects}
                imagekey={"download_url"}
            />

        </Fragment>
    )
};


ReactDOM.render(<App/>, document.getElementById('root'));

```
