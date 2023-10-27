import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Profile = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  return (
    <div>

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}


      <section className="inner-section profile-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>Your Profile</h4>
                  <Button variant="primary" onClick={handleShow}>
                    edit
                    profile
                  </Button>

                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <form action="/edit_profile" method="POST" encType="multipart/form-data" className="modal-form">
                        <input type="hidden" name="_token" defaultValue="ZneJaxHuvZYpkyQ2Uzir84JyciYsRsgcRFgxFYz8" />                    <div className="form-title">
                          <h3>edit profile info</h3>
                        </div>
                        <div className="form-group"><label className="form-label">profile image</label><input name="profile_photo_path" className="form-control" type="file" /></div>
                        <div className="form-group"><label className="form-label">name</label><input className="form-control" name="name" type="text" defaultValue="Akanksha" /></div>
                        <div className="form-group"><label className="form-label">email</label><input className="form-control" name="email" type="text" defaultValue="akankshaghadge29@gmail.com" /></div>
                        {/* <button className="form-btn"type="submit" >save profile info</button> */}
                      </form>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" type="submit">save profile info</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-lg-2">
                      <div className="profile-image">
                        <a>
                          <img style={{ width: 80, height: 80 }} src="https://vsmart.ajspire.com/images/ee.png" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group"><label className="form-label">name</label><input className="form-control" type="text" defaultValue="Akanksha" readOnly /></div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="form-group"><label className="form-label">Email</label><input className="form-control" type="email" defaultValue="akankshaghadge29@gmail.com" readOnly /></div>
                    </div>
                    <div className="col-lg-2">
                      <div className="profile-btn"><a href="/change_pass/5698" data-bs-toggle="modal">change pass.</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>contact number</h4>
                  <Button variant="primary" onClick={handleShow1}>
                    Edit
                    Contact
                  </Button>

                  <Modal
                    show={show1}
                    onHide={handleClose1}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div class="form-group"><label class="form-label">number</label><input name="mob_no" value="9552473748" class="form-control" type="text" placeholder="Enter your number" autocomplete="off" />
                      </div>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose1}>
                        Close
                      </Button>
                      <Button variant="primary" type="submit">save Contact info</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact active">
                        <h6>primary</h6>
                        <p>9552473748</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>Delivery Address</h4><button className="btn btn-primary py-3 px-4" data-bs-target="#address-add">Edit
                    Address</button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address active">
                        <h6>Home</h6>
                        <p>beed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
};

export default Profile;
