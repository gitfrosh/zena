import Moralis from "moralis";
import { createClient } from "@supabase/supabase-js";
import config from "../config";
var jwt = require("jsonwebtoken");

const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_SERVICE_KEY);

export interface RequestMessage {
  address: string;
  chain: string;
  network: string;
}

const DOMAIN = "zena-cqgcg.spheron.app";
const STATEMENT = "Please sign this message to confirm your identity.";
const URI = "https://zena-cqgcg.spheron.app/";
const EXPIRATION_TIME = "2023-01-01T00:00:00.000Z";
const TIMEOUT = 15;

export async function requestMessage({
  address,
  chain,
  network,
}: {
  address: string;
  chain: string;
  network: "evm";
}) {
  const result = await Moralis.Auth.requestMessage({
    address,
    chain,
    network,
    domain: DOMAIN,
    statement: STATEMENT,
    uri: URI,
    expirationTime: EXPIRATION_TIME,
    timeout: TIMEOUT,
  });

  const { message } = result.toJSON();

  return message;
}

export interface VerifyMessage {
  network: "evm";
  signature: string;
  message: string;
}

export async function verifyMessage({
  network,
  signature,
  message,
}: VerifyMessage) {
  const result = await Moralis.Auth.verify({
    network,
    signature,
    message,
  });

  const authData = result.toJSON();

  let { data: user } = await supabase
    .from("users")
    .select("*")
    .eq("moralis_provid", authData.profileId)
    .single();

  if (!user) {
    const response = await supabase
      .from("users")
      .insert({
        moralis_provid: authData.profileId,
        metadata: authData,
        name: [],
      })
      .single();
    user = response.data;
  }

  const token = jwt.sign(
    {
      ...user,
      aud: "authenticated",
      role: "authenticated",
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
    },
    config.SUPABASE_JWT
  );

  return { user, token };
}
