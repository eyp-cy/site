import * as migration_20241227_145541_initial from './20241227_145541_initial';
import * as migration_20241227_154913_initial_collections from './20241227_154913_initial_collections';
import * as migration_20241227_155005_nc_member_relation from './20241227_155005_nc_member_relation';
import * as migration_20241227_155222_nc_collection_labels from './20241227_155222_nc_collection_labels';
import * as migration_20241227_155318_nc_collection_labels_2 from './20241227_155318_nc_collection_labels_2';
import * as migration_20241227_162121_optional_event_actions from './20241227_162121_optional_event_actions';
import * as migration_20241228_142513_mandatory_nc_members from './20241228_142513_mandatory_nc_members';

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
    up: migration_20241227_155222_nc_collection_labels.up,
    down: migration_20241227_155222_nc_collection_labels.down,
    name: '20241227_155222_nc_collection_labels',
  },
  {
    up: migration_20241227_155318_nc_collection_labels_2.up,
    down: migration_20241227_155318_nc_collection_labels_2.down,
    name: '20241227_155318_nc_collection_labels_2',
  },
  {
    up: migration_20241227_162121_optional_event_actions.up,
    down: migration_20241227_162121_optional_event_actions.down,
    name: '20241227_162121_optional_event_actions',
  },
  {
    up: migration_20241228_142513_mandatory_nc_members.up,
    down: migration_20241228_142513_mandatory_nc_members.down,
    name: '20241228_142513_mandatory_nc_members'
  },
];
