/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { PetstoreCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

export enum CreateUserJsonAcceptEnum {
  applicationJson = "application/json",
  applicationXml = "application/xml",
}

/**
 * Create user
 *
 * @remarks
 * This can only be done by the logged in user.
 */
export async function userCreateUserJson(
  client: PetstoreCore,
  request?:
    | ReadableStream<Uint8Array>
    | Blob
    | ArrayBuffer
    | Uint8Array
    | undefined,
  options?: RequestOptions & {
    acceptHeaderOverride?: CreateUserJsonAcceptEnum;
  },
): Promise<
  Result<
    operations.CreateUserJsonResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      z.union([
        z.instanceof(ReadableStream<Uint8Array>),
        z.instanceof(Blob),
        z.instanceof(ArrayBuffer),
        z.instanceof(Uint8Array),
      ]).optional().parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = payload === undefined
    ? null
    : encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/user")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, application/xml;q=0",
  });

  const secConfig = await extractSecurity(client._options.petstoreAuth);
  const securityInput = secConfig == null ? {} : { petstoreAuth: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "createUser_json",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.petstoreAuth,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    operations.CreateUserJsonResponse,
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.fail(["4XX", "5XX"]),
    M.json("default", operations.CreateUserJsonResponse$inboundSchema),
    M.bytes("default", operations.CreateUserJsonResponse$inboundSchema, {
      ctype: "application/xml",
    }),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
