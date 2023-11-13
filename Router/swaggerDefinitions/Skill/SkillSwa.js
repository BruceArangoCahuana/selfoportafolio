module.exports = {
    createSkill: {
        summary: "Crea un nuevo skill",
        description: "Crea un nuevo skill en la aplicación",
        tags: ["Skills"],
        requestBody: {
            description: "Datos para el nuevo skill",
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            name: {
                                "type": "string",
                                "example": "javascript"
                            },
                            porcentaje: {
                                "type": "decimal",
                                "example": "10.0"
                            },
                            UserIdusuario:{
                                "type": "integer",
                                "example": "1"
                            }
                        }
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Creado exitosamente",
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
                                            example: "Se creo correctamente"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            500: {
                description: "Error interno del servidor",
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
                                    example: "Error interno del servidor"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    skillList: {
        summary: "Obtiene una lista de skill",
        description: "Obtiene una lista de skill registrados en la aplicación.",
        tags: ["Skills"],
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
};
