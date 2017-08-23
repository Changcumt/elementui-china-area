var data = require('./data');

var areas = [];

for (var key1 in data['86']) {
    // 获取省一级数据
    var temp1 = {
        value: key1,
        label: data['86'][key1],
        children: []
    }
    for (var key2 in data[key1]) {
        // 获取市一级数据
        var temp2 = {
            value: key2,
            label: data[key1][key2],
            children: []
        }
        for (var key3 in data[key2]) {
            // 获取市一级数据
            var temp3 = {
                value: key3,
                label: data[key2][key3]
            }
            temp2.children.push(temp3)
        }

        temp1.children.push(temp2)
    }

    areas.push(temp1)
}

var fs = require("fs");

fs.writeFile('element-data.js', 'module.exports =' + JSON.stringify(areas), function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
});