import AddSocialPlatform from ".";

export default {
  title: "Components/AddSocialPlatform",
  parameters: {
    layout: "centered"
  },
  component: AddSocialPlatform
};

const SOCIAL_PLATFORMS = [
  {
    name: "Website",
    url: ""
  },
  {
    name: "Github",
    url: "github.com/"
  },
  {
    name: "Gitlab",
    url: "gitlab.com/"
  },
  {
    name: "Stackoverflow",
    url: "stackoverflow.com/users/"
  },
  {
    name: "Linkedin",
    url: "linkedin.com/in/"
  },
  {
    name: "YouTube",
    url: "youtube.com/"
  },
  {
    name: "Twitter",
    url: "twitter.com/"
  },
  {
    name: "Mastodon",
    url: "mastodon.social/"
  },
  {
    name: "Codewars",
    url: "codewars.com/users/"
  },
  {
    name: "Patreon",
    url: "patreon.com/user?u="
  },
  {
    name: "Hackernews",
    url: "news.ycombinator.com/user?id="
  },
  {
    name: "Reddit",
    url: "reddit.com/user/"
  },
  {
    name: "Hackerrank",
    url: "hackerrank.com/"
  },
  {
    name: "Leetcode",
    url: "leetcode.com/"
  },
  {
    name: "Exercism",
    url: "exercism.org/profiles/"
  }
];

export const Default = () => {
  return (
    <div>
      <AddSocialPlatform
        platforms={SOCIAL_PLATFORMS}
        onAdd={data => console.log(data)}
      />
    </div>
  );
};
