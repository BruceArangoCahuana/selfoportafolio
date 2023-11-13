module.exports = {
    generalList: {
        summary: "Obtiene una lista de resumen general",
        description: "Obtiene una lista de resumen general registrados en la aplicación.",
        tags: ["Generals"],
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
    generalById: {
        summary: "Obtiene un resumen general",
        description: "Obtiene un resumen general en la aplicación.",
        tags: ["Generals"],
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "ID del resumen general",
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
            },
            404: {
                description: "Resumen general no encontrado",
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
                                    example: "Resumen general no encontrado"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    updateGeneralById: {
        summary: "Actualiza un resumen general por su ID",
        description: "Obtiene un resumen general en la aplicación por su ID y lo actualiza",
        tags: ["Generals"],
        parameters: [
            {
                name: "id",
                in: "path",
                required: true,
                description: "ID del resumen general a actualizar",
                schema: {
                    type: "integer"
                }
            }
        ],
        requestBody: {
            description: "Datos actualizados del resumen general",
            required: true,
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            abstract: {
                                type: "string",
                                example: "Mi resumen.."
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
                description: "Resumen general no encontrado",
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
                                    example: "resumen general no encontrado"
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
