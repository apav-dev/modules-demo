export interface YextResponse<T = any> {
  meta: {
    uuid: string;
    errors?: any[];
  };
  response: T;
}
