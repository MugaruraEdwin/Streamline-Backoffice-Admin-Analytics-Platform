import React,{ useState, useEffect } from 'react'
import './App.css'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import useIdle from './Hooks/useIdleTimer';
import { useNavigate } from 'react-router-dom';
import '../public/css/modal.css';

function Home() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const handleIdle = () => {
    console.log("User is idle...");
    setShowModal(true); //show modal
    setRemainingTime(30); //set 15 seconds as time remaining
  };

  const { isIdle } = useIdle({ onIdle: handleIdle, idleTime: 0.3});

  useEffect(() => {
    let interval;

    if (isIdle && showModal) {
      interval = setInterval(() => {
        setRemainingTime(
          (prevRemainingTime) =>
            prevRemainingTime > 0 ? prevRemainingTime - 1 : 0 //reduces the second by 1
        );
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isIdle, showModal]);

  useEffect(() => {
    if (remainingTime === 0 && showModal) {
      // alert("Time out!");
      setShowModal(false);
      navigate("/");
    }
  }, [remainingTime, showModal, navigate]); // this is responsoble for logging user out after timer is down to zero and they have not clicked anything

  const handleLogOut = () => {
    console.log("Logging out...");
    setShowModal(false);
    navigate("/");
  };

  const handleStayLoggedIn = () => {
    console.log("Staying logged in...");
    setShowModal(false);

  };

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  
  //   return (
  //     <>
  //     {/* handle isIdle for the modal */}
  //     {isIdle && showModal && (
  //       <div className="modal">
  //         <div className="modal-content">
  //           <h2>Idle Timeout Warning</h2>
  //           <p>You are about to be logged out due to inactivity.</p>
  //           <br />
  //           Time remaining: {millisToMinutesAndSeconds(remainingTime * 1000)}
  //           <br />
  //           <div className="row">
  //           <button className="btn btn-danger" onClick={handleLogOut}>
  //             Logout
  //           </button>
  //           <button className="btn btn-primary " onClick={handleStayLoggedIn}>
  //             Stay Logged In
  //           </button>
  //           </div>

  //         </div>
  //       </div>
  //     )}

  //     <div>
  //       <iframe title="STREAMLINE demo files (1)" width="1700" height="1080" src="https://app.powerbi.com/reportEmbed?reportId=519c9242-710e-481e-b1d5-70c834b4cc68&autoAuth=true&ctid=42af99c6-5a96-4d4d-af48-3317dac88db0" frameborder="0" allowFullScreen="true"></iframe>
  //     </div>
  //   </>
  
  //   )
  // }
  
  // export default Home;

  return (
    <>
      {/* handle isIdle for the modal */}
      {isIdle && showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Idle Timeout Warning</h2>
            <p>You are about to be logged out due to inactivity.</p>
            <br />
            Time remaining: {millisToMinutesAndSeconds(remainingTime * 1000)}
            <br />
            <div className="row">
            <button className="btn btn-danger" onClick={handleLogOut}>
              Logout
            </button>
            <button className="btn btn-primary " onClick={handleStayLoggedIn}>
              Stay Logged In
            </button>
            </div>

          </div>
        </div>
      )}

      <div>
        <iframe title="STREAMLINE demo files (1)" width="1500" height="850" src="https://app.powerbi.com/reportEmbed?reportId=519c9242-710e-481e-b1d5-70c834b4cc68&autoAuth=true&ctid=42af99c6-5a96-4d4d-af48-3317dac88db0" frameborder="0" allowFullScreen="true"></iframe>
      </div>
    </>
  );
}

export default Home;

