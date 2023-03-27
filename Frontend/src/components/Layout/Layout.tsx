type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </>
  );
}
