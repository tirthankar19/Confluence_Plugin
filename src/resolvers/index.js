import Resolver from '@forge/resolver';
import api, { route } from "@forge/api";

const resolver = new Resolver();

resolver.define('getText', async (req) => {
  console.log(req.context.accountId);
  const accountId = req.context.accountId;
  const response = await api
    .asUser()
    .requestConfluence(route`/wiki/rest/api/user?accountId=${accountId}`, {
      headers: {
        Accept: "application/json",
      },
    });

  const currentUser = await response.json();
  console.log(currentUser.displayName);
  return currentUser.displayName;
});
resolver.define("getPageId", async (req) => {
  const pageId = req.context.extension.content.id;
  console.log(pageId);
});
export const handler = resolver.getDefinitions();
