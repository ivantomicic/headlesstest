"use strict";

var _styles = require("@mui/material/styles");
var _getTypographyByTheme = require("./getTypographyByTheme");
describe('getTypographyByTheme', function () {
  it('returns proper typography set', function () {
    var muiTheme = (0, _styles.createTheme)({
      typography: {
        fontFamily: 'Arial'
      }
    });
    var result = (0, _getTypographyByTheme.getTypographyByTheme)(muiTheme, {
      h1: {
        default: {
          fontSize: 400
        },
        desktop: {
          fontSize: 500
        }
      },
      h2: {
        default: {
          fontSize: 200
        }
      }
    });
    expect(result).toMatchSnapshot();
  });
});