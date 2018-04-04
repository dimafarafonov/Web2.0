function isIPAddress(ip) {

    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\./.test(ip)) {
        return (true);
    }
    return (false);
}

function isRGBA(text) {
    var rgbaRegex = /rgba\(((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\s?,\s?){3}([0-1]|0.\d))\)/g;
    return text.match(rgbaRegex) !== null ? text.match(rgbaRegex) : null;
}

function findHexColor(text){
    var re = /#[a-f0-9]{6}/gi;
    return text.match(re) !== null ? text.match(re) : null;
}

function findTags(text, tag) {
    var tagRegex = new RegExp("<" + tag + ">","g");
    return text.match(tagRegex) !== null ? text.match(tagRegex) : null;
}

function findPosNum(text) {
    var posRegex = /\d+(\.\d+)?/g;
    return text.match(posRegex) !== null ? text.match(posRegex) : null;
}

function findDates(text) {
    var datesRegex = /(19|20)\d\d-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])/g;
    return text.match(datesRegex) !== null ? text.match(datesRegex) : null;
}



