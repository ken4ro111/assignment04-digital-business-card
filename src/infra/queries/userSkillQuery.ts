import type { Skill } from "../../domain/skill";
import { supabase } from "../../utils/supabase/supabase";
import { toSkill } from "../mappers/skillMapper";

export const userSkillQuery = {
  fetchSkillsByUserId: async (userId: string): Promise<Skill[]> => {
    const { data, error } = await supabase
      .from("user_skill")
      .select("skills(id, name, created_at)")
      .eq("user_id", userId);

    if (error) throw new Error(error.message);

    return data.map((row) => toSkill(row.skills));
  },
};
