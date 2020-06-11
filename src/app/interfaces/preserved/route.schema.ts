export default interface RouteSchema {
  path: string;
  exact: boolean;
  redirect: string;
  authorization?: string;
  preload?: boolean;
  children?: RouteSchema[];
}
