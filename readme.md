# Knockout POC

## Installation

1. Download and install node from https://nodejs.org/
2. Download and install git from https://git-scm.com/\
3. Navigate to any folder clone the repo to, e.g. 'Repos'
4. Open 'Git Bash' from Start menu and switch to the folder
```
cd /d/Repos
```
5. Install bower and gulp globally (maybe optional)
```
npm install -g bower
npm install -g gulp
```
6. Clone the repo to the folder
```
git clone https://github.com/trickbz/knockout
```
7. Switch to the cloned folder
```
cd knockout
```
8. Install npm packanges
```
npm install
```
9. Install bower packanges
```
bower install
```
10. Start a server using gulp task within the cloned folder
```
gulp
```
11. Open a browser and go to http://localhost:3000
10. Use Visual Studio Code (VS Code) as IDE, it's cool. Install from https://code.visualstudio.com/, right click the ```knockout``` folder and choose ```Open with Code```. 

## Requirements

1. Create an HTML page.
2. That page must be using Knockout JS for model management.
3. Add several data-controls to the page, two-way bind them to Knockout JS (JQuery UI controls: date picker, drop-down, combo-box with autocomplete, text box, number editor, tag editor like in Salary Review in LMS).
4. Add a Slick Grid to the page, two way bind it to the model.
5. In the grid VIEW mode there must be columns of such types: buttons (edit + delete), checkbox (or check that the grid supports selection), hyperlink.
6. In the grid, clicking Edit in a row must lead to activating row edit mode (Save + Cancel buttons appear instead of Edit/Delete). Cells in the row must get data-controls activated, but the values from these controls must get to the KnockoutJS model just after user clicks the Save button and the data was successfully validated and saved on the server-side.
7. Enable maximum features in the Slick Grid control (client-side grouping, sorting, filtering).
8. Make sure we have full programmatic control over the current Slick Grid settings.