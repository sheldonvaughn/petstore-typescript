/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UpdateUserJsonRequest = {
  /**
   * name that needs to be updated
   */
  username: string;
  /**
   * Update an existent user in the store
   */
  user?:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array
    | undefined;
};

/** @internal */
export const UpdateUserJsonRequest$inboundSchema: z.ZodType<
  UpdateUserJsonRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  username: z.string(),
  User: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    "User": "user",
  });
});

/** @internal */
export type UpdateUserJsonRequest$Outbound = {
  username: string;
  User?:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array
    | undefined;
};

/** @internal */
export const UpdateUserJsonRequest$outboundSchema: z.ZodType<
  UpdateUserJsonRequest$Outbound,
  z.ZodTypeDef,
  UpdateUserJsonRequest
> = z.object({
  username: z.string(),
  user: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]).optional(),
}).transform((v) => {
  return remap$(v, {
    user: "User",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateUserJsonRequest$ {
  /** @deprecated use `UpdateUserJsonRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateUserJsonRequest$inboundSchema;
  /** @deprecated use `UpdateUserJsonRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateUserJsonRequest$outboundSchema;
  /** @deprecated use `UpdateUserJsonRequest$Outbound` instead. */
  export type Outbound = UpdateUserJsonRequest$Outbound;
}

export function updateUserJsonRequestToJSON(
  updateUserJsonRequest: UpdateUserJsonRequest,
): string {
  return JSON.stringify(
    UpdateUserJsonRequest$outboundSchema.parse(updateUserJsonRequest),
  );
}

export function updateUserJsonRequestFromJSON(
  jsonString: string,
): SafeParseResult<UpdateUserJsonRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateUserJsonRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateUserJsonRequest' from JSON`,
  );
}