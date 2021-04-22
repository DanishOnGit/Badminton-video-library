import { v4 as uuidv4 } from 'uuid';

export const playlists = [
  {
    listName: "My playlist",
    listId: uuidv4(),
    listVideos: [
      {
        id: "v=MsHMCZlcrXM",
        videoTitle: "Basic badminton for beginners - PART 1 OF 3",
        channelName: "Shuttle Life",
        level: "Beginner",
        thumbnail:
          "https://i.postimg.cc/KvwSPfLg/salman-hossain-saif-24z-MNig-Ma5-A-unsplash.jpg",
        avatar:
          "https://i.postimg.cc/hhr25Svj/salman-hossain-saif-n-Lerr-P856-o-unsplash.jpg"
      }
    ]
  }
];

