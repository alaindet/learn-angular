// TODO: Move to shared
export type Entities<T = any> = {
  [key: string]: T;
};

export type List = {
  id: string;
  name: string;
};

export type EditListDTO = Omit<List, 'id'>;

export type ListEntities = Entities<List>;
