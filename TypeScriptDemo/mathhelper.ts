class MathHelper {
    static PI = 3.14;
    static circleArea(r: number): number {
        return MathHelper.PI * r * r;
    }
}
console.log(MathHelper.circleArea(2));