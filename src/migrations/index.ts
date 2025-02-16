import * as migration_20250216_123429_schema from './20250216_123429_schema';

export const migrations = [
  {
    up: migration_20250216_123429_schema.up,
    down: migration_20250216_123429_schema.down,
    name: '20250216_123429_schema'
  },
];
