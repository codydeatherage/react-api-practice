import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useCards(params?: string) {
  const { isLoading, error, data, refetch, isFetching } = useQuery({
    queryKey: ["cardFetch"],
    queryFn: (): Promise<CardResponse[]> =>
      axios
        .get(`https://api.magicthegathering.io/v1/cards${params ?? ''}`)
        .then((res) => res.data.cards),
  });

  return { isLoading, error, data, refetch, isFetching };
}
