import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";
export default function LearningInfo() {

    return (
        <>
            <div className="container" style={{marginTop:"50px"}}>

            <div className="width100p padding0px card border-success">
                <div className="panel panel-primary" style={{border:"3px #59b565"}}>
                    <div className="panel-heading" style={{textAlign: "center"}}>
                    <h3 className="panel-title bg-success rounded-top" style={{color:"white"}}>
                        Instructions for Applying Learning-Licence:
                    </h3>
                    </div>

                    <div className="panel-body">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12 padding0px">
                                    <h4 className="text-success">Following are the stages of application for applying learners licence</h4>
                                </div>
                                <div className="col-md-12 padding0px">
                                    <div className="col-md-12 padding0px">
                                        <div className="col-md-12 top-space">
                                            1. &nbsp;FILL APPLICATION DETAILS Learning-Licence
                                        </div>
                                    </div>

                                    <div className="col-md-12 padding0px">
                                        <div className="col-md-12 top-space">
                                            2. &nbsp;UPLOAD DOCUMENTS,Photo,Signature and Address-Proof
                                        </div>
                                    </div>


                                    <div className="col-md-12 padding0px">
                                        <div className="col-md-12 top-space">
                                            3. &nbsp;Learning-Licence SLOT BOOK for Exam
                                        </div>
                                    </div>

                                    <div className="col-md-12 padding0px">
                                        <div className="col-md-12 top-space">
                                            4. &nbsp;Payment Process
                                        </div>
                                    </div>


                                    <div className="col-md-12 padding0px">
                                        <div className="col-md-12 top-space">
                                            5. &nbsp;PRINT THE RECEIPT
                                        </div>
                                    </div>


                                </div>

                                    
                                    <div className="col-md-12 padding0px">
                                        <div className="col-md-12 top-space">

                                        </div>
                                    </div>

                                    <div className="col-md-12 padding0px">

                                    </div>
                                    <div className="col-md-12 padding0px" >
                                        <div className="col-md-12 top-space" >
                                            <font color="blue">
                                                <span style={{fontSize: "25px"}}> NOTE : Please go through the Road Safety tutorial before proceeding for online Learner's Licence test. </span>
                                            </font> <br/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 top-space text-center">
                                        <Link to="/learninglicence/fillregisterdetails"><input type="button" value="Continue" style={{backgroundColor:"#59b565"}} className="btn me-3 top-space" /></Link>
                                        <Link to="/"><input type="button" value="Home" style={{backgroundColor:"#59b565"}}  className="btn top-space" /></Link>
                                    </div>
                                    </div>
                                </div>
                                   
                            </div>


                        </div>


                   </div> 
                    
                </div>
                </>
                );
}