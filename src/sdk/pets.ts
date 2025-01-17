/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { AddFormAcceptEnum, petsAddForm } from "../funcs/petsAddForm.js";
import { AddJsonAcceptEnum, petsAddJson } from "../funcs/petsAddJson.js";
import { AddRawAcceptEnum, petsAddRaw } from "../funcs/petsAddRaw.js";
import { petsDelete } from "../funcs/petsDelete.js";
import {
  FindByStatusAcceptEnum,
  petsFindByStatus,
} from "../funcs/petsFindByStatus.js";
import {
  FindByTagsAcceptEnum,
  petsFindByTags,
} from "../funcs/petsFindByTags.js";
import { GetAcceptEnum, petsGet } from "../funcs/petsGet.js";
import {
  petsUpdateForm,
  UpdateFormAcceptEnum,
} from "../funcs/petsUpdateForm.js";
import {
  petsUpdateJson,
  UpdateJsonAcceptEnum,
} from "../funcs/petsUpdateJson.js";
import { petsUpdateRaw, UpdateRawAcceptEnum } from "../funcs/petsUpdateRaw.js";
import { petsUpdateWithForm } from "../funcs/petsUpdateWithForm.js";
import { petsUploadFile } from "../funcs/petsUploadFile.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { UpdateJsonAcceptEnum } from "../funcs/petsUpdateJson.js";

export { UpdateRawAcceptEnum } from "../funcs/petsUpdateRaw.js";

export { UpdateFormAcceptEnum } from "../funcs/petsUpdateForm.js";

export { AddJsonAcceptEnum } from "../funcs/petsAddJson.js";

export { AddRawAcceptEnum } from "../funcs/petsAddRaw.js";

export { AddFormAcceptEnum } from "../funcs/petsAddForm.js";

export { FindByStatusAcceptEnum } from "../funcs/petsFindByStatus.js";

export { FindByTagsAcceptEnum } from "../funcs/petsFindByTags.js";

export { GetAcceptEnum } from "../funcs/petsGet.js";

export class Pets extends ClientSDK {
  /**
   * Update an existing pet
   *
   * @remarks
   * Update an existing pet by Id
   */
  async updateJson(
    request: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array,
    options?: RequestOptions & { acceptHeaderOverride?: UpdateJsonAcceptEnum },
  ): Promise<operations.UpdatePetJsonResponse> {
    return unwrapAsync(petsUpdateJson(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an existing pet
   *
   * @remarks
   * Update an existing pet by Id
   */
  async updateRaw(
    request: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array,
    options?: RequestOptions & { acceptHeaderOverride?: UpdateRawAcceptEnum },
  ): Promise<operations.UpdatePetRawResponse> {
    return unwrapAsync(petsUpdateRaw(
      this,
      request,
      options,
    ));
  }

  /**
   * Update an existing pet
   *
   * @remarks
   * Update an existing pet by Id
   */
  async updateForm(
    request: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array,
    options?: RequestOptions & { acceptHeaderOverride?: UpdateFormAcceptEnum },
  ): Promise<operations.UpdatePetFormResponse> {
    return unwrapAsync(petsUpdateForm(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a new pet to the store
   *
   * @remarks
   * Add a new pet to the store
   */
  async addJson(
    request: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array,
    options?: RequestOptions & { acceptHeaderOverride?: AddJsonAcceptEnum },
  ): Promise<operations.AddPetJsonResponse> {
    return unwrapAsync(petsAddJson(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a new pet to the store
   *
   * @remarks
   * Add a new pet to the store
   */
  async addRaw(
    request: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array,
    options?: RequestOptions & { acceptHeaderOverride?: AddRawAcceptEnum },
  ): Promise<operations.AddPetRawResponse> {
    return unwrapAsync(petsAddRaw(
      this,
      request,
      options,
    ));
  }

  /**
   * Add a new pet to the store
   *
   * @remarks
   * Add a new pet to the store
   */
  async addForm(
    request: components.Pet2,
    options?: RequestOptions & { acceptHeaderOverride?: AddFormAcceptEnum },
  ): Promise<operations.AddPetFormResponse> {
    return unwrapAsync(petsAddForm(
      this,
      request,
      options,
    ));
  }

  /**
   * Finds Pets by status
   *
   * @remarks
   * Multiple status values can be provided with comma separated strings
   */
  async findByStatus(
    request: operations.FindPetsByStatusRequest,
    options?: RequestOptions & {
      acceptHeaderOverride?: FindByStatusAcceptEnum;
    },
  ): Promise<operations.FindPetsByStatusResponse> {
    return unwrapAsync(petsFindByStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Finds Pets by tags
   *
   * @remarks
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   */
  async findByTags(
    request: operations.FindPetsByTagsRequest,
    options?: RequestOptions & { acceptHeaderOverride?: FindByTagsAcceptEnum },
  ): Promise<operations.FindPetsByTagsResponse> {
    return unwrapAsync(petsFindByTags(
      this,
      request,
      options,
    ));
  }

  /**
   * Find pet by ID
   *
   * @remarks
   * Returns a single pet
   */
  async get(
    security: operations.GetPetByIdSecurity,
    request: operations.GetPetByIdRequest,
    options?: RequestOptions & { acceptHeaderOverride?: GetAcceptEnum },
  ): Promise<operations.GetPetByIdResponse> {
    return unwrapAsync(petsGet(
      this,
      security,
      request,
      options,
    ));
  }

  /**
   * Updates a pet in the store with form data
   */
  async updateWithForm(
    request: operations.UpdatePetWithFormRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(petsUpdateWithForm(
      this,
      request,
      options,
    ));
  }

  /**
   * Deletes a pet
   */
  async delete(
    request: operations.DeletePetRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(petsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * uploads an image
   */
  async uploadFile(
    request: operations.UploadFileRequest,
    options?: RequestOptions,
  ): Promise<components.ApiResponse> {
    return unwrapAsync(petsUploadFile(
      this,
      request,
      options,
    ));
  }
}
