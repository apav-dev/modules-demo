import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface ModuleProps {
  children: React.ReactNode;
}

export const ModuleWrapper = ({ children }: ModuleProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="tailwind">{children} </div>
    </QueryClientProvider>
  );
};
