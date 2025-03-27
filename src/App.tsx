import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { Toaster } from "sonner";

export function App() {
  return (
    <>
      <Toaster richColors toastOptions={{ style: { padding: "16px" } }} />
      <RouterProvider router={router} />
    </>
  );
}
