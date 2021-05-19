import { React, useState } from 'react'
import Home from './Home'
import { Form, Container, Button } from 'react-bootstrap';
export default function Join() {
    var [suserObj, setsUserObj] = useState({
        uid: "",

        mob: "",
        add: "",
        statee: "",
        city: ""
    });



    var doUpdate = (e) => {
        var { name, value } = e.target;
        setsUserObj({
            ...suserObj, [name]: value
        })
    }
    function saveinfo() {

        var name = suserObj.uid;
        var contact = suserObj.mob;

        alert("Thnq for joining us " + name + " our team will soon contact you on your registered number " + contact);

    }
    return (
        <>
            <Home></Home>
            <br></br>
            <Container>



                <div className="row">

                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <Form>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Full Name: </Form.Label>
                                <Form.Control type="text" placeholder="must write full name" name="uid" value={suserObj.uid} onChange={doUpdate} />

                                {/* {errObj.email} */}
                            </Form.Group>

                            <Form.Group controlId="formBasicmobile">
                                <Form.Label>Contact : </Form.Label>
                                <Form.Control type="text" placeholder="xxx-xxx-xxxx" name="mob" value={suserObj.mob} onChange={doUpdate} />

                                {/* <u> {errObj.mob}</u> */}
                            </Form.Group>
                            <Form.Group controlId="formBasicmobile">
                                <Form.Label>Address : </Form.Label>
                                <Form.Control type="text" placeholder="street 145 xyz house no." name="add" value={suserObj.add} onChange={doUpdate} />

                                {/* <u> {errObj.mob}</u> */}
                            </Form.Group>
                            <Form.Group controlId="formBasicmobile">
                                <Form.Label>State : </Form.Label>
                                <Form.Control type="text" placeholder="Enter Your State" name="statee" value={suserObj.statee} onChange={doUpdate} />

                                {/* <u> {errObj.mob}</u> */}
                            </Form.Group>
                            <Form.Group controlId="formBasicmobile">
                                <Form.Label>City : </Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Current City" name="city" value={suserObj.city} onChange={doUpdate} />

                                {/* <u> {errObj.mob}</u> */}
                            </Form.Group>
                            <br></br>
                            <center>  <Button type="reset" style={{ backgroundColor: "#074d5e" }} onClick={saveinfo}>Register</Button></center>

                        </Form>
                    </div>

                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <br></br>
                        <img src="/pics/mm.png" height="500px" className="img-fluid" alt="no proper pic" ></img>
                    </div>
                </div>
                <hr></hr>
                <center><p style={{ color: "gray" }}>  &copy; All rights reserved madeby ClawsAndPaws</p>  </center>
            </Container>
        </>
    )
}
