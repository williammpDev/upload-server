import { jsonSchemaTransform } from "fastify-type-provider-zod"


type TransformSwaggerSchemaData = Parameters<typeof jsonSchemaTransform>[0]

export function transformSwaggerSchema(data: TransformSwaggerSchemaData) {
    const { schema, url } = jsonSchemaTransform(data)

    if (schema.body === undefined) {
        schema.body = {
            type: "object",
            required: [],
            properties: {},
        }
    }

    const body = schema.body as {
        properties?: Record<string, unknown>
        required?: string[]
    }

    if (body.properties === undefined) {
        body.properties = {}
    }

    if (body.required === undefined) {
        body.required = []
    }

    body.properties.file = {
        type: "string",
        format: "binary",
     }

    if (!body.required.includes("file")) {
        body.required.push("file")
    }

    return { schema, url }
}