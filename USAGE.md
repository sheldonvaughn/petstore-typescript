<!-- Start SDK Example Usage [usage] -->
```typescript
import { openAsBlob } from "node:fs";
import { Petstore } from "petstore";

const petstore = new Petstore({
  petstoreAuth: process.env["PETSTORE_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await petstore.pet.updatePetJson(
    await openAsBlob("example.file"),
  );

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->