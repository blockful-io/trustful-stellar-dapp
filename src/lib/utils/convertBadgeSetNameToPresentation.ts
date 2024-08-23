export const convertBadgeSetNameToPresentation = (badgeSetNameFromApi: string) => {
  return badgeSetNameFromApi.replaceAll("-", " ");
};
