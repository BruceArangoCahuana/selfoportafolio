module.exports = {
    usersList: {
        summary: "Obtiene una lista de usuarios",
        description: "Obtiene una lista de usuarios registrados en la aplicación.",
        tags: ["Users"],
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                status: {
                                    type: "string",
                                    example: "OK"
                                },
                                data: {
                                    type: "array",
                                    items: {
                                        type: "object"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    userById: {
        summary: "Obtiene un usuarios",
        description: "Obtiene un usuario registrados en la aplicación.",
        tags: ["Users"],
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "ID del usuario", // Descripción del parámetro
                schema: {
                    type: "integer"
                }
            }
        ],
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {

                                status: {
                                    type: "string",
                                    example: "OK"
                                },
                                data: {
                                    type: "array",
                                    items: {
                                        type: "object"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    updateUserById: {
        summary: "Actualiza un usuario por su ID",
        description: "Obtiene un usuario registrado en la aplicación por su ID y lo actualiza",
        tags: ["Users"],
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "ID del usuario a actualizar",
                schema: {
                    type: "integer"
                }
            }
        ],
        requestBody: {
            description: "Datos actualizados del usuario",
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            name: {
                                type: "string",
                                example: "Brandon"
                            },
                            firstname: {
                                type: "string",
                                example: "Arango"
                            },
                            shortname: {
                                type: "string",
                                example: "barango"
                            }
                        }
                    }
                }
            }
        },
        responses: {
            200: {
                description: "OK",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                status: {
                                    type: "string",
                                    example: "OK"
                                },
                                data: {
                                    type: "object",
                                    properties: {
                                        message: {
                                            type: "string",
                                            example: "Se actulizo correctamente"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            404: {
                description: "Usuario no encontrado",
                content: {
                    "application/json": {
                        schema: {
                            type: "object",
                            properties: {
                                status: {
                                    type: "string",
                                    example: "Error"
                                },
                                message: {
                                    type: "string",
                                    example: "Usuario no encontrado"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
