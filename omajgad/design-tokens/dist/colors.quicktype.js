"use strict";
// To parse this data:
//
//   import { Convert, ColorsQuicktype } from "./file";
//
//   const colorsQuicktype = Convert.toColorsQuicktype(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = void 0;
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
class Convert {
    static toColorsQuicktype(json) {
        return cast(JSON.parse(json), r("ColorsQuicktype"));
    }
    static colorsQuicktypeToJson(value) {
        return JSON.stringify(uncast(value, r("ColorsQuicktype")), null, 2);
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
    "ColorsQuicktype": o([
        { json: "background", js: "background", typ: r("Background") },
        { json: "text", js: "text", typ: r("Text") },
        { json: "link", js: "link", typ: r("Link") },
        { json: "functional", js: "functional", typ: r("Functional") },
        { json: "brand", js: "brand", typ: r("Brand") },
        { json: "feature", js: "feature", typ: r("Feature") },
        { json: "base", js: "base", typ: r("Base") },
    ], false),
    "Background": o([
        { json: "app", js: "app", typ: "" },
        { json: "surface", js: "surface", typ: "" },
    ], false),
    "Base": o([
        { json: "ecstasy", js: "ecstasy", typ: "" },
        { json: "ecstasy100", js: "ecstasy100", typ: "" },
        { json: "blueLagoon", js: "blueLagoon", typ: "" },
        { json: "blueLagoon100", js: "blueLagoon100", typ: "" },
        { json: "blueLagoon700", js: "blueLagoon700", typ: "" },
        { json: "blueLagoon800", js: "blueLagoon800", typ: "" },
        { json: "black", js: "black", typ: "" },
        { json: "grey800", js: "grey800", typ: "" },
        { json: "grey700", js: "grey700", typ: "" },
        { json: "grey600", js: "grey600", typ: "" },
        { json: "grey400", js: "grey400", typ: "" },
        { json: "grey300", js: "grey300", typ: "" },
        { json: "grey250", js: "grey250", typ: "" },
        { json: "grey200", js: "grey200", typ: "" },
        { json: "grey100", js: "grey100", typ: "" },
        { json: "white", js: "white", typ: "" },
        { json: "red", js: "red", typ: "" },
        { json: "red100", js: "red100", typ: "" },
        { json: "red400", js: "red400", typ: "" },
        { json: "red800", js: "red800", typ: "" },
        { json: "green", js: "green", typ: "" },
        { json: "green100", js: "green100", typ: "" },
        { json: "green400", js: "green400", typ: "" },
        { json: "green800", js: "green800", typ: "" },
        { json: "yellow", js: "yellow", typ: "" },
        { json: "yellow100", js: "yellow100", typ: "" },
        { json: "yellow400", js: "yellow400", typ: "" },
        { json: "yellow800", js: "yellow800", typ: "" },
        { json: "deepPurple", js: "deepPurple", typ: "" },
        { json: "deepPurple100", js: "deepPurple100", typ: "" },
        { json: "deepPurple400", js: "deepPurple400", typ: "" },
        { json: "deepPurple800", js: "deepPurple800", typ: "" },
        { json: "blue", js: "blue", typ: "" },
        { json: "blue200", js: "blue200", typ: "" },
        { json: "blue800", js: "blue800", typ: "" },
        { json: "pink", js: "pink", typ: "" },
        { json: "pink100", js: "pink100", typ: "" },
        { json: "pink400", js: "pink400", typ: "" },
        { json: "pink800", js: "pink800", typ: "" },
    ], false),
    "Brand": o([
        { json: "primary", js: "primary", typ: "" },
        { json: "primaryLight", js: "primaryLight", typ: "" },
        { json: "secondary", js: "secondary", typ: "" },
        { json: "secondaryLight", js: "secondaryLight", typ: "" },
        { json: "primaryAccessible", js: "primaryAccessible", typ: "" },
    ], false),
    "Feature": o([
        { json: "bidding", js: "bidding", typ: "" },
        { json: "biddingLight", js: "biddingLight", typ: "" },
        { json: "mapMatching", js: "mapMatching", typ: "" },
        { json: "broker", js: "broker", typ: "" },
        { json: "brokerLight", js: "brokerLight", typ: "" },
    ], false),
    "Functional": o([
        { json: "success", js: "success", typ: "" },
        { json: "successLight", js: "successLight", typ: "" },
        { json: "successDark", js: "successDark", typ: "" },
        { json: "warning", js: "warning", typ: "" },
        { json: "warningLight", js: "warningLight", typ: "" },
        { json: "warningDark", js: "warningDark", typ: "" },
        { json: "error", js: "error", typ: "" },
        { json: "errorLight", js: "errorLight", typ: "" },
        { json: "errorDark", js: "errorDark", typ: "" },
        { json: "info", js: "info", typ: "" },
        { json: "infoLight", js: "infoLight", typ: "" },
        { json: "infoDark", js: "infoDark", typ: "" },
    ], false),
    "Link": o([
        { json: "default", js: "default", typ: "" },
        { json: "hover", js: "hover", typ: "" },
        { json: "defaultInverse", js: "defaultInverse", typ: "" },
        { json: "hoverInverse", js: "hoverInverse", typ: "" },
    ], false),
    "Text": o([
        { json: "primary", js: "primary", typ: "" },
        { json: "secondary", js: "secondary", typ: "" },
        { json: "primaryInverse", js: "primaryInverse", typ: "" },
        { json: "secondaryInverse", js: "secondaryInverse", typ: "" },
    ], false),
};
