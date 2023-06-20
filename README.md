# Developer Documentation: Amazone Slider Code

## Introduction

The Amazone Slider code is responsible for creating a sliding effect for a container element with multiple sections. It allows users to navigate through the sections using mouse scroll and provides smooth transitions between sections. The code also includes functionality to hide/show certain elements based on the active section.

## Usage

To use the Amazone Slider code, you need to include it within an HTML document. Make sure to have the necessary HTML elements with corresponding IDs and CSS styles defined. The code relies on specific element IDs to target and manipulate the slider behavior.

## Key Functionality

1. Scroll Navigation:
   - The code listens for mouse scroll events and determines the scroll direction (up or down).
   - If the user is at the header section and scrolls down, it scrolls smoothly to the slider section and hides the header.
   - If the user is within the slider section and scrolls up, it scrolls smoothly to the previous section (section 1) and shows the header.
   - If the user is at the last section of the slider and scrolls down, it scrolls smoothly to the bottom of the page.

2. Sliding Animation:
   - The code adjusts the position of the slider container element (`translateSlider`) vertically to create a sliding effect.
   - It maintains an `active` variable to keep track of the current active section index.
   - The `active` index is incremented or decremented based on the scroll direction, and the container is transformed accordingly.
   - The sliding animation is controlled by manipulating the `transform` CSS property of the container element.

3. Section Visibility:
   - The code iterates over the elements with the class `.sideSection` and shows/hides them based on the active section.
   - The `active` index is used to determine which section should be displayed, while hiding the others.
   - The visibility of sections is controlled by setting the `display` CSS property of the elements.

## Code Structure

The provided code is written in JavaScript and enclosed within a `<script>` tag. It consists of several variables and event listeners to handle scroll and slider functionality.

### Variables

- `active`: Represents the index of the currently active section.
- `max`: Represents the total number of sections in the slider.
- `canScroll`: A boolean flag to control whether scrolling is allowed.
- `container`: Reference to the slider container element with the ID `"translateSlider"`.
- `mouseScrollContainer`: Reference to the mouse scroll container element with the ID `"amazone-slider"`.
- `containerHeight`: The height (in pixels) of each section within the container.
- `header`: Reference to the header element with the ID `"amazone-header"`.
- `currentHeight`: The cumulative height (in pixels) to calculate the vertical translation of the container.
- `isAtHeader`: A boolean flag to track if the user is at the header section.
- `isAtSlider`: A boolean flag to track if the user is within the slider section.
- `section1`: Reference to the first section element with the ID `"amazone-section1"`.

### Event Listeners

- `wheel` event listener:
  - Listens for mouse scroll events on the document.
  - Determines the scroll direction and triggers appropriate actions based on the user's position.
  - Scrolls to the slider section, hides the header, and updates the flag values accordingly.

- `mousewheel` event listener:
  - Listens for mouse scroll events specifically on the mouse scroll container element.
  - Prevents default scrolling behavior if the user is not within the slider section.
  - Determines the scroll direction and triggers appropriate actions based on the user's position and scroll direction.
  - Scrolls to the previous section or the bottom of the page based on the scroll direction and active section.
  - Updates the active section index, animates the sliding effect, and controls section visibility.

### Section Visibility

The code includes a loop that iterates over elements with the class `.sideSection`.

- It checks the class name of each element to determine if it corresponds to the active section.
- If a section's class matches the active section, its `display` property is set to `null` (default value).
- All other sections have their `display` property set to `"none"` to hide them.

## Summary

The Amazone Slider code enables smooth scrolling and sliding effects for a container element with multiple sections. It provides a visually appealing transition between sections, hides/shows elements based on the active section, and allows scrolling navigation through the sections. The code relies on specific element IDs and CSS styles for proper functionality.
