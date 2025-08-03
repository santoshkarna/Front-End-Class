var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.circleArea = function (r) {
        return MathHelper.PI * r * r;
    };
    MathHelper.PI = 3.14;
    return MathHelper;
}());
console.log(MathHelper.circleArea(2));
