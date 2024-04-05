export enum RestaurantStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  WAITING = "WAITING",
  BLOCKED = "BLOCKED",
}

export type RestaurantResponse = {
  id: number;
  name: string;
  description: string;
  bannerImage: string;
  logoImage: string;
  url: string;
  rating: number;
  address: string;
  userId: number;
  status: RestaurantStatus;
  createdAt: string;
  updatedAt: string;
};

export type RestaurantSearchUrlRequest = {
  url: string;
};
