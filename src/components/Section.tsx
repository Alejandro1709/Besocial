type SectionProps = {
  flex?: boolean;
  direction?: 'row' | 'col';
  mt?: number;
  children: React.ReactNode;
};

function Section({ flex, direction, mt, children }: SectionProps) {
  const isFlex = flex ? 'flex' : '';
  const dir = direction === 'row' ? 'flex-row' : 'flex-col';
  const marginTop = mt ? `mt-${mt}` : '';

  return (
    <section className={`${isFlex} ${dir} ${marginTop} w-full`}>
      {children}
    </section>
  );
}

export default Section;
