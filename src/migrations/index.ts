import * as migration_20241227_145541_initial from './20241227_145541_initial'
import * as migration_20241227_154913_initial_collections from './20241227_154913_initial_collections'
import * as migration_20241227_155005_nc_member_relation from './20241227_155005_nc_member_relation'
import * as migration_20241229_175611_complex_events from './20241229_175611_complex_events'
import * as migration_20241229_180219_session_elements from './20241229_180219_session_elements'
import * as migration_20241229_180322_connect_session_elements from './20241229_180322_connect_session_elements'

export const migrations = [
  {
    up: migration_20241227_145541_initial.up,
    down: migration_20241227_145541_initial.down,
    name: '20241227_145541_initial',
  },
  {
    up: migration_20241227_154913_initial_collections.up,
    down: migration_20241227_154913_initial_collections.down,
    name: '20241227_154913_initial_collections',
  },
  {
    up: migration_20241227_155005_nc_member_relation.up,
    down: migration_20241227_155005_nc_member_relation.down,
    name: '20241227_155005_nc_member_relation',
  },
  {
    up: migration_20241229_175611_complex_events.up,
    down: migration_20241229_175611_complex_events.down,
    name: '20241229_175611_complex_events',
  },
  {
    up: migration_20241229_180219_session_elements.up,
    down: migration_20241229_180219_session_elements.down,
    name: '20241229_180219_session_elements',
  },
  {
    up: migration_20241229_180322_connect_session_elements.up,
    down: migration_20241229_180322_connect_session_elements.down,
    name: '20241229_180322_connect_session_elements',
  },
]
