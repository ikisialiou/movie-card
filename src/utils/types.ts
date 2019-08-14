export interface RequestAction {
  type: string;
  payload?: {
    [x: string]: any;
  };
}

export interface Actions {
  onRequest: () => RequestAction;
  onSuccess: (response: any) => RequestAction;
  onFailure: (err: string) => RequestAction;
}

export interface RequestOptions {
  path: string;
  method: string;
  body?: {
    [name: string]: any;
  };
}
