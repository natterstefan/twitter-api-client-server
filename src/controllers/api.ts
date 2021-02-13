import { Response, Request } from 'express'
import { TwitterClient } from 'twitter-api-client'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
})

/**
 * Provides a simple, relevance-based search interface to public user accounts
 * on Twitter.
 *
 * @docs https://github.com/FeedHive/twitter-api-client/blob/master/REFERENCES.md#accountsandusers
 * @route GET /api/accounts-and-user/users-search/:username
 *
 * @example http://localhost:3000/api/accounts-and-user/users-search/natterstefan
 */
export const usersSearch = async (req: Request, res: Response) => {
  const data = await twitterClient.accountsAndUsers.usersSearch({
    q: req.params.username,
  })
  res.json(data)
}
