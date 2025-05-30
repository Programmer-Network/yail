import type { Meta } from "@storybook/react-vite";
import { NavLink } from "react-router-dom";

import Cards from ".";
import { ICardsProps } from "./types";

const CardsStories: Meta<ICardsProps> = {
  title: "Components/Cards",
  parameters: {
    layout: "centered"
  },
  component: Cards,
  argTypes: {}
} satisfies Meta<typeof Cards>;

export const Default = () => {
  const cards = [
    {
      id: 6,
      author: {
        id: 1,
        username: "aleksandar",
        firstName: "Aleksandar",
        lastName: "Grbic",
        avatar: ""
      },
      title: "capacitor Bicycle Northeast neural sharply",
      summary:
        "Gasoline Americium West Cotton Avon Card shakily Avon Palo consequuntur Interactions unless Way Warner Radon",
      slug: "capacitor-bicycle-northeast-neural-sharply",
      tags: [
        {
          id: 9,
          description:
            "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.",
          name: "go"
        }
      ],

      createdAt: "2024-02-24T09:21:52.722Z",
      source: "platform",
      displayDate: "59 minutes ago"
    },
    {
      id: 12,
      author: {
        id: 1,
        username: "aleksandar",
        firstName: "Aleksandar",
        lastName: "Grbic",
        avatar: ""
      },
      title: "orchid SUV intently Practical Elgin",
      summary:
        "Southeast Northwest Regional Electric lux Southeast Orchestrator tape hic synergistic discrete encompassing cross Orchestrator Rustic",
      slug: "orchid-suv-intently-practical-elgin",
      tags: [
        {
          id: 9,
          description:
            "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.",
          name: "go"
        }
      ],

      createdAt: "2024-02-24T09:21:52.722Z",
      source: "platform",
      displayDate: "59 minutes ago"
    },
    {
      id: 11,
      author: {
        id: 1,
        username: "aleksandar",
        firstName: "Aleksandar",
        lastName: "Grbic",
        avatar: ""
      },
      title: "Unbranded Van indigo Crew cane",
      summary:
        "azure Caesium intranet female Outdoors Liaison Alabama Burundi Toys Sausages parsing Phased upbeat libero Mobility",
      slug: "unbranded-van-indigo-crew-cane",
      tags: [
        {
          id: 4,
          description:
            "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.",
          name: "angular"
        }
      ],

      createdAt: "2024-02-24T09:21:52.722Z",
      source: "platform",
      displayDate: "59 minutes ago"
    },
    {
      id: 14,
      author: {
        id: 1,
        username: "aleksandar",
        firstName: "Aleksandar",
        lastName: "Grbic",
        avatar: ""
      },
      title: "lake bypassing New initiatives Praseodymium",
      summary:
        "Internal azure calculate South online productize Outdoors Toys Inverse Pontiac application Overpass Associate Managed Groves",
      slug: "lake-bypassing-new-initiatives-praseodymium",
      tags: [
        {
          id: 2,
          description:
            "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.",
          name: "javascript"
        }
      ],

      createdAt: "2024-02-24T09:21:52.722Z",
      source: "platform",
      displayDate: "59 minutes ago"
    },
    {
      id: 8,
      author: {
        id: 1,
        username: "aleksandar",
        firstName: "Aleksandar",
        lastName: "Grbic",
        avatar: ""
      },
      title: "male East deposit Emard Computer",
      summary:
        "rap gee Diesel Towels Soap Developer Inverse Hybrid Dubnium outside Electric perm Xenon program Program",
      slug: "male-east-deposit-emard-computer",
      tags: [
        {
          id: 7,
          description:
            "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.",
          name: "typescript"
        }
      ],

      createdAt: "2024-02-24T09:21:52.722Z",
      source: "platform",
      displayDate: "59 minutes ago"
    },
    {
      id: 2,
      author: {
        id: 1,
        username: "aleksandar",
        firstName: "Aleksandar",
        lastName: "Grbic",
        avatar: ""
      },
      title: "protocol West indigo separately Wagon",
      summary:
        "Implementation Assistant fluffy state Shore a female zero female vague Alafaya connecting JSON Lamborghini withdrawal",
      slug: "protocol-west-indigo-separately-wagon",
      tags: [
        {
          id: 6,
          description:
            'C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
          name: "c++"
        }
      ],

      createdAt: "2024-02-24T09:21:52.721Z",
      source: "platform",
      displayDate: "59 minutes ago"
    },
    {
      id: 4,
      author: {
        id: 1,
        username: "aleksandar",
        firstName: "Aleksandar",
        lastName: "Grbic",
        avatar: ""
      },
      title: "blue South Account Account Robust",
      summary:
        "Recycled system unnerve pink transform Mountain Communications female Strategist Southwest deploy silver workforce Sleek deliverables",
      slug: "blue-south-account-account-robust",
      tags: [
        {
          id: 6,
          description:
            'C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
          name: "c++"
        }
      ],

      createdAt: "2024-02-24T09:21:52.721Z",
      source: "platform",
      displayDate: "59 minutes ago"
    }
  ].map(a => ({
    title: a.title,
    titleUrl: `https://programmer.network`,
    description: a.summary,
    date: a.createdAt,
    tags: a.tags.map(({ name }) => ({ name, url: `/tags/${name}` }))
  }));

  return (
    <div className='yl:max-w-5xl'>
      <Cards cards={cards} columns={2} NavLink={NavLink} className='yl:gap-4' />
    </div>
  );
};

export default CardsStories;
