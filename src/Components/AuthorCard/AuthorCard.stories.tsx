import AuthorCard from ".";

export default {
  title: "Components / Author Card",
  parameters: {
    layout: "centered"
  }
};

export const Primary = () => {
  return (
    <div className='yl-mt-8'>
      <AuthorCard
        name='John Doe'
        avatar=''
        about='matrix Handcrafted urban up Soft plum bypassing red Rustic Harbors kilogram interface Electric transform South withdrawal Dominican input Crest fooey Manager explicit Berkshire green foreground'
      />
    </div>
  );
};
