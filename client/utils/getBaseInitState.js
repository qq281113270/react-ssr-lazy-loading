// 这种方式需要前后命名一致才行能做到这样效果
export const getBaseInitState = async (dispatch, state) => {
    let dispatchBaseInitState = dispatch.baseInitState;
    // 函数命名必须是这样
    var reg = /(?<=^get)(.+?)(?=Async$)/g;
    // let reg1 = /Async$/g;
    for (let key in dispatchBaseInitState) {
        let dataKey = key.match(reg);
        if (dataKey) {
            dataKey =
                dataKey[0].substr(0, 1).toLocaleLowerCase() +
                dataKey[0].substr(1);
            if (state.baseInitState[dataKey]) {
                return false;
            }

            dispatchBaseInitState[key]();
        }
    }
};