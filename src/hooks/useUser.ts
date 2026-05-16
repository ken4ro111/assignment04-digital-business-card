import { useQuery } from "@tanstack/react-query";
import { userRepository } from "../infra/repository/userRepository";

export const useUser = (id: string | undefined) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => userRepository.fetchById(id!),
    enabled: !!id,
  });
};
