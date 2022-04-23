import Navigation from "../Components/Navigation/Navigation";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      {children}
      <Navigation />
    </div>
  );
};

export default Layout;
