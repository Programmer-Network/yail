import { faker } from "@faker-js/faker";

import ContentWidget from ".";

export default {
  title: "Core/ContentWidget",
  parameters: {
    layout: "centered"
  },
  component: ContentWidget
};

export const Default = () => {
  return (
    <ContentWidget<{
      id: number;
      title: string;
    }>
      title='Latest articles'
      className='min-w-[300px]'
      isLoading={false}
      more={{
        tooltipText: "See more articles",
        iconClassName: "w-4",
        onClick: () => {
          alert("More articles clicked");
        }
      }}
      items={Array(5)
        .fill(0)
        .map((_, index) => ({
          onClick: item => {
            alert(`Item clicked: ${item.title} and id ${item.id}`);
          },
          item: {
            id: index,
            title: faker.lorem.words(5)
          }
        }))}
    />
  );
};

export const LoadingState = () => {
  return (
    <ContentWidget<{
      id: number;
      title: string;
    }>
      title='Loading articles'
      className='min-w-[300px]'
      isLoading={true}
      items={[]}
    />
  );
};

export const EmptyState = () => {
  return (
    <ContentWidget<{
      id: number;
      title: string;
    }>
      title='No articles found'
      className='min-w-[300px]'
      isLoading={false}
      items={[]}
    />
  );
};

export const WithCustomItems = () => {
  return (
    <ContentWidget<{
      id: number;
      title: string;
      description: string;
      author: string;
    }>
      title='Featured articles'
      className='min-w-[300px]'
      isLoading={false}
      items={Array(5)
        .fill(0)
        .map((_, index) => ({
          onClick: item => {
            alert(`Item clicked: ${item.title}, id ${item.id}`);
          },
          item: {
            id: index,
            title: faker.lorem.words(5),
            description: faker.lorem.sentence(),
            author: faker.person.fullName()
          }
        }))}
      more={{
        tooltipText: "See more articles",
        iconClassName: "w-4",
        onClick: () => {
          alert("More articles clicked");
        }
      }}
    />
  );
};
