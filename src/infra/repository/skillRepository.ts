import type { Skill } from "../../domain/skill";
import { supabase } from "../../utils/supabase/supabase";
import { toSkill } from "../mappers/skillMapper";

export const skillRepository = {
  fetchAll: async (): Promise<Skill[]> => {
    const { data, error } = await supabase.from("skills").select("*");

    if (error) throw new Error(error.message);

    return data.map((row) => toSkill(row));
  },
};
