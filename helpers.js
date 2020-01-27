const compressArray = arr =>  {

    const compressed = [];
    const newArr = [...arr];

    for (let i = 0; i < arr.length; i++) {
        let myCount = 0;
        for (let w = 0; w < newArr.length; w++) {
            if (arr[i] === newArr[w]) {
                myCount++;
                delete newArr[w];
            }
        }

        if (myCount > 0) {
            const a = {
                value: arr[i],
                count: myCount
            };
            compressed.push(a);
        }
    }

    return compressed;
};

module.exports = compressArray;