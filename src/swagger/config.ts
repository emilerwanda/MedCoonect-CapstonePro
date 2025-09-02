import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';

const options: any = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'medConnect-API documentation',
      version: '1.0.0',
      description: 'Digital Prescription & Patient Records System API',
      contact: {
        name: 'MedConnect Team',
        email: 'support@medconnect.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: 'http://localhost:3300/api/v1',
        description: 'Development server',
      },
      {
        url: 'https://api.medconnect.com/api/v1',
        description: 'Production server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT token for authentication',
        },
      },
    },
  },
  // Point to the YAML files in paths/ and schemas/ folders
  apis: [
    path.join(__dirname, 'paths/auth.yaml'),
    path.join(__dirname, 'paths/patients.yaml'),
    path.join(__dirname, 'schemas/auth.yaml'),
    path.join(__dirname, 'schemas/patients.yaml'),
    path.join(__dirname, 'schemas/common.yaml'),
  ],
};

export const swaggerSpec = swaggerJsdoc(options);
