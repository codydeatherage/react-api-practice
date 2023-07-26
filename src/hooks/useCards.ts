import { useQuery } from "@tanstack/react-query";
import { cardQuery } from "../queries/cards";

export default function useCards(params?: string) {
  const { isLoading, error, data, refetch, isFetching } = useQuery({
    queryKey: ["cardFetch"],
    queryFn: () => cardQuery(params || '')
  });

  return { isLoading, error, data, refetch, isFetching };
}
