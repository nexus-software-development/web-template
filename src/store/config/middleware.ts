import { AuthService } from "../services/auth";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (getDefaultMiddleware: any) => {
  const middleware = getDefaultMiddleware({
    serializableCheck: false
  }).concat(AuthService.middleware);

  return middleware;
};
