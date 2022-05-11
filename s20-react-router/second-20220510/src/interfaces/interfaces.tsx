export type Quote = {
  id: string;
  author: string;
  text: string;
};

export type HttpState = {
  data: any;
  error: string | null;
  status: "pending" | "completed";
};

export enum HttpActions {
  HttpSend = "[HTTP] Send",
  HttpSuccess = "[HTTP] Success",
  HttpError = "[HTTP] Error",
}

export type HttpActionTypes =
  | {
      type: HttpActions.HttpSend;
    }
  | {
      type: HttpActions.HttpSuccess;
      responseData: any;
    }
  | {
      type: HttpActions.HttpError;
      errorMessage: string;
    };
