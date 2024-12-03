/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as b64$ from "../../lib/base64.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateUserJsonResponse =
  | ReadableStream<Uint8Array>
  | Blob
  | ArrayBuffer
  | Uint8Array
  | Uint8Array
  | string;

/** @internal */
export const CreateUserJsonResponse$inboundSchema: z.ZodType<
  CreateUserJsonResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
  b64$.zodInbound,
]);

/** @internal */
export type CreateUserJsonResponse$Outbound =
  | ReadableStream<Uint8Array>
  | Blob
  | ArrayBuffer
  | Uint8Array
  | Uint8Array;

/** @internal */
export const CreateUserJsonResponse$outboundSchema: z.ZodType<
  CreateUserJsonResponse$Outbound,
  z.ZodTypeDef,
  CreateUserJsonResponse
> = z.union([
  z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
  b64$.zodOutbound,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUserJsonResponse$ {
  /** @deprecated use `CreateUserJsonResponse$inboundSchema` instead. */
  export const inboundSchema = CreateUserJsonResponse$inboundSchema;
  /** @deprecated use `CreateUserJsonResponse$outboundSchema` instead. */
  export const outboundSchema = CreateUserJsonResponse$outboundSchema;
  /** @deprecated use `CreateUserJsonResponse$Outbound` instead. */
  export type Outbound = CreateUserJsonResponse$Outbound;
}

export function createUserJsonResponseToJSON(
  createUserJsonResponse: CreateUserJsonResponse,
): string {
  return JSON.stringify(
    CreateUserJsonResponse$outboundSchema.parse(createUserJsonResponse),
  );
}

export function createUserJsonResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateUserJsonResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateUserJsonResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateUserJsonResponse' from JSON`,
  );
}