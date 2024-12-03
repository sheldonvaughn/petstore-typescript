# petstore

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *petstore* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=petstore&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/sheldon-vaughn-test/sandbox). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Swagger Petstore - OpenAPI 3.0: This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
Swagger at [http://swagger.io](http://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
You can now help us improve the API whether it's by making changes to the definition itself or to the code.
That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

Some useful links:
- [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)

For more information about the API: [Find out more about Swagger](http://swagger.io)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [petstore](#petstore)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)
* [petstore-typescript](#petstore-typescript)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add https://github.com/sheldonvaughn/petstore-typescript
```

### PNPM

```bash
pnpm add https://github.com/sheldonvaughn/petstore-typescript
```

### Bun

```bash
bun add https://github.com/sheldonvaughn/petstore-typescript
```

### Yarn

```bash
yarn add https://github.com/sheldonvaughn/petstore-typescript zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { openAsBlob } from "node:fs";
import { Petstore } from "petstore";

const petstore = new Petstore({
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.pets.updateForm(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type   | Scheme       | Environment Variable     |
| -------------- | ------ | ------------ | ------------------------ |
| `petstoreAuth` | oauth2 | OAuth2 token | `PETSTORE_PETSTORE_AUTH` |

To authenticate with the API the `petstoreAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { openAsBlob } from "node:fs";
import { Petstore } from "petstore";

const petstore = new Petstore({
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.pets.updateForm(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { Petstore } from "petstore";

const petstore = new Petstore();

async function run() {
  const result = await petstore.pets.get({
    apiKey: process.env["PETSTORE_API_KEY"] ?? "",
  }, {
    petId: 504151,
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [pets](docs/sdks/pets/README.md)

* [updateForm](docs/sdks/pets/README.md#updateform) - Update an existing pet
* [updateJson](docs/sdks/pets/README.md#updatejson) - Update an existing pet
* [updateRaw](docs/sdks/pets/README.md#updateraw) - Update an existing pet
* [addJson](docs/sdks/pets/README.md#addjson) - Add a new pet to the store
* [addRaw](docs/sdks/pets/README.md#addraw) - Add a new pet to the store
* [addForm](docs/sdks/pets/README.md#addform) - Add a new pet to the store
* [findByStatus](docs/sdks/pets/README.md#findbystatus) - Finds Pets by status
* [findByTags](docs/sdks/pets/README.md#findbytags) - Finds Pets by tags
* [get](docs/sdks/pets/README.md#get) - Find pet by ID
* [updateWithForm](docs/sdks/pets/README.md#updatewithform) - Updates a pet in the store with form data
* [delete](docs/sdks/pets/README.md#delete) - Deletes a pet
* [uploadFile](docs/sdks/pets/README.md#uploadfile) - uploads an image


### [store](docs/sdks/store/README.md)

* [getInventory](docs/sdks/store/README.md#getinventory) - Returns pet inventories by status
* [placeOrderJson](docs/sdks/store/README.md#placeorderjson) - Place an order for a pet
* [placeOrderRaw](docs/sdks/store/README.md#placeorderraw) - Place an order for a pet
* [placeOrderForm](docs/sdks/store/README.md#placeorderform) - Place an order for a pet
* [getOrderById](docs/sdks/store/README.md#getorderbyid) - Find purchase order by ID
* [deleteOrder](docs/sdks/store/README.md#deleteorder) - Delete purchase order by ID

### [users](docs/sdks/users/README.md)

* [createJson](docs/sdks/users/README.md#createjson) - Create user
* [createRaw](docs/sdks/users/README.md#createraw) - Create user
* [createForm](docs/sdks/users/README.md#createform) - Create user
* [createWithList](docs/sdks/users/README.md#createwithlist) - Creates list of users with given input array
* [login](docs/sdks/users/README.md#login) - Logs user into the system
* [logout](docs/sdks/users/README.md#logout) - Logs out current logged in user session
* [getByName](docs/sdks/users/README.md#getbyname) - Get user by user name
* [updateJson](docs/sdks/users/README.md#updatejson) - Update user
* [updateRaw](docs/sdks/users/README.md#updateraw) - Update user
* [updateForm](docs/sdks/users/README.md#updateform) - Update user
* [delete](docs/sdks/users/README.md#delete) - Delete user

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`petsAddForm`](docs/sdks/pets/README.md#addform) - Add a new pet to the store
- [`petsAddJson`](docs/sdks/pets/README.md#addjson) - Add a new pet to the store
- [`petsAddRaw`](docs/sdks/pets/README.md#addraw) - Add a new pet to the store
- [`petsDelete`](docs/sdks/pets/README.md#delete) - Deletes a pet
- [`petsFindByStatus`](docs/sdks/pets/README.md#findbystatus) - Finds Pets by status
- [`petsFindByTags`](docs/sdks/pets/README.md#findbytags) - Finds Pets by tags
- [`petsGet`](docs/sdks/pets/README.md#get) - Find pet by ID
- [`petsUpdateForm`](docs/sdks/pets/README.md#updateform) - Update an existing pet
- [`petsUpdateJson`](docs/sdks/pets/README.md#updatejson) - Update an existing pet
- [`petsUpdateRaw`](docs/sdks/pets/README.md#updateraw) - Update an existing pet
- [`petsUpdateWithForm`](docs/sdks/pets/README.md#updatewithform) - Updates a pet in the store with form data
- [`petsUploadFile`](docs/sdks/pets/README.md#uploadfile) - uploads an image
- [`storeDeleteOrder`](docs/sdks/store/README.md#deleteorder) - Delete purchase order by ID
- [`storeGetInventory`](docs/sdks/store/README.md#getinventory) - Returns pet inventories by status
- [`storeGetOrderById`](docs/sdks/store/README.md#getorderbyid) - Find purchase order by ID
- [`storePlaceOrderForm`](docs/sdks/store/README.md#placeorderform) - Place an order for a pet
- [`storePlaceOrderJson`](docs/sdks/store/README.md#placeorderjson) - Place an order for a pet
- [`storePlaceOrderRaw`](docs/sdks/store/README.md#placeorderraw) - Place an order for a pet
- [`usersCreateForm`](docs/sdks/users/README.md#createform) - Create user
- [`usersCreateJson`](docs/sdks/users/README.md#createjson) - Create user
- [`usersCreateRaw`](docs/sdks/users/README.md#createraw) - Create user
- [`usersCreateWithList`](docs/sdks/users/README.md#createwithlist) - Creates list of users with given input array
- [`usersDelete`](docs/sdks/users/README.md#delete) - Delete user
- [`usersGetByName`](docs/sdks/users/README.md#getbyname) - Get user by user name
- [`usersLogin`](docs/sdks/users/README.md#login) - Logs user into the system
- [`usersLogout`](docs/sdks/users/README.md#logout) - Logs out current logged in user session
- [`usersUpdateForm`](docs/sdks/users/README.md#updateform) - Update user
- [`usersUpdateJson`](docs/sdks/users/README.md#updatejson) - Update user
- [`usersUpdateRaw`](docs/sdks/users/README.md#updateraw) - Update user

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { openAsBlob } from "node:fs";
import { Petstore } from "petstore";

const petstore = new Petstore({
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.pets.updateForm(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { openAsBlob } from "node:fs";
import { Petstore } from "petstore";

const petstore = new Petstore({
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.pets.updateForm(
    await openAsBlob("example.file"),
    {
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    },
  );

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { openAsBlob } from "node:fs";
import { Petstore } from "petstore";

const petstore = new Petstore({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.pets.updateForm(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.APIError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `updateForm` method may throw the following errors:

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.APIError | 4XX, 5XX    | \*/\*        |

```typescript
import { openAsBlob } from "node:fs";
import { Petstore } from "petstore";
import { SDKValidationError } from "petstore/models/errors";

const petstore = new Petstore({
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  let result;
  try {
    result = await petstore.pets.updateForm(await openAsBlob("example.file"));

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { openAsBlob } from "node:fs";
import { Petstore } from "petstore";

const petstore = new Petstore({
  serverURL: "https:///api/v3",
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.pets.updateForm(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Petstore } from "petstore";
import { HTTPClient } from "petstore/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Petstore({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Petstore } from "petstore";

const sdk = new Petstore({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `PETSTORE_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=petstore&utm_campaign=typescript)
# petstore-typescript
