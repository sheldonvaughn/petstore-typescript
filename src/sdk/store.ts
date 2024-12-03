/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { storeDeleteOrder } from "../funcs/storeDeleteOrder.js";
import { storeGetInventory } from "../funcs/storeGetInventory.js";
import {
  GetOrderByIdAcceptEnum,
  storeGetOrderById,
} from "../funcs/storeGetOrderById.js";
import { storePlaceOrderForm } from "../funcs/storePlaceOrderForm.js";
import { storePlaceOrderJson } from "../funcs/storePlaceOrderJson.js";
import { storePlaceOrderRaw } from "../funcs/storePlaceOrderRaw.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { GetOrderByIdAcceptEnum } from "../funcs/storeGetOrderById.js";

export class Store extends ClientSDK {
  /**
   * Returns pet inventories by status
   *
   * @remarks
   * Returns a map of status codes to quantities
   */
  async getInventory(
    security: operations.GetInventorySecurity,
    options?: RequestOptions,
  ): Promise<{ [k: string]: number }> {
    return unwrapAsync(storeGetInventory(
      this,
      security,
      options,
    ));
  }

  /**
   * Place an order for a pet
   *
   * @remarks
   * Place a new order in the store
   */
  async placeOrderJson(
    request?:
      | ReadableStream<Uint8Array>
      | Blob
      | ArrayBuffer
      | Uint8Array
      | undefined,
    options?: RequestOptions,
  ): Promise<components.Order1> {
    return unwrapAsync(storePlaceOrderJson(
      this,
      request,
      options,
    ));
  }

  /**
   * Place an order for a pet
   *
   * @remarks
   * Place a new order in the store
   */
  async placeOrderRaw(
    request?:
      | ReadableStream<Uint8Array>
      | Blob
      | ArrayBuffer
      | Uint8Array
      | undefined,
    options?: RequestOptions,
  ): Promise<components.Order1> {
    return unwrapAsync(storePlaceOrderRaw(
      this,
      request,
      options,
    ));
  }

  /**
   * Place an order for a pet
   *
   * @remarks
   * Place a new order in the store
   */
  async placeOrderForm(
    request?: components.Order1 | undefined,
    options?: RequestOptions,
  ): Promise<components.Order1> {
    return unwrapAsync(storePlaceOrderForm(
      this,
      request,
      options,
    ));
  }

  /**
   * Find purchase order by ID
   *
   * @remarks
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   */
  async getOrderById(
    request: operations.GetOrderByIdRequest,
    options?: RequestOptions & {
      acceptHeaderOverride?: GetOrderByIdAcceptEnum;
    },
  ): Promise<operations.GetOrderByIdResponse> {
    return unwrapAsync(storeGetOrderById(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete purchase order by ID
   *
   * @remarks
   * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   */
  async deleteOrder(
    request: operations.DeleteOrderRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(storeDeleteOrder(
      this,
      request,
      options,
    ));
  }
}
