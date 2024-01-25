import { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';

function DashboardComponent() {
  const [dashboardDetails, setDashboardDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/dashboard/details');
        setDashboardDetails(response.data);
      } catch (error) {
        console.error('Error fetching dashboard details:', error);
      }
    };

    fetchData();
  }, []);

  const pieChartData = [
    { title: 'Age 16-30', value: dashboardDetails ? dashboardDetails.ageGroup16To30 : 0, color: '#64b5f6' },
    { title: 'Age 31-60', value: dashboardDetails ? dashboardDetails.ageGroup31To60 : 0, color: '#1e88e5' },
    { title: 'Age 60+', value: dashboardDetails ? dashboardDetails.ageGroup60Plus : 0, color: '#0d47a1' },
  ];

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Dashboard</h3>
      {dashboardDetails && (
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Records</h5>
                <p className="card-text">{dashboardDetails.totalRecords}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Male Citizens</h5>
                <p className="card-text">{dashboardDetails.maleCitizens}</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Female Citizens</h5>
                <p className="card-text">{dashboardDetails.femaleCitizens}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center">Age Group Distribution</h5>
                <div className="text-center">
                  <PieChart
                    data={pieChartData}
                    lineWidth={20}
                    startAngle={0}
                    totalValue={dashboardDetails.totalRecords}
                    paddingAngle={2}
                    radius={40}
                    label={({ dataEntry }) => `${dataEntry.title}: ${Math.round(dataEntry.percentage)}%`}
                    labelPosition={80}
                    labelStyle={{
                      fontSize: '6px',
                      fontFamily: 'Arial, sans-serif',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardComponent;