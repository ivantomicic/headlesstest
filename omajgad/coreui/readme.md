# Common UI elements
This is the CoreUI project with the shared components for the Crowdhouse projects.

[Staging verion](https://public-static.staging.crowdhouse.ch/storybook/index.html)

[Production version](https://public-static.crowdhouse.ch/storybook/index.html)


## Install the package
`npm i -S @crowdhouse/coreui`

## Use in project
The one important change is that you now need to load the SASS files into your project and wrap your application with Theme. We recommend that you import them at the start of your project, for example in the `App.tsx`.

```javascript
import React from 'react';
import { Button, getTheme } from '@crowdhouse/coreui';
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import '@crowdhouse/coreui/dist/sass/index.scss';

const App = () => (
  <ThemeProvider theme={getTheme()}>
    <CssBaseline />
    <Button>Awesome button!</Button>
  </ThemeProvider>
);

```
This will load the base theme used in all Crowdhouse products and apply it automatically to the components.

## Use exposed libraries

### Material-ui
```
import { TextField, TextFieldProps } from '@crowdhouse/coreui/mui-core'
```

### Material-ui lab
```
import { Alert } from '@crowdhouse/coreui/mui-lab'
```

### Formik
```
import { Formik, Form, Field } from '@crowdhouse/coreui/formik'
```

# Development
## Develop side by side with your repo
Go to you project and run from the root linking script on core-ui
`../path-to-core-ui/scripts/link.sh`

Once development is done you should:
- publish the new version of CoreUI
- remove the link on the local folder
- update the Core-UI version requirement on your project's package.json

# Testing
## With using `npm pack`
It will create npm package locally which you can install in the app
1. `cd ~/Projects/core-ui`
2. `npm pack`
3. `cd ~/Projects/invest`
4. `npm i ~/Projects/core-ui/crowdhouse-coreui-21.0.0-test.0.tgz`

## With using `prerelease`
It will create prerelease package which you can use as dependency to test on your feature branch
1. `cd ~/Projects/core-ui`
2. `npm run prerelease`
3. `npm i @crowdhouse/coreui@prerelease`

# Release
Release process will be done automatically based on the merged commit by semantic-release. 
Please be sure what your PR(and commit) has proper description according to https://www.conventionalcommits.org/en/v1.0.0/#specification
 

## Scripts
Validate state of the project (test/lint/typescript check)
- `npm run validate`

Build the project as library
- `npm run prepack`

# Documentation
We are using [storybook](https://storybook.js.org/docs/react/get-started/introduction) to describe our components

There are 2 types of the stories:
- core-ui component stories (e.g. src/lib/components/Alert/index.stories.tsx)
- material-ui components stories (e.g. src/stories/MuiChip/index.stories.tsx)


### Run locally
To run storybook locally
`npm run storybook`

### Examples
Where are some stories which you can use as examples
JFYI defining props as `TextFieldExample.args ` makes typescript validation for the correctness

#### MuiChip
https://github.com/crowdhouse/core-ui/blob/master/src/stories/MuiChip/index.stories.tsx#L9
https://crowdhouse.github.io/core-ui/?path=/story/mui-components-chip--chip-example

#### Textfield
https://github.com/crowdhouse/core-ui/blob/master/src/stories/MuiTextfield/index.stories.tsx#L23
https://crowdhouse.github.io/core-ui/?path=/story/mui-components-textfield--text-field-example


# Publishing
Every merge on master triggers the CI system.

# Links:
- https://docs.npmjs.com/getting-started/publishing-npm-packages
- https://docs.npmjs.com/misc/developers
- https://docs.npmjs.com/cli/publish

