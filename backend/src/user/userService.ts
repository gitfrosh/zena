import Moralis from "moralis";
import { createClient } from "@supabase/supabase-js";
import config from "../config";
import { createWallet } from "../web3util";

const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_SERVICE_KEY);

export interface User {
  name: string;
  email: string;
  avatar: string;
  network: "evm";
  signature: string;
  message: string;
}

export async function createUser({ name, email, avatar }: User) {
  const wallet = createWallet();
  // TODO store keys in database (safely!!)
  let { data: user } = await supabase
    .from("users")
    .insert({
      chapters: [
        { id: 1, succeeded: false },
        { id: 2, succeeded: false },
        { id: 3, succeeded: false },
        { id: 4, succeeded: false },
        { id: 5, succeeded: false },
        { id: 6, succeeded: false },
      ],
      email: email,
      name: name,
      avatar: avatar,
    })
    .single();

  if (!user) {
    console.error("Something went wrong.");
  }

  return { user };
}

export async function updateUser({
  name,
  email,
  avatar,
  network,
  message,
  signature,
}: User) {
  const result = await Moralis.Auth.verify({
    network,
    signature,
    message,
  });

  const authData = result.toJSON();

  let { data: user } = await supabase
    .from("users")
    .update({ name: name, email: email, avatar: avatar })
    .eq("moralis_provid", authData.profileId)
    .single();

  if (!user) {
    console.error("Something went wrong.");
  }

  return { user };
}
