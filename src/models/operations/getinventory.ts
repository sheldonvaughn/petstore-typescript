/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetInventorySecurity = {
  apiKey: string;
};

/** @internal */
export const GetInventorySecurity$inboundSchema: z.ZodType<
  GetInventorySecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  api_key: z.string(),
}).transform((v) => {
  return remap$(v, {
    "api_key": "apiKey",
  });
});

/** @internal */
export type GetInventorySecurity$Outbound = {
  api_key: string;
};

/** @internal */
export const GetInventorySecurity$outboundSchema: z.ZodType<
  GetInventorySecurity$Outbound,
  z.ZodTypeDef,
  GetInventorySecurity
> = z.object({
  apiKey: z.string(),
}).transform((v) => {
  return remap$(v, {
    apiKey: "api_key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetInventorySecurity$ {
  /** @deprecated use `GetInventorySecurity$inboundSchema` instead. */
  export const inboundSchema = GetInventorySecurity$inboundSchema;
  /** @deprecated use `GetInventorySecurity$outboundSchema` instead. */
  export const outboundSchema = GetInventorySecurity$outboundSchema;
  /** @deprecated use `GetInventorySecurity$Outbound` instead. */
  export type Outbound = GetInventorySecurity$Outbound;
}

export function getInventorySecurityToJSON(
  getInventorySecurity: GetInventorySecurity,
): string {
  return JSON.stringify(
    GetInventorySecurity$outboundSchema.parse(getInventorySecurity),
  );
}

export function getInventorySecurityFromJSON(
  jsonString: string,
): SafeParseResult<GetInventorySecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetInventorySecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetInventorySecurity' from JSON`,
  );
}
