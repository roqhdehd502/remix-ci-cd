import { json } from "@remix-run/node";

import { getSampleByInfo } from "~/services/sample.server";

export const loader = async () => {
  const response = await getSampleByInfo();

  return json(response);
};
