type SectionProps = {
  flex?: boolean;
  direction?: 'row' | 'col';
  children: React.ReactNode;
};

function Section({ flex, direction, children }: SectionProps) {
  const isFlex = flex ? 'flex' : '';
  const dir = direction === 'row' ? 'flex-row' : 'flex-col';

  return (
    <section className={`${isFlex} ${dir} w-full bg-green-200`}>
      {children}
    </section>
  );
}

export default Section;
