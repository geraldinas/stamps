![app_image](/app_image.png)
# Stamp Vector Image App

An interactive web application that allows users to place random stamp images on the screen through clicks, taps, or keyboard interactions.

## Features
- Does not use any framweworks & uses plain CSS 
- Random stamp placement on mouse click
- Touch support for mobile devices
- Keyboard interaction (spacebar)
- Responsive design
- Debounced event handling for performance
- Accessibility support
- Stamps are randomly selected from a predefined array of images
- Responsive to viewport sizes


### Core Components

- `index.html`: Main entry point with basic structure and accessibility attributes
- `app.js`: Core application logic for stamp creation and placement
- `style.css`: Styling and responsive design rules

### Event Handling

The application handles three types of interactions:
- Mouse clicks
- Touch events
- Keyboard events (spacebar)

Events are debounced to prevent performance issues.

## Accessibility

- ARIA labels for better screen reader support
- Keyboard navigation support
- Semantic HTML structure
- High contrast visual elements


## Future ToDOS

- options for stamp size and behavior
- Additional animation effects
- local storage for saving stamp positions
