import { useParams } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";
import { useSkills } from "../../../hooks/useSkills";

export const CardDetail = () => {
  const { id } = useParams();
  const {
    data: user,
    isLoading: isUserLoading,
    error: userError,
  } = useUser(id);
  const {
    data: skills,
    isLoading: isSkillsLoading,
    error: skillsError,
  } = useSkills(user?.id.toString());

  if (isUserLoading || isSkillsLoading) return <div>Loading...</div>;
  if (userError || skillsError) return <div>Error</div>;
  if (!user) return <div>No user</div>;

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.description}</p>
      {skills?.map((skill) => (
        <p>{skill.name}</p>
      ))}
      <p>{user.githubId}</p>
      <p>{user.qiitaId}</p>
      <p>{user.xId}</p>
    </div>
  );
};
