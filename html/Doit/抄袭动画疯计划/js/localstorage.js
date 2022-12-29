/* 保存 */
function save(key, arr) {
    localStorage[key] = JSON.stringify(arr);
}
/* 读取 */
function read(key) {
    if (localStorage[key] != null) {
        return JSON.parse(localStorage[key]);
    }
}
/* 清空 */
function clear() {
    localStorage.clear();
}