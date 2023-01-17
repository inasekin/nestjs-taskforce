import { plainToInstance, ClassConstructor } from 'class-transformer';

export function fillObject<T, V>(
  dto: ClassConstructor<T>,
  plainObject: V,
  groups: string[] = []
) {
  const options = !groups.length
    ? { excludeExtraneousValues: true }
    : { excludeExtraneousValues: true, groups: [...groups] };

  return plainToInstance(dto, plainObject, { ...options });
}

export function getMongoConnectionString({
  username,
  password,
  host,
  port,
  databaseName,
  authDatabase,
}): string {
  return `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
}
