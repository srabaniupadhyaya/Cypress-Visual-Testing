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


Client options
Update baseline client option
In order to reduce manual work a cli option is available to copy over the comparison images into the baseline folder when there is a test failure.

Update all baseline images for failing tests
Notice that you should run this command after the test suite runs. The below command will only update baseline images that have a diff image, which basically means a test failure.

$ cypress-image-diff -u

It's important that you ensure the comparison image is the correct representation of the page under test as it will be copied over to the baseline.