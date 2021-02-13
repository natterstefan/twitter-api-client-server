import { Response, Request, NextFunction } from 'express'

/**
 * Provides a simple, relevance-based search interface to public user accounts
 * on Twitter.
 *
 * @docs https://github.com/FeedHive/twitter-api-client/blob/master/REFERENCES.md#accountsandusers
 * @route GET /api/accountsAndUsers/usersSearch/:username
 *
 * @example http://localhost:3000/api/accounts-and-user/users-search/natterstefan
 */
export const usersSearch = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await res.locals.twitterClient.accountsAndUsers.usersSearch({
      q: req.params.username,
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
}
