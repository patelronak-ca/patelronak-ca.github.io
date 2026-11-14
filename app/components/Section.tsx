type Props = {
  id: string;
  title: string;
  label: string;
  children: React.ReactNode;
};

// Two-column section: heading on the left, content on the right.
export default function Section({ id, title, label, children }: Props) {
  return (
    <section id={id}>
      <div className="wrap sec-head">
        <div>
          <h2>{title}</h2>
          <div className="sec-label">{label}</div>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}
