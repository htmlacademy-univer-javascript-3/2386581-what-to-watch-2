export const formatDate = (postDate: Date) =>
  `${postDate.toLocaleString('eng', {
    month: 'long',
  })} ${postDate.getDate()}, ${postDate.getFullYear()}`;
