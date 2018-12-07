function convertHTML(str) {

    /*return str
        .replace(/[&](.*)/, '&amp;')
        .replace(/[>](.*)/, '&gt;')
        .replace(/[<](.*)/, '&lt;')
        .replace(/["](.*)/, '&quot;')
        .replace(/['](.*)/, '&apos;');*/
    return str
        .replace(/[&]/g, '&amp;')
        .replace(/[<]/g, '&lt;')
        .replace(/[>]/g, '&gt;')
        .replace(/["]/g, '&quot;')
        .replace(/[']/g, '&apos;');
}

console.log(convertHTML("Dolce & ampersand > greater than < less than 'single quote \" double quote"));
