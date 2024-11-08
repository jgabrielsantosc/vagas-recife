{
  "openapi": "3.0.3",
  "info": {
    "title": "API OTV",
    "description": "Documentação da API OTV",
    "version": "1.0.0"
  },
  "components": {
    "schemas": {

    }
  },
  "paths": {
    "/api/v1/imported/": {
      "post": {
        "tags": [
          "Jobs"
        ],
        "description": "Importa uma nova vaga",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "title",
                  "seniority",
                  "language",
                  "areas",
                  "subareas",
                  "work_model",
                  "address",
                  "description",
                  "role",
                  "url",
                  "deeplink",
                  "slug",
                  "company_id"
                ],
                "properties": {
                  "title": {
                    "type": "string"
                  },
                  "seniority": {
                    "type": "string"
                  },
                  "language": {
                    "type": "string"
                  },
                  "areas": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "minItems": 1
                  },
                  "subareas": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    },
                    "minItems": 1
                  },
                  "contract_model": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "remuneration": {
                    "type": [
                      "number",
                      "null"
                    ]
                  },
                  "work_model": {
                    "type": "string"
                  },
                  "address": {
                    "type": "object",
                    "properties": {
                      "city": {
                        "type": "string"
                      },
                      "state": {
                        "type": "string"
                      },
                      "country": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "city",
                      "state",
                      "country"
                    ]
                  },
                  "description": {
                    "type": "string"
                  },
                  "requirements": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "role": {
                    "type": "string"
                  },
                  "skills": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "stacks": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "benefits": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "url": {
                    "type": "string"
                  },
                  "deeplink": {
                    "type": "string"
                  },
                  "slug": {
                    "type": "string"
                  },
                  "company_id": {
                    "type": [
                      "string",
                      "number"
                    ]
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Vaga importada com sucesso",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Vaga importada com sucesso",
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "job": {
                      "type": "object"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Dados inválidos",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Dados inválidos",
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "errors": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Erro interno do servidor",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Erro interno do servidor",
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "error": {
                      "type": "string"
                    },
                    "stack": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/scraper/scraper-jobs": {
      "post": {
        "tags": [
          "Jobs"
        ],
        "description": "Processa o jobboard de uma empresa",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "id_company"
                ],
                "properties": {
                  "id_company": {
                    "type": "number",
                    "description": "ID da empresa"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Vagas processadas com sucesso",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Vagas processadas com sucesso",
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/validate/validate": {
      "post": {
        "tags": [
          "Jobs"
        ],
        "description": "Valida uma URL de vaga",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": [
                  "url"
                ],
                "properties": {
                  "url": {
                    "type": "string",
                    "description": "URL da vaga a ser validada"
                  }
                }
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "URL validada com sucesso",
            "content": {
              "application/json": {
                "schema": {
                  "description": "URL validada com sucesso",
                  "type": "object",
                  "properties": {
                    "exists": {
                      "type": "boolean"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "URL inválida ou ausente",
            "content": {
              "application/json": {
                "schema": {
                  "description": "URL inválida ou ausente",
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Erro interno do servidor",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Erro interno do servidor",
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/api/v1/shortlink/total-clicks": {
      "get": {
        "tags": [
          "Shortlink"
        ],
        "description": "Obtém o total de cliques para uma URL encurtada",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "url",
            "required": true,
            "description": "URL encurtada"
          }
        ],
        "responses": {
          "200": {
            "description": "Total de cliques",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Total de cliques",
                  "type": "object",
                  "properties": {
                    "totalClicks": {
                      "type": "integer"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/companies": {
      "get": {
        "tags": [
          "Companies"
        ],
        "description": "Retorna uma lista de empresas com paginação",
        "parameters": [
          {
            "schema": {
              "type": "integer",
              "default": 1
            },
            "in": "query",
            "name": "page",
            "required": false,
            "description": "Número da página"
          },
          {
            "schema": {
              "type": "integer",
              "default": 10
            },
            "in": "query",
            "name": "limit",
            "required": false,
            "description": "Número de itens por página"
          }
        ],
        "responses": {
          "200": {
            "description": "Lista de empresas",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Lista de empresas",
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id_company": {
                            "type": "integer"
                          },
                          "company_name": {
                            "type": "string"
                          },
                          "url_logo_company": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "site": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "linkedin": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "jobboard": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "founded_year": {
                            "type": [
                              "null",
                              "integer"
                            ]
                          },
                          "city_state": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "description": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "crunchbase": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "country": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "employee_count": {
                            "type": [
                              "null",
                              "integer"
                            ]
                          },
                          "type_company": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "business_model": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "persons": {
                            "type": [
                              "null",
                              "object"
                            ]
                          },
                          "status": {
                            "type": "string"
                          },
                          "created_at": {
                            "type": "string",
                            "format": "date-time"
                          },
                          "updated_at": {
                            "type": "string",
                            "format": "date-time"
                          },
                          "industry": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "sector": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "metadata": {
                            "type": [
                              "null",
                              "object"
                            ]
                          },
                          "airtable_id": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "stealth_mode": {
                            "type": [
                              "null",
                              "boolean"
                            ]
                          },
                          "mongodb_id": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "linkedin_id": {
                            "type": [
                              "null",
                              "string"
                            ]
                          }
                        },
                        "additionalProperties": false
                      }
                    },
                    "meta": {
                      "type": "object",
                      "properties": {
                        "total": {
                          "type": "integer"
                        },
                        "page": {
                          "type": "integer"
                        },
                        "limit": {
                          "type": "integer"
                        },
                        "totalPages": {
                          "type": "integer"
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Erro interno do servidor",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Erro interno do servidor",
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/companies/active-jobs": {
      "get": {
        "tags": [
          "Companies"
        ],
        "description": "Obtém empresas com vagas ativas",
        "parameters": [
          {
            "schema": {
              "type": "integer",
              "default": 1
            },
            "in": "query",
            "name": "page",
            "required": false,
            "description": "Número da página"
          },
          {
            "schema": {
              "type": "integer",
              "default": 10
            },
            "in": "query",
            "name": "limit",
            "required": false,
            "description": "Número de itens por página"
          }
        ],
        "responses": {
          "200": {
            "description": "Lista de empresas com vagas ativas",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Lista de empresas com vagas ativas",
                  "type": "object",
                  "properties": {
                    "companies": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id_company": {
                            "type": "integer"
                          },
                          "company_name": {
                            "type": "string"
                          },
                          "url_logo_company": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "active_jobs_count": {
                            "type": "integer"
                          }
                        }
                      }
                    },
                    "currentPage": {
                      "type": "integer"
                    },
                    "pageSize": {
                      "type": "integer"
                    },
                    "totalCompanies": {
                      "type": "integer"
                    },
                    "totalPages": {
                      "type": "integer"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/companies/jobs-summary/{company_id}": {
      "get": {
        "tags": [
          "Companies"
        ],
        "description": "Obtém um resumo das vagas de uma empresa",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "path",
            "name": "company_id",
            "required": true,
            "description": "ID da empresa"
          }
        ],
        "responses": {
          "200": {
            "description": "Resumo das vagas",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Resumo das vagas",
                  "type": "object",
                  "properties": {
                    "seniority": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "number"
                      }
                    },
                    "work_model": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "number"
                      }
                    },
                    "contract_model": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "number"
                      }
                    },
                    "area": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "number"
                      }
                    },
                    "subarea": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "number"
                      }
                    },
                    "address": {
                      "type": "object",
                      "properties": {
                        "city": {
                          "type": "object",
                          "additionalProperties": {
                            "type": "number"
                          }
                        },
                        "state": {
                          "type": "object",
                          "additionalProperties": {
                            "type": "number"
                          }
                        },
                        "country": {
                          "type": "object",
                          "additionalProperties": {
                            "type": "number"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/companies/jobs/{company_id}": {
      "get": {
        "tags": [
          "Companies"
        ],
        "description": "Lista vagas de uma empresa com paginação",
        "parameters": [
          {
            "schema": {
              "type": "integer",
              "default": 1
            },
            "in": "query",
            "name": "page",
            "required": false,
            "description": "Número da página"
          },
          {
            "schema": {
              "type": "integer",
              "default": 10
            },
            "in": "query",
            "name": "limit",
            "required": false,
            "description": "Limite de vagas por página"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "path",
            "name": "company_id",
            "required": true,
            "description": "ID da empresa"
          }
        ],
        "responses": {
          "200": {
            "description": "Default Response"
          }
        }
      }
    },
    "/api/v1/companies/{id}": {
      "get": {
        "tags": [
          "Companies"
        ],
        "description": "Obtém detalhes de uma empresa específica",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "path",
            "name": "id",
            "required": true,
            "description": "ID da empresa"
          }
        ],
        "responses": {
          "200": {
            "description": "Detalhes da empresa",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Detalhes da empresa",
                  "type": "object",
                  "properties": {
                    "id_company": {
                      "type": "integer"
                    },
                    "company_name": {
                      "type": "string"
                    },
                    "url_logo_company": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "site": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "linkedin": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "jobboard": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "founded_year": {
                      "type": [
                        "null",
                        "integer"
                      ]
                    },
                    "city_state": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "description": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "crunchbase": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "country": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "employee_count": {
                      "type": [
                        "null",
                        "integer"
                      ]
                    },
                    "type_company": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "business_model": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "persons": {
                      "type": [
                        "null",
                        "object"
                      ]
                    },
                    "status": {
                      "type": "string"
                    },
                    "created_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "updated_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "industry": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "sector": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "metadata": {
                      "type": [
                        "null",
                        "object"
                      ]
                    },
                    "airtable_id": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "stealth_mode": {
                      "type": [
                        "null",
                        "boolean"
                      ]
                    },
                    "mongodb_id": {
                      "type": [
                        "null",
                        "string"
                      ]
                    },
                    "linkedin_id": {
                      "type": [
                        "null",
                        "string"
                      ]
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Empresa não encontrada",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Empresa não encontrada",
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Erro interno do servidor",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Erro interno do servidor",
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/total-clicks/total-clicks": {
      "get": {
        "tags": [
          "Shortlink"
        ],
        "description": "Obtém o total de cliques para uma URL encurtada",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "url",
            "required": true,
            "description": "URL encurtada"
          }
        ],
        "responses": {
          "200": {
            "description": "Total de cliques",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Total de cliques",
                  "type": "object",
                  "properties": {
                    "totalClicks": {
                      "type": "integer"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/analytics": {
      "get": {
        "tags": [
          "Analytics"
        ],
        "description": "Obtém estatísticas gerais",
        "responses": {
          "200": {
            "description": "Default Response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "activeCompanies": {
                      "type": "integer"
                    },
                    "activeJobs": {
                      "type": "integer"
                    },
                    "jobsLast24Hours": {
                      "type": "integer"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/analytics/area-count": {
      "get": {
        "tags": [
          "Analytics"
        ],
        "description": "Obtém estatísticas de vagas por área",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Successful response",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "area_id": {
                        "type": "integer"
                      },
                      "area_name": {
                        "type": "string"
                      },
                      "active_job_count": {
                        "type": "integer"
                      },
                      "recent_job_count": {
                        "type": "integer"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/analytics/subarea-count": {
      "get": {
        "tags": [
          "Analytics"
        ],
        "description": "Obtém estatísticas de vagas por subárea",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Successful response",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "subarea_id": {
                        "type": "integer"
                      },
                      "subarea_name": {
                        "type": "string"
                      },
                      "active_job_count": {
                        "type": "integer"
                      },
                      "recent_job_count": {
                        "type": "integer"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/jobs/jobs": {
      "get": {
        "tags": [
          "Jobs"
        ],
        "description": "Lista vagas com paginação e filtros opcionais",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "company_id",
            "required": false,
            "description": "ID da empresa (opcional)"
          },
          {
            "schema": {
              "type": "integer",
              "default": 1
            },
            "in": "query",
            "name": "page",
            "required": false,
            "description": "Número da página"
          },
          {
            "schema": {
              "type": "integer",
              "default": 10
            },
            "in": "query",
            "name": "limit",
            "required": false,
            "description": "Limite de vagas por página"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "seniority",
            "required": false,
            "description": "Filtrar por senioridade"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "work_model",
            "required": false,
            "description": "Filtrar por modelo de trabalho"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "contract_model",
            "required": false,
            "description": "Filtrar por modelo de contrato"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "city",
            "required": false,
            "description": "Filtrar por cidade"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "state",
            "required": false,
            "description": "Filtrar por estado"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "country",
            "required": false,
            "description": "Filtrar por país"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "area",
            "required": false,
            "description": "Filtrar por área"
          },
          {
            "schema": {
              "type": "string"
            },
            "in": "query",
            "name": "subarea",
            "required": false,
            "description": "Filtrar por subárea"
          }
        ],
        "responses": {
          "200": {
            "description": "Default Response"
          }
        }
      }
    },
    "/api/v1/jobs/jobs-by-address": {
      "get": {
        "tags": [
          "Jobs"
        ],
        "description": "Lista vagas com paginação e filtros por endereço",
        "parameters": [
          {
            "schema": {
              "type": "integer",
              "default": 1
            },
            "in": "query",
            "name": "page",
            "required": false,
            "description": "Número da página"
          },
          {
            "schema": {
              "type": "integer",
              "default": 10
            },
            "in": "query",
            "name": "limit",
            "required": false,
            "description": "Limite de vagas por página"
          },
          {
            "schema": {
              "type": "integer"
            },
            "in": "query",
            "name": "address_id",
            "required": true,
            "description": "ID do endereço na tabela address"
          }
        ],
        "responses": {
          "200": {
            "description": "Default Response"
          }
        }
      }
    },
    "/api/v1/jobs/jobs-address-summary/{address_id}": {
      "get": {
        "tags": [
          "Jobs"
        ],
        "description": "Obtém um resumo das vagas por endereço",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "path",
            "name": "address_id",
            "required": true,
            "description": "ID do endereço"
          }
        ],
        "responses": {
          "200": {
            "description": "Resumo das vagas por endereço",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Resumo das vagas por endereço",
                  "type": "object",
                  "properties": {
                    "seniority": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "number"
                      }
                    },
                    "work_model": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "number"
                      }
                    },
                    "contract_model": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "number"
                      }
                    },
                    "area": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "number"
                      }
                    },
                    "subarea": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "number"
                      }
                    },
                    "companies": {
                      "type": "object",
                      "additionalProperties": {
                        "type": "object",
                        "properties": {
                          "count": {
                            "type": "number"
                          },
                          "name": {
                            "type": "string"
                          },
                          "logo": {
                            "type": [
                              "null",
                              "string"
                            ]
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/jobs/jobs/stack/{stack_id}": {
      "get": {
        "tags": [
          "Jobs"
        ],
        "description": "Lista vagas por stack_id",
        "parameters": [
          {
            "schema": {
              "type": "integer"
            },
            "in": "path",
            "name": "stack_id",
            "required": true,
            "description": "ID do stack"
          }
        ],
        "responses": {
          "200": {
            "description": "Lista de vagas",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Lista de vagas",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "job_id": {
                        "type": "integer"
                      },
                      "job_title": {
                        "type": "string"
                      },
                      "job_description": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "ID de stack inválido",
            "content": {
              "application/json": {
                "schema": {
                  "description": "ID de stack inválido",
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Nenhuma vaga encontrada",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Nenhuma vaga encontrada",
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Erro interno do servidor",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Erro interno do servidor",
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/jobs/{id}": {
      "get": {
        "tags": [
          "Jobs"
        ],
        "description": "Obtém informações de uma vaga específica",
        "parameters": [
          {
            "schema": {
              "type": "integer"
            },
            "in": "path",
            "name": "id",
            "required": true,
            "description": "ID da vaga"
          }
        ],
        "responses": {
          "200": {
            "description": "Informações da vaga",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Informações da vaga",
                  "type": "object",
                  "properties": {
                    "id_job": {
                      "type": "integer"
                    },
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    },
                    "contract_model": {
                      "type": "string"
                    },
                    "work_model": {
                      "type": "string"
                    },
                    "remuneration": {
                      "type": [
                        "null",
                        "number"
                      ]
                    },
                    "created_at": {
                      "type": "string",
                      "format": "date-time"
                    },
                    "areas": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "subareas": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "seniority": {
                      "type": "string"
                    },
                    "url": {
                      "type": "string"
                    },
                    "deeplink": {
                      "type": "string"
                    },
                    "slug": {
                      "type": "string"
                    },
                    "role": {
                      "type": "string"
                    },
                    "skills": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "stacks": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "benefits": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "requirements": {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    "address": {
                      "type": "object",
                      "properties": {
                        "city": {
                          "type": "string"
                        },
                        "state": {
                          "type": "string"
                        },
                        "country": {
                          "type": "string"
                        }
                      }
                    },
                    "company": {
                      "type": "object",
                      "properties": {
                        "id_company": {
                          "type": "integer"
                        },
                        "company_name": {
                          "type": "string"
                        },
                        "url_logo_company": {
                          "type": [
                            "null",
                            "string"
                          ]
                        }
                      }
                    },
                    "totalClicks": {
                      "type": "integer"
                    }
                  }
                }
              }
            }
          },
          "404": {
            "description": "Vaga não encontrada",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Vaga não encontrada",
                  "type": "object",
                  "properties": {
                    "error": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/investors/{id}/companies": {
      "get": {
        "tags": [
          "Investors"
        ],
        "description": "Lista empresas investidas por um investidor específico",
        "parameters": [
          {
            "schema": {
              "type": "string"
            },
            "in": "path",
            "name": "id",
            "required": true,
            "description": "ID do investidor"
          }
        ],
        "responses": {
          "200": {
            "description": "Lista de empresas investidas",
            "content": {
              "application/json": {
                "schema": {
                  "description": "Lista de empresas investidas",
                  "type": "object",
                  "properties": {
                    "companies": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id_company": {
                            "type": "integer"
                          },
                          "company_name": {
                            "type": "string"
                          },
                          "url_logo_company": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "site": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "linkedin": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "jobboard": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "founded_year": {
                            "type": [
                              "null",
                              "integer"
                            ]
                          },
                          "city_state": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "description": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "crunchbase": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "country": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "employee_count": {
                            "type": [
                              "null",
                              "integer"
                            ]
                          },
                          "type_company": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "business_model": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "persons": {
                            "type": [
                              "null",
                              "object"
                            ]
                          },
                          "status": {
                            "type": "string"
                          },
                          "created_at": {
                            "type": "string",
                            "format": "date-time"
                          },
                          "updated_at": {
                            "type": "string",
                            "format": "date-time"
                          },
                          "industry": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "sector": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "metadata": {
                            "type": [
                              "null",
                              "object"
                            ]
                          },
                          "airtable_id": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "stealth_mode": {
                            "type": [
                              "null",
                              "boolean"
                            ]
                          },
                          "mongodb_id": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "linkedin_id": {
                            "type": [
                              "null",
                              "string"
                            ]
                          },
                          "job_count": {
                            "type": "integer"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/api/v1/jobs-recife": {
      "get": {
        "tags": [
          "Jobs"
        ],
        "description": "Lista vagas em Recife com paginação",
        "parameters": [
          {
            "schema": {
              "type": "integer",
              "default": 1
            },
            "in": "query",
            "name": "page",
            "required": false,
            "description": "Número da página"
          },
          {
            "schema": {
              "type": "integer",
              "default": 10
            },
            "in": "query",
            "name": "limit",
            "required": false,
            "description": "Limite de vagas por página"
          }
        ],
        "responses": {
          "200": {
            "description": "Default Response"
          }
        }
      }
    }
  },
  "servers": [
    {
      "url": "https://new-api-otv-e4k86.ondigitalocean.app"
    }
  ],
  "tags": [
    {
      "name": "Jobs",
      "description": "Operações relacionadas a vagas de emprego"
    },
    {
      "name": "Companies",
      "description": "Operações relacionadas a empresas"
    }
  ]
}