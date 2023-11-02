module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-nested'), // esto manejará el anidamiento
        require('tailwindcss'),
        require('autoprefixer'),
    ],
};
