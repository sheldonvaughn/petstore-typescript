# Order1

## Example Usage

```typescript
import { Order1 } from "petstore/models/components";

let value: Order1 = {
  id: 10,
  petId: 198772,
  quantity: 7,
  status: "approved",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 10                                                                                            |
| `petId`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 198772                                                                                        |
| `quantity`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           | 7                                                                                             |
| `shipDate`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `status`                                                                                      | [components.OrderStatus](../../models/components/orderstatus.md)                              | :heavy_minus_sign:                                                                            | Order Status                                                                                  | approved                                                                                      |
| `complete`                                                                                    | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |