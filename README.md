# gds-frontend
Basic sandbox scaffolding of a GDS frontend in Javascript, with next.js and govuk-react components blended with HTML and govuk-frontend CSS.

## Directory Structure

`app` - contains all the pages for the front end, folder structure equals url path
`src` - contains all the shared code for the front end, such as components, utils, styles, etc.

## Build

Post npm install, the gov uk min css, js files and any static media (such as crown logo) should be copied from govuk-frontend in `node_modules/` to the relevant locations in this repository/