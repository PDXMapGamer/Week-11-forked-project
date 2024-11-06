Fixes & Feature Requests (Stretch goals)

    Fix page titles on post pages to match the post title #DONE (minor bug)
    Handle the error when you click to vote while not logged in to show a nice error message #DONE
    Try to make it so I can't vote more than once (Fix could be done in the SQL with the constraints  (ideally), or in-app code to check the db before adding a new row to the votes table)#NOT SURE WHAT THIS WANTS FROM ME
    Users can vote an infinite number of times on the same post. We'd like to prevent this happening. It should be enforced at the Schema level with the UNIQUE constraint but it isn't working. We'd like you to try and fix this, either by correcting the schema (preferable) or if not by implementing the restriction in the application code when the user tries to upvote.#DONE
    There are more potential stretch goals to choose from in the ReadMe - look at the future features if you are all done and twiddling your thumbs or you want to chellenge yourself further.
    Other stuff not on moodle:
      Fixed bug where site would crash if a user attempted to comment while logged in. (due to next feature this theoretically should not be possible to do anyways).
      Change it so users not logged in can not see "reply" on posts (instead they are told to log in to reply) and they may not click it to open the form to submit a comment.

🎯 Please mention the requirements you met and which goals you achieved for this assignment.
I have met the core requirements by getting it deployed to vercel sucessfully and several stretch goals which are outlined above.

🎯 Were there any requirements or goals that you were not quite able to achieve?
I have completed all stretch goals I have attempted and there are many more I could have tried to implement, if I had more time. However after testing the deployment on vercel I have noticed that there is a minor bug where if you try to upvote a post while not logged in and then log in to upvote the post the message saying you can't upvote a post without being logged in will still appear despite you being logged in and allowed to upvote posts. This appears to be pure a visual bug as it does not effect the functionality of the upvote system and aside from the bug it is working as intended.
🎯 If so, could you please tell us what was it that you found difficult about these tasks?
While trying to use the toast() function to send a message when the user tries to upvote a post while not logged in I came across a variety of bugs such as toast() is not a function which took way too long to solve when the solution was simple. unlike basically everything else we import where we use {} to destructure it toast can not be destructured, and when looking into this problem no site anywhere mentioned this and it took several reviews over the docs to catch this out, in the docs page they import toast as well as something destructured so my brain just skipped over how the fundimental toast function is supposed to be imported. Also it does not work in server components and can't be used in the comment.js action file so I can't (as far as I know) use it after the user tries posting a comment while not logged in (I sucessfully got the post submit reply button to not break when replying while not logged in but I wanted the user to be notified why nothing is happening) so I had to implement an alternative way to stop that by not letting the user even open up the form to reply in the first place.

## Upvote

Upvote is a Reddit-esque web application that allows users to create posts, upvote and downvote posts, and comment on posts in a multi-threaded, nested list.

The project is built using Next.js with the /app router and [Tailwind CSS](https://tailwindcss.com/), and uses [Auth.js (formerly Next Auth)](https://authjs.dev/) for user authentication. The data is stored in a Postgres database, which is created and accessed with raw SQL queries using the `pg` package.

The project is a work in progress and is not yet complete.

## Features

- [x] View a list of posts
- [x] View a single post
- [x] Create a post
- [x] Upvote and downvote posts
- [x] Pagination of posts
- [x] Comment on posts
- [x] Nested comments (recursive lists)
- [x] User authentication

## Setup instructions

1. Fork the repository (check "copy the main branch only") and clone your fork to your local machine
2. Run `npm install`
3. Create a `.env.local` file in the root directory and add the following environment variables:
   - `DATABASE_URL` - the URL of your Postgres database (eg. the Supabase connection string)
   - `AUTH_SECRET` - the Next Auth secret string (this can be anything at all like a password, but keep it secret!)
   - `AUTH_GITHUB_ID` - the GitHub OAuth client ID (create yours in [Github developer settings](https://github.com/settings/developers))
   - `AUTH_GITHUB_SECRET` - the GitHub OAuth client secret (create this in [Github developer settings](https://github.com/settings/developers))
4. Create the database schema by running the SQL commands in `schema.sql` in your database (eg. by running the commands in Supabase Query Editor)
5. Run `npm run dev` to start the development server
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the site

## Potential future features

- [ ] User profiles
- [ ] Sorting posts by recent (date posted), top (most upvotes), and most controversial (most upvotes _and_ downvotes)
- [ ] User karma scores
- [ ] User badges / trophies (awards for achievements like number of posts, years on the site, etc.)
- [ ] User settings (eg. number of posts per page, theme, etc.)
- [ ] Moderation tools / reporting or flagging objectionable comments for removable by admins
- [ ] Searching posts (possibly using simple SQL LIKE '%some search%', or [Postgres text search](https://www.crunchydata.com/blog/postgres-full-text-search-a-search-engine-in-a-database))
- [ ] Subreddits (separate communities, that isn't just one big list of posts, that can be created by users)
- [ ] User notifications
- [ ] User private messaging
- [ ] User blocking
- [ ] User following
- [ ] User feed (posts from users you follow)
- [ ] User flair
