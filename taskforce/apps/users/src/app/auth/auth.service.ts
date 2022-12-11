import { Injectable } from '@nestjs/common';
import { UserMemoryRepository } from '../user/user-memory.repository';

@Injectable()
export class AuthService {
  constructor(private readonly blogUserRepository: UserMemoryRepository) {}
}
