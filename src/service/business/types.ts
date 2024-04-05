export type BusinessResponse = {
  createdAt: Date;
  name: string;
  logo: string;
  banner: string;
  description: string;
  status: boolean;
  rating: number;
  estimated_time: number;
  url_schema: string;
  id: string;
};

export type GetBusinessIdParams = {
  id: string;
};
