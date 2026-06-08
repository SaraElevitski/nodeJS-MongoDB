import { useEffect, useState, type FC } from "react";

import "./Home.scss";
import volunteersService from "../../services/volunteers.service";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [listVolunteers, setListVolunteers] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // שולח את כל הקריאות יחד ומחכה שכולן יחזרו
        const [
          volunteersRes,
          // requestsRes
        ] = await Promise.all([
          volunteersService.GetVolunteersList(),
          // requestsService.GetRequestsList()
        ]);

        setListVolunteers(volunteersRes.data.data);
        // setListRequests(requestsRes.data);
      } catch (error) {
        // setError("חלק מהנתונים לא נטענו בהצלחה");
      }
    };

    fetchAllData();
  }, []);

  return <div className="Home">
  
  <div>{listVolunteers && listVolunteers.map((item) => (
      <p key={item._id}>{item.firstName}</p> 
    ))}</div>



  
  
  </div>;
};

export default Home;
