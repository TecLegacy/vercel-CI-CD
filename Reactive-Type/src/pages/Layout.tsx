import { Outlet, NavLink, useNavigation } from 'react-router-dom';
type Props = {};

const Layout = (props: Props) => {
  const navigation = useNavigation();
  return (
    <>
      <main
        className={` flex h-full w-full items-center justify-center bg-blue-900 text-2xl `}
      >
        <ul className=" mx-4  mt-5 flex gap-4 py-6  ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 underline' : ' text-orange-500 '
              }
              end={true} // to match default
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? ' text-yellow-300 underline ' : ' text-orange-500'
              }
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/items/new"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 underline ' : ' text-orange-500'
              }
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </main>

      {navigation.state === 'loading' && <p>Loading...</p>}
      <Outlet />
    </>
  );
};

export default Layout;
