import { useCallback } from "react";

interface UsePaginationProps {
  setPage: (value: number) => void;
  limit: number;
  totalItems: number;
}

export function usePagination({
  setPage,
  limit,
  totalItems
}: UsePaginationProps) {
  const totalPages = Math.ceil(totalItems / limit);

  const handlePageChange = useCallback(
    (_: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    },
    [setPage]
  );

  return {
    totalPages,
    handlePageChange
  };
}
