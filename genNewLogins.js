// 1 - Method using the binary number system:
const genNewLogins1 = (str) => {
    if (str.length <= 1) return [str];

    let result = [str.split('').join('.')];

    for (let i = 2 ** (str.length - 1); i < 2 ** str.length - 1; i++) {
        let newStr = '';
        let arr = str.split('');
        let points = i.toString(2).slice(1).split('');

        while (arr.length) {
            let value = points.splice(0, 1).join('') === '1' ? '.' : '';
            newStr += arr.splice(0, 1).join('') + value;
        }
        result.push(newStr);
    }
    return result.sort();
}

// 2 - Method using recursion:
function genNewLogins2(str) {
    const arr = str.substring(0, str.length - 1).split('');
    let result = [];

    function fun(arr, valuesBefore) {
        let [value, ...rest] = arr;

        if (arr.length === 0) {
            result.push(valuesBefore + str[str.length - 1]);
            return;
        }

        return [{
            nextValues: fun(rest, !valuesBefore ? value : (valuesBefore + value)),
        }, {
            nextValues: fun(rest, !valuesBefore ? value + '.' : (valuesBefore + value + '.')),
        }];
    }

    fun(arr);
    return result.sort();
}

// Checking two methods:
console.log(genNewLogins1('abcde'));
console.log( genNewLogins2('abcde') );

