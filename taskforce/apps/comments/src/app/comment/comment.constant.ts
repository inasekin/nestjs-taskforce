export const DEFAULT_SORT_DIRECTION = 'desc';
export const DEFAULT_COMMENT_COUNT_LIMIT = 2;
export const DEFAULT_PAGINATION_COUNT = 1;

export const enum TextLength {
  Min = 10,
  Max = 300,
}

export const CommentApiError = {
  TextNotValid: `Comment text is out of range: min ${TextLength.Min}, max ${TextLength.Max} chars length`,
} as const;

export const CommentApiDescription = {
  Id: 'The uniq comment id',
  AuthorId: 'Uniq comment creator user id',
  TaskId: 'Comment\'s parent task id',
  PublishAt: 'The comment creation date, ISO8601 string',
  Text: `Comment text, string length min ${TextLength.Min}, max ${TextLength.Max} chars`,
} as const;
