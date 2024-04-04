export interface BaseResponse<T> {
  totalElements: number;
  totalPages: number;
  code: string;
  data?: T;
  message: string;
  error: BaseError;
}

interface BaseError {
  errorCode: number;
  errorMessage?: string;
  url?: string;
}

export type EventBaseResponse<T> = {
  code: string;
  message: string;
  systemCode: string;
  systemMessage: string;
  data: T[];
};
