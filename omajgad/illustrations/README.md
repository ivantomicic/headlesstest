# Illustrations
Collection of illustrations used by Crowdhouse applications.

## Versioning
All `npm` packages have semantic versions, for example `1.2.3`, where `1` is the major, `2` is the minor and `3` is the patch version. Every change within this library needs to be accompanied by a change in one of these version numbers. Use the following to decide which version to update:

- major version: changes that change the look and feel of the illustrations in any way, such as colors, shapes, removal of illustrations, and so on
- minor version: new non-breaking features such as new illustrations that do not change existing illustrations in any way
- patch: non-breaking refactoring, such as improving the filesize of an illustration, but without changing the look and feel of the illustration in any way

## Tools
Install `git` client by googling `git for mac` and `node for mac`.

## Workflow
The following workflow ensures releases are easy and smooth as fuck. 

Open `terminal`.

If you've never checked out the project before, check it out by executing `git clone https://github.com/crowdhouse/illustrations.git`. Provide your credentials if necessary.

Go into the checked out folder, ex. `cd illustrations`.

Make sure you are on the `master` branch: `git checkout master`

Clone the master branch into your "feature" branch. Example to clone into a local branch called `breno/new-download-illustration` execute  `git checkout -b breno/new-download-illustration`

Update, delete or add new illustrations, and decide on the nature of the change: major, minor, patch.

If you added new illustrations, ensure they are all added to the repository by executing `git add .`

Check the changes you have in your local branch with `git status`.

Commit all your changes with `git commit -m "commit message"`.

Update the relevant version number with `npm version [minor|major|patch]`.

Push changes to your remote branch with `git push -u origin breno/new-download-illustration`.

Create pull request from your branch `breno/new-download-illustration` to `master` and add your reviewers.

Beg your colleagues to review your changes already.

Once reviewed, merge pull request. This will trigger a release.
