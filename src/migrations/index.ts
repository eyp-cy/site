import * as migration_20250216_123429_schema from './20250216_123429_schema';
import * as migration_20250520_213139_foo from './20250520_213139_foo';

export const migrations = [
  {
    up: migration_20250216_123429_schema.up,
    down: migration_20250216_123429_schema.down,
    name: '20250216_123429_schema',
  },
  {
    up: migration_20250520_213139_foo.up,
    down: migration_20250520_213139_foo.down,
    name: '20250520_213139_foo'
  },
];
