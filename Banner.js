"use strict";
var exports = {};
exports.Banner = void 0;
var Banner = /** @class */ (function () {
    function Banner() {
        this.mainHolder = null;
        this.MooMooHolder = null;
        this.TSHolder = null;
    }
    Banner.prototype.prepareBanner = function () {
        document.body.style.background = "#3d3d3d";
        this.mainHolder = document.createElement("div");
        this.mainHolder.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            margin-left: 30px;
            margin-top: 20px;
            color: #fff;
            font: 32px Arial;
            font-weight: bold;
            width: 90px;
            height: 50px;
        `;
        document.body.appendChild(this.mainHolder);
        this.MooMooHolder = document.createElement("div");
        this.MooMooHolder.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            font: 32px Arial;
            font-weight: bold;
            color: #f0f0f0;
        `;
        this.MooMooHolder.innerHTML = "MooMoo";
        this.mainHolder.appendChild(this.MooMooHolder);
        this.TSHolder = document.createElement("div");
        this.TSHolder.style.cssText = `
            position: absolute;
            top: 0;
            right: 0;
            font-weight: bold;
            font: 24px Arial;
            color: #2F74C0;
        `;
        this.TSHolder.innerHTML = "TS";
        this.mainHolder.appendChild(this.TSHolder);
    };

    return Banner;
})();

// Create an instance of the Banner class and call the prepareBanner method
var banner = new Banner();
banner.prepareBanner();