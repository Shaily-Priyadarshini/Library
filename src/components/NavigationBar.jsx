import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation(); // Get the current route

  return (
    <ul className='navigation flex w-5/6 m-auto mt-2 p-2 bg-slate-200 rounded'>
      <li className={location.pathname === '/' ? 'flex-1 bg-white' : 'flex-1'}>
        <Link to="/">Featured</Link>
      </li>
      <li className={location.pathname === '/kpi' ? 'flex-1 bg-white' : 'flex-1'}>
        <Link to="/kpi">KPI</Link>
      </li>
      <li className={location.pathname === '/layouts' ? 'flex-1 bg-white' : 'flex-1'}>
        <Link to="/layouts">Layouts</Link>
      </li>
      <li className={location.pathname === '/storyboards' ? 'flex-1 bg-white' : 'flex-1'}>
        <Link to="/storyboards">StoryBoards</Link>
      </li>
    </ul>
  );
};

export default NavigationBar;
