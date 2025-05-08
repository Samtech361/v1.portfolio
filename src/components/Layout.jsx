import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row h-auto">
      <div className="md:w-52 lg:w-64">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}

export default Layout;
