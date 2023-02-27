type SwaggerSchemaParams = {
  example: object;
  description: string;
};

export function swaggerSchemaExample(params: SwaggerSchemaParams) {
  return {
    content: {
      schema: {
        example: params.example,
      },
    },
    description: params.description,
  };
}
