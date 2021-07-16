import React, { useState } from 'react'

function AdditionalDetails() {
   
    const [toggleState, setToggleState] = useState(1);
    
    const toggleTab=(index)=>{
        setToggleState(index);
    }
    return (
        <>
            <div id="additional" className="py-5">
                <div className="container pl-5">
                    <ul id="desc-tabs" className=" d-flex justify-content-center pb-3">
                        <li>
                            <div  className= {toggleState === 1 ? "tabs active-tabs" : "tabs"}  onClick = {() => toggleTab(1)}>DESCRIPTION <span className="px-2">|</span> </div>
                        </li>

                        <li>
                            <div  className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick = {() => toggleTab(2)}>ADDITIONAL INFORMATION <span className="px-2">|</span> </div>
                        </li>
                        <li>
                            <div  className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick = {() => toggleTab(3)}>REVIEWS (0)</div>
                        </li>
                    </ul>
                    <div id="content-tabs" className= {toggleState === 1 ? " active-content" : "content"}>
                        <p className="w-75 m-auto pb-3 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, pariatur molestias cupiditate voluptatum dolores corrupti quas ullam laudantium quibusdam culpa. Laudantium illum numquam exercitationem velit. Quibusdam enim incidunt aspernatur fugit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eligendi eius voluptates sequi nisi nemo repellat soluta, doloribus, quod eum recusandae. At voluptas eos fuga quae necessitatibus nostrum sint corporis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut temporibus tempore consequuntur eum molestias adipisci ducimus repellat omnis molestiae magni voluptatem expedita doloremque praesentium quaerat reprehenderit exercitationem, eos dolores ratione.</p>

                        <p className="w-75 m-auto ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur esse nulla adipisci tempora aperiam rerum officiis blanditiis magni delectus est commodi dolores labore aliquid reiciendis laboriosam, quaerat iste inventore. Commodi.</p>
                    </div>
                    <div id="dimensions" className= {toggleState === 2 ? " active-content" : "content"}>
                        <span>Dimensions</span>
                        <span>	56796268 × 56796368 cm</span>
                    </div>
                    <div id="reviews " className= {toggleState === 3 ? " active-content" : "content"}>
                        <p>There are no reviews yet</p>
                        <p>Be the first to review "Marigold"</p>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <p>Your Rating</p>
                        <div id="rating">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Your Review *</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Name *</label>
                                <input type="text" className="form-control w-25" id="formGroupExampleInput" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Email *</label>
                                <input type="email" className="form-control w-25" id="exampleFormControlInput1"/>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>
                            <br/>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Notify me of new posts by email.</label>
                            </div>
                            <br/>
                            <button className="btn btn-info mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default AdditionalDetails
