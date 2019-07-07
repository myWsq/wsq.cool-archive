export interface Todo {
  text: string;
  createdAt: Date;
}

export interface TodoStoreDeleteItemPayload {
  index: number;
}

export interface TodoStoreUpdateItemPayload extends TodoStoreDeleteItemPayload {
  item: Todo;
}

export interface TodoStoreState {
  list: Todo[] | undefined;
}
