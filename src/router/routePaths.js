export default [
    {
        path: '/marketing/discount-coupon',
        exact: false,
        name: 'DiscountCoupon',
        entry: '/pages/marketing/pages/DiscountCoupon/index.js',
        routesConfigPath:
            'C:/Users/86185/Desktop/React-universal-ssr-master/src/pages/marketing/router/routesConfig.js',
        level: 2,
    },
    {
        path: '/marketing',
        exact: true,
        name: 'marketing',
        entry: '/pages/marketing/index.js',
        routesConfigPath:
            'C:/Users/86185/Desktop/React-universal-ssr-master/src/pages/marketing/router/routesConfig.js',
        level: 2,
    },
    {
        path: '/',
        exact: true,
        name: 'home',
        entry: '/pages/Home/index.js',
        routesConfigPath:
            'C:/Users/86185/Desktop/React-universal-ssr-master/src/router/routesConfig.js',
        level: 1,
    },
    {
        path: '/user',
        exact: false,
        name: 'user',
        entry: '/pages/User/index.js',
        routesConfigPath:
            'C:/Users/86185/Desktop/React-universal-ssr-master/src/router/routesConfig.js',
        level: 1,
    },
];
