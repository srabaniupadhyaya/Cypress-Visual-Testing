# Cypress-Visual-Testing

Visual regression test with cypress

This tool was created to make visual regression as simple as possible, by exposing basic functions that allow you to view the difference between images. The wrapper uses pixelmatch which is simple and powerful and relies on cypress to take screenshots.


Folder structure
This folder structure will be created by default at the root of your project where your package.json lives:

    .
    +-- cypress-image-diff-screenshots
        +-- baseline
        +-- comparison
        +-- diff
    +-- cypress-image-diff-html-report
