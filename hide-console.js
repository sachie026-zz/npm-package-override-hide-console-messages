function initHideConsole(n = []) {
    var o, i = (o = window.console, {
        log: function(i) {
            n.includes("log") || o.log(i)
        },
        info: function(i) {
            n.includes("info") || o.info(i)
        },
        warn: function(i) {
            n.includes("warn") || o.warn(i)
        },
        error: function(i) {
            n.includes("error") || o.error(i)
        }
    });
    window.console = i
}
module.exports = initHideConsole;