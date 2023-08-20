# Design Tokens
[![Release](https://github.com/crowdhouse/design-tokens/actions/workflows/release.yml/badge.svg)](https://github.com/crowdhouse/design-tokens/actions/workflows/release.yml)
[![test](https://github.com/crowdhouse/design-tokens/actions/workflows/test.yml/badge.svg)](https://github.com/crowdhouse/design-tokens/actions/workflows/test.yml)

[Domus](https://zeroheight.com/6tcgsmy4n/p/85bc42-domus-design-system) is our design system and tokens are our design decisions, represented as data for a systematically unified and cohesive Crowdhouse experience.

## Creation
We export Design Tokens from Figma using the [Figma Token plugin](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens). The export happens in the various style libraries that we have setup in Figma.

1. Select one of the libraries to export a fresh token export:

* [Colors](https://www.figma.com/file/vvIEFgQqjCQFolVWFKQ9vA/Colors?node-id=0%3A1)

2. From the Figma menu bar: select `'Plugins' > 'Design Tokens' > 'Settings'`

* In the plugin settings, set 'Name conversion' to `camelCase`.
* In the plugin settings, within 'Token prefixes', disable 'Include token prefix in token names'.

3. From the Figma menu bar: select `'Plugins' > 'Design Tokens' > 'Export Design Token File'`. Set the name to the expected file name in the Github project e.g. `colors.json`

5. Share the file with a developer or make a PR to update the file in the design tokens package.

## Usage
Here's how you can use the tokens in your project:

### React
```
import { colors } from '@crowdhouse/design-tokens'
...
const myBackground = colors.base.ectasy
...
```

### Sass
```
@import '~@crowdhouse/design-tokens/colors';

div {
  color: $colors-base-grey800;
  background-color: $colors-base-blueLagoon100;
}

```

## Development
To update package
1. Create feature branch, e.g. `git checkout -b change-info-color`
2. Make an update e.g. change color in colors.json
3. Commit the changes
4. Increment version, for example `npm version patch`
5. Push the change and ask request a pull request review
6. After the publishing new color will become available within the package, mentioned in the **Usage** section 


