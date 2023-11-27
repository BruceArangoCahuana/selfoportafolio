const swaggerDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const UserSwa = require("./swaggerDefinitions/User/UserSwa");
const GeneralSwa = require("./swaggerDefinitions/General/GeneralSwa");
const SkillSwa = require("./swaggerDefinitions/Skill/SkillSwa");
const LenguajeSwa = require("./swaggerDefinitions/Lenguaje/LenguajeSwa");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "selflporta API",
            version: '1.0.0'
        }
    },
    apis: [
        "./Router/User/UserSwa.js",
        './Router/generals/GeneralSwa.js',
        './Router/Skill/SkillSwa.js',
        './Router/Skill/LenguajeSwa.js'
    ]
};



const swaggerSpec = swaggerDoc(options);


/**
 * DEFINICION DE RUTAS DE SWAGGER
 * **/

swaggerSpec.paths["/users/list"] = {
    get: UserSwa.usersList
};
swaggerSpec.paths["/users/list/{id}"] = {
    get: UserSwa.userById
};

swaggerSpec.paths["/users/update/{id}"] = {
    put: UserSwa.updateUserById
};

swaggerSpec.paths["/generals/list"] = {
    get: GeneralSwa.generalList
};
swaggerSpec.paths["/generals/list/{id}"] = {
    get: GeneralSwa.generalById
};
swaggerSpec.paths["/generals/update/{id}"] = {
    put: GeneralSwa.updateGeneralById
};
swaggerSpec.paths["/generals/update/{id}"] = {
    put: GeneralSwa.updateGeneralById
};

swaggerSpec.paths["/skill/create"] = {
    post: SkillSwa.createSkill
};

swaggerSpec.paths["/skill/list"] = {
    get: SkillSwa.skillList
};

swaggerSpec.paths["/skill/list/{id}"] = {
    get: SkillSwa.skillById
};

swaggerSpec.paths["/skill/update/{id}"] = {
    put: SkillSwa.updateSkillById
};

swaggerSpec.paths["/lenguaje/create"] = {
    post: LenguajeSwa.createLenguaje
};

swaggerSpec.paths["/lenguaje/list"] = {
    get: LenguajeSwa.lenguajeList
};

swaggerSpec.paths["/lenguaje/list/{id}"] = {
    get: LenguajeSwa.lenguajeById
};

const swaggerDocs = (app, port) => {
    app.get('/docs.json', (req, res, next) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Server running on http://localhost:${port}/docs`);
};


module.exports = {swaggerDocs}