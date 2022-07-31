import { dispatch, getState } from '@rematch/core';
import axios from 'axios';

// 路由配置
export default [
    {
        path: '/',
        exact: true,
        name: 'home',
        entry: `/pages/Home/index.js`,
        initState: async (parameter = {}) => {
            const { page = 1, size = 10 } = parameter;

            // https://api.apiopen.top/api/getHaoKanVideo?page=2&size=10

            return await axios
                .get(
                    ` https://api.apiopen.top/api/getHaoKanVideo?page=${page}&size=${size}`
                )
                .then((res) => {
                    const {
                        code,
                        data: { result: { list = [], total } = {} } = {},
                    } = res;
                    return {
                        list: list.map((item) => {
                            return {
                                ...item,
                                url: item.userPic,
                            };
                        }),
                        total,
                    };
                })
                .catch((err) => {
                    console.log('Error: ', err.message);
                });
        },
        level: 1,
    },
    {
        path: '/user',
        name: 'user',
        entry: `/pages/User/index.js`,
        level: 1,
    },
];