const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '30px',
    container: {
        maxWidth: '1920px',
        fields: '200px'
    },
    breakPoints: {
        md: {
            width: "1024px",
            fields: "15px"
        },
        sm: {
            width: "760px",
            fields: "10px"
        },
        xs: {
            width: "480px",
            fields: "5px"
        }
    },
    oldSizeStyle: false,
    outputStyle: 'scss',
    mobileFirst: false
};

smartgrid('./src/sass', settings);