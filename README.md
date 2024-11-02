# React Carousel Image


# ImageCarousel

A customizable image carousel component for React that supports autoplay, infinite looping, and various display options.

<!-- ![Example Image](//assets/sample-image.png) -->
![Example Image](https://raw.githubusercontent.com/sharanabasappadhammur/nodejs/refs/heads/main/Screenshot%202024-10-10%20131454.png?token=GHSAT0AAAAAACXDSEAZVOZIJXIGJBCMEC2OZYHUO4A)

## Features

- **Customizable:** Easily change the behavior and appearance of the carousel with props.
- **Autoplay:** Automatically transitions images at a specified interval.
- **Autoplay Interval:** Sets the time between automatic transitions of images in the carouse.
- **Infinite Loop:** Allows for continuous cycling through images.
- **Indicators:** Displays pagination indicators for easy navigation.


### Features

-   Responsive
-   Mobile friendly
-   Swipe to slide
-   Mouse emulating touch


### Demo

Click here for demo <http://example.com.io/react-responsive-carousel/>


## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install react-carousel-image
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

### Usage

```javascript
import React from 'react';
import ImageCarousel from 'react-carousel-image';

const images = [
  'url_to_image1.jpg',
  'url_to_image2.jpg',
  'url_to_image3.jpg',
  // Add more images as needed
];

const App = () => {
  return (
    <div>
      <h1>React Carousel Image Example</h1>
      <ImageCarousel 
        images={images} 
        showArrowButtons={true} 
        showIndicators={true} 
        autoplay={true} 
        autoplayInterval={3000} 
        infiniteLoop={true} 
      />
    </div>
  );
};

export default App;
```

### Props

| Name                | Value          | Description                                                                                                 |
|---------------------|----------------|-------------------------------------------------------------------------------------------------------------                                     |
| autoplay            | `boolean`      | Automatically transitions images at a specified interval.                                                   |
| autoplayInterval     | `number`       | Sets the interval for autoplay transitions, with a default of `3000ms`.                                   |
| infiniteLoop       | `boolean`      | Allows for continuous cycling through images.                                                                |
| indicators          | `boolean`      | Displays pagination indicators for easy navigation between images.                                           |
                                     
                                

## License

`react-carousel-image` is available under the MIT license. See the [LICENSE
file](LICENSE) for details.

## Keywords
    react,
    carousel,
    image slider,
    react component,
    react component image,
    react image component,
    react image carousel,
    react carousel image,
    slider,
    gallery,
    responsive,
    image gallery,
    image carousel,
    react library,
    UI component,
    react slider,
    carousel library,
    react image,
    media,
    photo gallery,
    animation,
    touch support
