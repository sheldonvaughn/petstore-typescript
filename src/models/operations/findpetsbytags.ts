/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as b64$ from "../../lib/base64.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FindPetsByTagsRequest = {
  /**
   * Tags to filter by
   */
  tags?: Array<string> | undefined;
};

export type FindPetsByTagsResponse =
  | Uint8Array
  | string
  | Array<components.Pet2>;

/** @internal */
export const FindPetsByTagsRequest$inboundSchema: z.ZodType<
  FindPetsByTagsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  tags: z.array(z.string()).optional(),
});

/** @internal */
export type FindPetsByTagsRequest$Outbound = {
  tags?: Array<string> | undefined;
};

/** @internal */
export const FindPetsByTagsRequest$outboundSchema: z.ZodType<
  FindPetsByTagsRequest$Outbound,
  z.ZodTypeDef,
  FindPetsByTagsRequest
> = z.object({
  tags: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FindPetsByTagsRequest$ {
  /** @deprecated use `FindPetsByTagsRequest$inboundSchema` instead. */
  export const inboundSchema = FindPetsByTagsRequest$inboundSchema;
  /** @deprecated use `FindPetsByTagsRequest$outboundSchema` instead. */
  export const outboundSchema = FindPetsByTagsRequest$outboundSchema;
  /** @deprecated use `FindPetsByTagsRequest$Outbound` instead. */
  export type Outbound = FindPetsByTagsRequest$Outbound;
}

export function findPetsByTagsRequestToJSON(
  findPetsByTagsRequest: FindPetsByTagsRequest,
): string {
  return JSON.stringify(
    FindPetsByTagsRequest$outboundSchema.parse(findPetsByTagsRequest),
  );
}

export function findPetsByTagsRequestFromJSON(
  jsonString: string,
): SafeParseResult<FindPetsByTagsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FindPetsByTagsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FindPetsByTagsRequest' from JSON`,
  );
}

/** @internal */
export const FindPetsByTagsResponse$inboundSchema: z.ZodType<
  FindPetsByTagsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([b64$.zodInbound, z.array(components.Pet2$inboundSchema)]);

/** @internal */
export type FindPetsByTagsResponse$Outbound =
  | Uint8Array
  | Array<components.Pet2$Outbound>;

/** @internal */
export const FindPetsByTagsResponse$outboundSchema: z.ZodType<
  FindPetsByTagsResponse$Outbound,
  z.ZodTypeDef,
  FindPetsByTagsResponse
> = z.union([b64$.zodOutbound, z.array(components.Pet2$outboundSchema)]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FindPetsByTagsResponse$ {
  /** @deprecated use `FindPetsByTagsResponse$inboundSchema` instead. */
  export const inboundSchema = FindPetsByTagsResponse$inboundSchema;
  /** @deprecated use `FindPetsByTagsResponse$outboundSchema` instead. */
  export const outboundSchema = FindPetsByTagsResponse$outboundSchema;
  /** @deprecated use `FindPetsByTagsResponse$Outbound` instead. */
  export type Outbound = FindPetsByTagsResponse$Outbound;
}

export function findPetsByTagsResponseToJSON(
  findPetsByTagsResponse: FindPetsByTagsResponse,
): string {
  return JSON.stringify(
    FindPetsByTagsResponse$outboundSchema.parse(findPetsByTagsResponse),
  );
}

export function findPetsByTagsResponseFromJSON(
  jsonString: string,
): SafeParseResult<FindPetsByTagsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FindPetsByTagsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FindPetsByTagsResponse' from JSON`,
  );
}
