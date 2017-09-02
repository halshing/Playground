(function () {
    if (!Array.prototype.unique) {
        Array.prototype.unique = function () {
            var u = [];
            for (var i = 0; i < this.length; i++) {
                if (u.indexOf(this[i]) > -1) continue;
                u.push(this[i]);
            }
            return u;
        }
    }
})();