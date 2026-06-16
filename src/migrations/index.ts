import * as migration_20260604_035531_initial from './20260604_035531_initial';
import * as migration_20260616_hero_slides_image_url from './20260616_hero_slides_image_url';

export const migrations = [
  {
    up: migration_20260604_035531_initial.up,
    down: migration_20260604_035531_initial.down,
    name: '20260604_035531_initial'
  },
  {
    up: migration_20260616_hero_slides_image_url.up,
    down: migration_20260616_hero_slides_image_url.down,
    name: '20260616_hero_slides_image_url'
  },
];
