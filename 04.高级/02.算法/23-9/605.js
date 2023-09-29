/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {

    //上一个是1 下一个是0 并且下一个还是0就加1
    //左右都是0 或者为空 才能++

    let count = 0

    for (let i = 0; i < flowerbed.length; i++) {

        if (flowerbed[i] === 0 && (
            !flowerbed[i - 1] && !flowerbed[i + 1]
        )) {
            flowerbed[i] = 1
            count++
        }

        if (count >= n) {
            return true
        }

    }

    return false

};
