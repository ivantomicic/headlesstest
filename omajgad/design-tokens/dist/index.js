"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typography = exports.colors = void 0;
var colors_pure_json_1 = require("./colors.pure.json");
Object.defineProperty(exports, "colors", { enumerable: true, get: function () { return __importDefault(colors_pure_json_1).default; } });
// Needed because typography json uses default as a key
const typography_pure_json_1 = __importDefault(require("./typography.pure.json"));
exports.typography = typography_pure_json_1.default;
