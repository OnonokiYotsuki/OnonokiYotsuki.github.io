/* 保存 把arr保存到key*/
function save(key, arr) {
    localStorage[key] = JSON.stringify(arr);
}
/* 读取 读取key*/
function read(key) {
    if (localStorage[key] != null) {
        return JSON.parse(localStorage[key]);
    }
}
/* 编辑key的值 修改key里面的数组当中name为who的数据,把which里的值改为val*/
function editKeyValue(key, name, who, which, val) {
    let newArray = read(key).map(obj => {
        if (obj[name] === who) {
            return { ...obj, [which]: val };  // 修改psw属性的值为'456'
        }
        return obj;
    });
    save(key, newArray);
}
/* 删除key的数组里面的name的值与del匹配的整条数据 */
function removeKeyValue(key, name, del) {
    let newArray = read(key).filter(obj => obj[name] !== del);
    save(key, newArray)
}
/* 清空 清空指定的key*/
function clearItem(key) {
    localStorage.removeItem(key);
}
/* 清空所有key */
function clearAll() {
    localStorage.clear();
}
/*  .保存数据：localStorage.setItem(key,value);
    .读取数据：localStorage.getItem(key);
    .删除单个数据：localStorage.removeItem(key);
    .删除所有数据：localStorage.clear();
    .得到某个索引的key：localStorage.key(index); */
/*  数据储存：
    .使用 JSON.stringify() 来将对象转换为字符串，
    .使用localStorage.setItem(key, value); 保存数据。 */
/*  数据提取：
    .使用localStorage.getItem(key)读取数据
    . 使用 JSON.parse 方法将字符串转换为 JSON 对象。*/