import Prismic from 'prismic-javascript';

const apiEndpoint = 'https://orphansmap.cdn.prismic.io/api/v2';

export const client = Prismic.client(apiEndpoint);

export const linkResolver = (doc) => {
  // URL for a page type
  if (doc.type === 'post') {
    return `/article/[${doc.uid}]`;
  }
  // Backup for all other types
  return '/';
};
