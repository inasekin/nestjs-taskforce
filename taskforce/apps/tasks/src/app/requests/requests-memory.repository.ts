import { CRUDRepository } from '@taskforce/core';
import { UserRequest } from '@taskforce/shared-types';
import RequestEntity from './requests.enity';
import * as crypto from 'crypto';

export default class RequestsMemoryRepository
  implements CRUDRepository<RequestEntity, string, UserRequest>
{
  private repository: { [key: string]: UserRequest } = {};

  public async create(item: RequestEntity): Promise<UserRequest> {
    const entry = {
      ...item.toObject(),
      _id: crypto.randomUUID(),
      creationDate: new Date(),
    };
    this.repository[entry._id] = entry;
    console.log({ ...entry });
    return { ...entry };
  }

  public async index(): Promise<UserRequest[]> {
    return Object.values(this.repository);
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async findById(id: string): Promise<UserRequest | null> {
    const entry = this.repository[id];
    if (!entry) {
      return null;
    }
    return { ...entry };
  }

  public async update(id: string, item: RequestEntity): Promise<UserRequest> {
    this.repository[id] = { ...item.toObject(), id: id } as UserRequest;

    return this.findById(id);
  }
}
