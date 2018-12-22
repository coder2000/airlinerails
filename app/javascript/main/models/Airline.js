// @flow

import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

export default class Airline extends Model {
  static table = 'airlines';

  @field('name') name;

  @field('city') city;
}
