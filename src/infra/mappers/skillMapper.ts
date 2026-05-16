import type { Skill } from "../../domain/skill";
import type { Database } from "../../types/database.types";

type SkillRow = Database["public"]["Tables"]["skills"]["Row"];

export const toSkill = (row: SkillRow): Skill => ({
  id: row.id,
  name: row.name,
  createdAt: row.created_at,
});
