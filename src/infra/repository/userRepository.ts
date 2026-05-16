import type { User } from "../../domain/user";
import { supabase } from "../../utils/supabase/supabase";
import { toUser } from "../mappers/userMapper";

export const userRepository = {
  fetchAll: async (): Promise<User[]> => {
    const { data, error } = await supabase.from("users").select("*");

    if (error) throw new Error(error.message);

    return data.map((row) => toUser(row));
  },
  fetchById: async (id: string): Promise<User> => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw new Error(error.message);

    return toUser(data);
  },
};
