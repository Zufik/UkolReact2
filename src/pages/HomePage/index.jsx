import './style.css';
import Header from '../../components/Header/header';
import Dashboard from '../../components/Dashboard/Dashboard';
import smartHomeData from '../../smartHomeData';

export const HomePage = () => {
  return (
    <>
     <div className="container">
      <Header title= "Chytrý dům"></Header>
      <Dashboard data = {smartHomeData}></Dashboard>

     </div>
    </>
  );
};
