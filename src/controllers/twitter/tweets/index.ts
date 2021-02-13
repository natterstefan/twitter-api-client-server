import { Response, Request, NextFunction } from 'express'

/**
 * Provides a simple, relevance-based search interface to public user accounts
 * on Twitter.
 *
 * @docs https://github.com/FeedHive/twitter-api-client/blob/master/REFERENCES.md#tweets
 * @route GET /api/tweets/statusesUserTimeline/:username
 *
 * @example http://localhost:3000/api/tweets/statusesUserTimeline/natterstefan
 */
export const statusesUserTimeline = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await res.locals.twitterClient.tweets.statusesUserTimeline({
      screen_name: req.params.screenName,
    })
    res.json(data)
  } catch (err) {
    next(err)
  }
}
