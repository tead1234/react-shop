import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let watchedItem = JSON.parse(localStorage.getItem("watched"));
    watchedItem = Array.from(new Set(watchedItem));
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2">
          {NamedNodeMap}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>최근에 본 상품</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
                {
                    watchedItem != null?   
                     
                     watchedItem.map((a)=>(
                            <p>{a}</p>
                        ))  : null
                    
                }
            

          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  function RecentlyWatchedPanel() {
    return (
      <>
        {['end'].map((placement, idx) => (
          <OffCanvasExample key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }

  export default RecentlyWatchedPanel;