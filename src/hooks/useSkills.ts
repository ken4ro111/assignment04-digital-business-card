import { useQuery } from "@tanstack/react-query";
import { userSkillQuery } from "../infra/queries/userSkillQuery";

export const useSkills = (userId: string | undefined) => {
  return useQuery({
    queryKey: ["skills", userId],
    queryFn: () => userSkillQuery.fetchSkillsByUserId(userId!),
    enabled: !!userId,
  });
};
