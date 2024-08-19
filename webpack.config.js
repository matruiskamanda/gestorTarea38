const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // punto de entrada de tu aplicación
    output: {
        filename: 'bundle.js', // nombre del archivo de salida
        path: path.resolve(__dirname,'dist'),// carpeta de salida
    },
    module: {
        rules: [
            {
                test: /\.css$/, // Regex para identificar archivos CSS
                use: ['style_loader', 'css_loader'], // Loader para procesar archivos
            },
            {
                test: /\.js$/, // regex para identificar archivos js
                exclude: /node_modules/, // escluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', // loader para transpilar js moderno a js compatible con más navegadores
                    options: {
                        presets: ['@babel/preset-env'], // Preset de Babel para convertir de js moderno a versiones más antiguas
                    },
                },
            },
        ],
    },
    devtool: 'source-map', // Generar source maps para facilitar la depuración
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true, // habilitando comprensión gzip
        port: 9000, // Puerto del servidor de desarrollo 
    }
}