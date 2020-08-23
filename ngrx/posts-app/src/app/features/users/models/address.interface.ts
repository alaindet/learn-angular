import { GeographicCoordinates } from './geographic-coordinates.interface';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeographicCoordinates;
}
