# Icons
[![CI deploy](https://github.com/crowdhouse/icons/workflows/CI%20deploy/badge.svg?branch=master)](https://github.com/crowdhouse/icons/actions?query=workflow%3A%22CI+deploy%22)

Collection of icons used by Crowdhouse applications. A visual overview of all icons can be found [here](https://zeroheight.com/6tcgsmy4n/p/7377ff-icons).

## Versioning
All `npm` packages have semantic versions, for example `1.2.3`, where `1` is the major, `2` is the minor and `3` is the patch version. Every change within this library needs to be accompanied by a change in one of these version numbers. Use the following to decide which version to update:

- major version: changes that change the look and feel of the icons in any way, such as colors, shapes, removal of icons, and so on
- minor version: new non-breaking features such as new icons that do not change existing icons in any way
- patch: non-breaking refactoring, such as improving the filesize of an icon, but without changing the look and feel of the icon in any way

## Tools
Install `git` client by googling `git for mac` and `node for mac`.

## Workflow
The following workflow ensures releases are easy and smooth as fuck. 

Open `terminal`.

If you've never checked out the project before, check it out by executing `git clone https://github.com/crowdhouse/icons.git`. Provide your credentials if necessary.

Go into the checked out folder, ex. `cd icons`.

Make sure you are on the `master` branch: `git checkout master`

Clone the master branch into your "feature" branch. Example to clone into a local branch called `breno/new-download-icon` execute  `git checkout -b breno/new-download-icon`

Update, delete or add new icons, and decide on the nature of the change: major, minor, patch.

If you added new icons, ensure they are all added to the repository by executing `git add .`

Check the changes you have in your local branch with `git status`.

Commit all your changes with `git commit -m "commit message"`.

Update the relevant version number with `npm version [minor|major|patch]`.

Push changes to your remote branch with `git push -u origin breno/new-download-icon`.

Create pull request from your branch `breno/new-download-icon` to `master` and add your reviewers.

Beg your colleagues to review your changes already.

Once reviewed, merge pull request. This will trigger a release.
