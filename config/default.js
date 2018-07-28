const apiPort = process.env.NODE_PORT || 3000;
const apiUrl = 'https://notebook-proxy.urbanstack.co';
const apiSocketUrl = 'wss://notebook-proxy.urbanstack.co';
const storageApiUrl = 'https://storage.urbanstack.co';
const nodeProxyUrl = 'http://localhost:4000';
const servicesApiUrl = 'https://notebook-services.urbanstack.co';

module.exports = {
    appName: 'Analytics',
    apps: {
        frontend: {
            api_url: apiUrl,
            api_socket_url: apiSocketUrl,
            api_port: apiPort,
            storage_api_url: storageApiUrl,
            node_proxy_url: nodeProxyUrl,
            services_api_url: servicesApiUrl,
            baseName: {
                production: '/',
                debug: '/urbanstack-analytics/build/frontend/',
            },
        },
    },
    babel_ignore: /node_modules\/(?!admin-config)/,
};
