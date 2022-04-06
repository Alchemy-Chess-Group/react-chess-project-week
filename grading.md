# Chess Project Week

This is really great team! I think you all did an excellent job challenging yourself on both using new open source libraries as well as Supabase realtime. A few small notes / comments but overall excellent work!

- remember to use RESTful routes - `/edit-profile` should be `/profile/edit`
- your profile mock is the same as your ProfileContext -- the benefit of a mock is so that we can avoid calling supabase in our tests - you can pass a mockProfile to avoid the useEffect in the mock.
- your Profile load errors out if there is no user logged in - fix this by wrapping your useEffect in a conditional
- I'd be careful with storing email on both the users table and the profile table -- the two could get out of sync and cause issues
- Great work getting the open source chess libraries working - its really great. I don't think you're too far off from being able to have multiple games. Just make the game room a restful route and useParams to get the game id.
- It would be nice to know which player's turn it is.
- Chat box is great - nice work using supabase real time. I think you just need to add the relationship to the game in order to make that more universal so then instead of loading all chats, you would load chats associated with a specific game.
- Overall, I think your code is really clean and easy to read -- nice work. The only refactor I would maybe do is move some of the game logic into a custom hook just to clean up the ChessBoard component a little.
