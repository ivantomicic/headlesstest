"use strict";
// To parse this data:
//
//   import { Convert, TypographyQuicktype } from "./file";
//
//   const typographyQuicktype = Convert.toTypographyQuicktype(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = exports.TextCase = exports.FontSt = exports.FontFamily = exports.TextDecoration = void 0;
var TextDecoration;
(function (TextDecoration) {
    TextDecoration["None"] = "none";
    TextDecoration["Underline"] = "underline";
})(TextDecoration = exports.TextDecoration || (exports.TextDecoration = {}));
var FontFamily;
(function (FontFamily) {
    FontFamily["SourceSansProSourceSansProArialSansSerif"] = "\"source-sans-pro\", \"Source Sans Pro\", Arial, sans-serif";
})(FontFamily = exports.FontFamily || (exports.FontFamily = {}));
var FontSt;
(function (FontSt) {
    FontSt["Normal"] = "normal";
})(FontSt = exports.FontSt || (exports.FontSt = {}));
var TextCase;
(function (TextCase) {
    TextCase["None"] = "none";
    TextCase["Uppercase"] = "uppercase";
})(TextCase = exports.TextCase || (exports.TextCase = {}));
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
class Convert {
    static toTypographyQuicktype(json) {
        return cast(JSON.parse(json), r("TypographyQuicktype"));
    }
    static typographyQuicktypeToJson(value) {
        return JSON.stringify(uncast(value, r("TypographyQuicktype")), null, 2);
    }
}
exports.Convert = Convert;
function invalidValue(typ, val, key = '') {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}
function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}
function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        const map = {};
        typ.props.forEach((p) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}
function transform(val, typ, getProps, key = '') {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val)
            return val;
        return invalidValue(typ, val, key);
    }
    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            }
            catch (_) { }
        }
        return invalidValue(typs, val);
    }
    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1)
            return val;
        return invalidValue(cases, val);
    }
    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val))
            return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }
    function transformDate(val) {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }
    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }
    if (typ === "any")
        return val;
    if (typ === null) {
        if (val === null)
            return val;
        return invalidValue(typ, val);
    }
    if (typ === false)
        return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ))
        return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number")
        return transformDate(val);
    return transformPrimitive(typ, val);
}
function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}
function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}
function a(typ) {
    return { arrayItems: typ };
}
function u(...typs) {
    return { unionMembers: typs };
}
function o(props, additional) {
    return { props, additional };
}
function m(additional) {
    return { props: [], additional };
}
function r(name) {
    return { ref: name };
}
const typeMap = {
    "TypographyQuicktype": o([
        { json: "desktop", js: "desktop", typ: r("Desktop") },
        { json: "mobile", js: "mobile", typ: r("Desktop") },
        { json: "default", js: "default", typ: r("Default") },
    ], false),
    "Default": o([
        { json: "subtitle2", js: "subtitle2", typ: r("Button") },
        { json: "caption", js: "caption", typ: r("Button") },
        { json: "overline", js: "overline", typ: r("Button") },
        { json: "button", js: "button", typ: r("Button") },
        { json: "body1", js: "body1", typ: r("Body1") },
        { json: "body2", js: "body2", typ: r("Body2") },
    ], false),
    "Body1": o([
        { json: "normal", js: "normal", typ: r("Button") },
        { json: "strong", js: "strong", typ: r("Strong") },
        { json: "link", js: "link", typ: r("Link") },
    ], false),
    "Link": o([
        { json: "textDecoration", js: "textDecoration", typ: r("TextDecoration") },
        { json: "lineHeight", js: "lineHeight", typ: "" },
    ], false),
    "Button": o([
        { json: "fontSize", js: "fontSize", typ: 0 },
        { json: "textDecoration", js: "textDecoration", typ: r("TextDecoration") },
        { json: "fontFamily", js: "fontFamily", typ: r("FontFamily") },
        { json: "fontWeight", js: "fontWeight", typ: 0 },
        { json: "fontStyle", js: "fontStyle", typ: r("FontSt") },
        { json: "fontStretch", js: "fontStretch", typ: r("FontSt") },
        { json: "letterSpacing", js: "letterSpacing", typ: 3.14 },
        { json: "lineHeight", js: "lineHeight", typ: "" },
        { json: "paragraphIndent", js: "paragraphIndent", typ: 0 },
        { json: "paragraphSpacing", js: "paragraphSpacing", typ: 0 },
        { json: "textCase", js: "textCase", typ: r("TextCase") },
    ], false),
    "Strong": o([
        { json: "fontWeight", js: "fontWeight", typ: 0 },
        { json: "lineHeight", js: "lineHeight", typ: "" },
    ], false),
    "Body2": o([
        { json: "normal", js: "normal", typ: r("Button") },
        { json: "strong", js: "strong", typ: r("Strong") },
        { json: "link", js: "link", typ: r("Button") },
    ], false),
    "Desktop": o([
        { json: "h1", js: "h1", typ: r("Button") },
        { json: "h2", js: "h2", typ: r("Button") },
        { json: "h3", js: "h3", typ: r("Button") },
        { json: "h4", js: "h4", typ: r("Button") },
        { json: "h5", js: "h5", typ: r("Button") },
        { json: "h6", js: "h6", typ: r("Button") },
        { json: "subtitle1", js: "subtitle1", typ: r("Button") },
    ], false),
    "TextDecoration": [
        "none",
        "underline",
    ],
    "FontFamily": [
        "\"source-sans-pro\", \"Source Sans Pro\", Arial, sans-serif",
    ],
    "FontSt": [
        "normal",
    ],
    "TextCase": [
        "none",
        "uppercase",
    ],
};
