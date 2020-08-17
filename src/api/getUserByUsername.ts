import { NowRequest, NowResponse } from '@vercel/node'


const getUser = (username: string)=>{
  Promise.all([
    fetch(`https:/api.github.com/users/${username}`),
    fetch(`https:/api.github.com/users/${username}/repos`)
  ]).then(async (responses) => {
    const [ userResponse, reposResponse ] = responses;
    if (userResponse.status === 404) {
      return;
    }
    const user = await userResponse.json();
    const repos = await reposResponse.json();
    const shuffledRepos = repos.sort(()=>0.5-Math.random())
    const sliced = shuffledRepos.slice(0,6);
    return {user,sliced}
  });
}


module.exports = (req: NowRequest, res: NowResponse) => {
  const {username} = req.body;
  
  const response = getUser(username);
  console.log(response)
 
  res.json({ name: 'John', email: 'john@example.com' })
}