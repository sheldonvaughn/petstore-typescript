/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as b64$ from "../../lib/base64.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateUsersWithListInputResponse =
  | Uint8Array
  | string
  | ReadableStream<Uint8Array>
  | Blob
  | ArrayBuffer
  | Uint8Array;

/** @internal */
export const CreateUsersWithListInputResponse$inboundSchema: z.ZodType<
  CreateUsersWithListInputResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  b64$.zodInbound,
  z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
]);

/** @internal */
export type CreateUsersWithListInputResponse$Outbound =
  | Uint8Array
  | ReadableStream<Uint8Array>
  | Blob
  | ArrayBuffer
  | Uint8Array;

/** @internal */
export const CreateUsersWithListInputResponse$outboundSchema: z.ZodType<
  CreateUsersWithListInputResponse$Outbound,
  z.ZodTypeDef,
  CreateUsersWithListInputResponse
> = z.union([
  b64$.zodOutbound,
  z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUsersWithListInputResponse$ {
  /** @deprecated use `CreateUsersWithListInputResponse$inboundSchema` instead. */
  export const inboundSchema = CreateUsersWithListInputResponse$inboundSchema;
  /** @deprecated use `CreateUsersWithListInputResponse$outboundSchema` instead. */
  export const outboundSchema = CreateUsersWithListInputResponse$outboundSchema;
  /** @deprecated use `CreateUsersWithListInputResponse$Outbound` instead. */
  export type Outbound = CreateUsersWithListInputResponse$Outbound;
}

export function createUsersWithListInputResponseToJSON(
  createUsersWithListInputResponse: CreateUsersWithListInputResponse,
): string {
  return JSON.stringify(
    CreateUsersWithListInputResponse$outboundSchema.parse(
      createUsersWithListInputResponse,
    ),
  );
}

export function createUsersWithListInputResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateUsersWithListInputResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateUsersWithListInputResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateUsersWithListInputResponse' from JSON`,
  );
}
