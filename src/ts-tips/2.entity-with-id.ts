type Entity = { type: 'user' } | { type: 'post' } | { type: 'comment' }

type EntityWithId =
  | { type: 'user'; userId: string }
  | { type: 'post'; postId: string }
  | { type: 'comment'; commentId: string }

type EntityWithIdGeneric = {
  [key in Entity['type']]: {
    type: key
  } & Record<`${key}Id`, string>
}[Entity['type']]

const result: EntityWithIdGeneric = {
  type: 'user',
  userId: '123',
}
