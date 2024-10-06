import { Card } from "@material-tailwind/react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container max-w-full">
      <div className="float-left w-20 border h-screen mx-2 ">
        <p className="">Side bar</p>
      </div>
      <div className="float-left border h-screen">{children}</div>
    </div>
  );
};

export default Layout;
