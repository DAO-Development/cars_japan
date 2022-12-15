import {resolve} from 'path'

const pages = [
    {name: 'main', path: resolve(__dirname, 'index.html')},
    {name: 'autoauction-online', path: resolve(__dirname, 'autoauction-online.html')},
    {name: 'about-company', path: resolve(__dirname, 'about-company.html')},
    {name: 'buy-car', path: resolve(__dirname, 'buy-car.html')},
    {name: 'product-page', path: resolve(__dirname, 'product-page.html')},
    {name: 'delivery', path: resolve(__dirname, 'delivery.html')},
];

const pagesInput = {}
pages.forEach((page => {
    pagesInput[page.name] = page.path
}));


export default {
    build: {
        rollupOptions: {
            input: {
                ...pagesInput
            },
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`
            }
        }
    }
}