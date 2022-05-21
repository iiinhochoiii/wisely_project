export interface Posts {
  id: number;
  content: string;
  createdAt: string | Date;
  updatedAt?: string | Date;
  isDone: boolean | number;
  refId?: number[];
}