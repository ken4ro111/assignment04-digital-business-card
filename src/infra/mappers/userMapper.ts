import type { User } from "../../domain/user";
import type { Database } from "../../types/database.types";

type UserRow = Database["public"]["Tables"]["users"]["Row"];

export const toUser = (row: UserRow): User => ({
  id: row.id,
  name: row.name,
  description: row.description,
  githubId: row.github_id,
  qiitaId: row.qiita_id,
  xId: row.x_id,
  createdAt: row.created_at,
});
