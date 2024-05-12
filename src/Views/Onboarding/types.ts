export interface IUserProfile {
  username: string;
  tags: number[];
  firstName: string;
  lastName: string;
  country: string;
  about: string;
}

export interface ITag {
  id: number;
  name: string;
}
