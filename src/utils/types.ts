export interface IRequestAction {
  type: string;
  payload?: {
    [x: string]: any;
  };
}

export interface IActions {
  onRequest: () => IRequestAction;
  onSuccess: (response: any) => IRequestAction;
  onFailure: (err: string) => IRequestAction;
}

export interface IRequestOptions {
  path: string;
  method: string;
  body?: {
    [name: string]: any;
  };
}
