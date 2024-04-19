import { Meta } from "@storybook/react";
import { Alert } from "index";

const meta = {
  title: "Core / Alert",
  component: Alert,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Alert>;

export default meta;

export const Success = () => {
  return (
    <Alert type='success'>
      <span className='yl-font-bold'>Lorem ipsum dolor</span> sit amet,
      consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eligendi magni obcaecati, itaque dolorum quidem, delectus reiciendis rerum
      ullam beatae veniam rem saepe eius tempora ab possimus quis sint nulla
      ipsa, pariatur qui. Explicabo, cum inventore laudantium dicta deserunt
      doloribus. Amet iusto dolores harum ullam delectus, minima id praesentium
      deleniti fugit molestiae similique ducimus, laborum cupiditate quaerat
      exercitationem doloremque quis quibusdam, ea voluptatibus quisquam
      laudantium nesciunt voluptate molestias! Rem nam cupiditate libero tenetur
      quod, doloremque magni sunt numquam nulla voluptates illo quo repellendus
      voluptatum rerum alias, sapiente, ad minima deleniti omnis. Autem soluta
      sit libero quam sequi dolor sed adipisci incidunt!
    </Alert>
  );
};

export const Error = () => {
  return (
    <Alert type='error'>
      <span className='yl-font-bold'>Lorem ipsum dolor</span> sit amet,
      consectetur adipisicing elit. Doloremque sed numquam iste fugiat odit
      accusamus culpa, recusandae ea nemo quo!
    </Alert>
  );
};

export const Warning = () => {
  return (
    <Alert type='warning'>
      <span className='yl-font-bold'>Lorem ipsum dolor</span> sit amet,
      consectetur adipisicing elit. Doloremque sed numquam iste fugiat odit
      accusamus culpa, recusandae ea nemo quo!
    </Alert>
  );
};

export const Info = () => {
  return (
    <Alert type='info'>
      <span className='yl-font-bold'>Lorem ipsum dolor</span> sit amet,
      consectetur adipisicing elit. Doloremque sed numquam iste fugiat odit
      accusamus culpa, recusandae ea nemo quo!
    </Alert>
  );
};
