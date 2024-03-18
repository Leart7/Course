import { useQuery } from "@tanstack/react-query";
import { getStatuses } from "../services/apiStatuses";

export function useStatuses() {
  const { isLoading, data: statuses } = useQuery({
    queryKey: ["statuses"],
    queryFn: getStatuses,
  });

  return { isLoading, statuses };
}
