type SectionProps = {
  children: React.ReactNode;
};

function Section({ children }: SectionProps) {
  return (
    <section className='md:my-4 md:mx-0 m-4 bg-green-200'>{children}</section>
  );
}

export default Section;
