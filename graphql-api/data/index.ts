import * as Debates from './debate.json';

const debateID = () => {
  let debateList = [];
  for(let i = 0; i < Object.keys(Debates).length - 1; i++) {
    debateList.push(Debates[i].youtube_id);
  }
  return debateList;
}
export const debateList = debateID();
