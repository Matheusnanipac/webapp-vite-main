import { productMockApi } from "@/mock/product";

export type ListProductParams = {
  item: (typeof productMockApi)["followUp"][0];
  index: number;
};
